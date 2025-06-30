<?php

declare(strict_types=1);

namespace App\Controller;

use App\Controller\TypeDefs\CategoryType;
use App\Controller\TypeDefs\MutationTypes\OrderInputType;
use App\Controller\TypeDefs\MutationTypes\OrderType;
use GraphQL\GraphQL as GraphQLBase;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\Type\SchemaConfig;
use RuntimeException;
use Throwable;
use App\Controller\TypeDefs\ProductTypes;
use App\Models\Categories\Category;
use App\Models\Order\Order;
use App\Models\Products\ClothesProduct;
use App\Models\Products\Products;
use App\Models\Products\TechProduct;

class GraphQL {
    static public function handle() {
        try {
            $db = new \App\Models\Dbh();
            $pdo = $db->connect();
        } catch (\PDOException $e) {
            throw new \RuntimeException("Database connection failed: " . $e->getMessage());
        }


        try {
            $queryType = new ObjectType([
                "name" => "Query",
                "fields" => [
                    "Category" => [
                        "type" => CategoryType::build($pdo),
                        "args" => [
                            "name" => Type::string()
                        ],
                        "resolve" => static function (array $root, array $args) use ($pdo) {
                            if(!empty($args['name'])) {
                                return Category::getCategory($args['name'], $pdo);
                            }
                            return null;
                        } 
                    ],
                    "Product" => [
                        "type" => ProductTypes::build($pdo),
                        "args" => [
                            "id" => Type::nonNull(Type::id())
                        ],
                        "resolve" => static function($root, $args) use ($pdo) {
                            $data = Products::getProduct($args["id"], $pdo);
                            if(!$data) {
                                return null;
                            }

                            $type = strtolower($data["category"]);
                            $classMap = [
                                "tech" => TechProduct::class,
                                "clothes" => ClothesProduct::class,
                            ];

                            if(!isset($classMap[$type])) {
                                return null;
                            }

                            $product = new $classMap[$type]($data);
                            return $product->getGallery($pdo)->getPrice($pdo)->toArray();
                        }
                    ],  
                ],
            ]);
        
            $mutationType = new ObjectType([
                'name' => 'Mutation',
                'fields' => [
                    'createOrder' => [
                        'type' => OrderType::build(),
                        'args' => [
                            'order' => OrderInputType::build()
                        ],
                        'resolve' => static function($root, $args) use($pdo) {
                            $order = new Order($args['order']['products']);
                            return $order->create($pdo);
                        }
                    ],
                ],
            ]);
        
            $schema = new Schema(
                (new SchemaConfig())
                ->setQuery($queryType)
                ->setMutation($mutationType)
            );
        
            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new RuntimeException('Failed to get php://input');
            }
        
            $input = json_decode($rawInput, true);
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;
        
            $rootValue = ['prefix' => 'You said: '];
            $result = GraphQLBase::executeQuery($schema, $query, $rootValue, null, $variableValues);
            $output = $result->toArray();
        } catch (Throwable $e) {
            $output = [
                'error' => [
                    'message' => $e->getMessage(),
                ],
            ];
        }

        header('Content-Type: application/json; charset=UTF-8');
        return json_encode($output);
    }
}