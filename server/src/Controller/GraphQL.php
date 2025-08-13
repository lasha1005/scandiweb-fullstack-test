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
use App\Controller\TypeDefs\CategoriesType;
use App\Resolvers\CategoryResolver;
use App\Resolvers\OrderResolver;
use App\Resolvers\ProductResolver;

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
                    "categories" =>[
                        "type" => Type::listOf(CategoriesType::build()),
                        "resolve" => [CategoryResolver::class, 'resolveCategories']
                    ],
                    "category" => [
                        "type" => CategoryType::build($pdo),
                        "args" => [
                            "name" => Type::string()
                        ],
                        "resolve" => [CategoryResolver::class, 'resolveCategory']
                    ],
                    "product" => [
                        "type" => ProductTypes::build($pdo),
                        "args" => [
                            "id" => Type::nonNull(Type::id())
                        ],
                        "resolve" => [ProductResolver::class, 'resolveProduct']
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
                        'resolve' => [OrderResolver::class, 'resolveOrder']
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
            $context = [
                'pdo' => $pdo,
            ];
            $rootValue = ['prefix' => 'You said: '];
            $result = GraphQLBase::executeQuery($schema, $query, $rootValue, $context, $variableValues);
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