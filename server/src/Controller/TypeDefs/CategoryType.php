<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\Controller\TypeDefs\ProductTypes;
use App\Models\Categories\All;
use App\Models\Categories\Clothes;
use App\Models\Categories\Tech;
use App\Models\Products\ClothesProduct;
use App\Models\Products\TechProduct;

class CategoryType
{
    public static function build(\PDO $pdo)
    {
        return new ObjectType([
            "name" => "Category",
            "fields" => [
                "products" => [
                    "type" => Type::listOf(ProductTypes::build($pdo)),
                    "resolve" => static function ($root) use ($pdo) {
                        if(empty($root['name'])) {
                            return [];
                        }

                        $categoryMap = [
                            "all" => All::class,
                            "clothes" => Clothes::class,
                            "tech" => Tech::class,
                        ];

                        $productsClassMap = [
                            "clothes" => ClothesProduct::class,
                            "tech" => TechProduct::class,
                        ];

                        $categoryName = strtolower($root['name']);
                        if(!isset($categoryMap[$categoryName])) {
                            return [];
                        }

                        $categoryObj = new $categoryMap[$categoryName];
                        
                        $productsData = $categoryObj->getProducts($pdo);
                        
                        $products = [];
                        foreach($productsData as $row) {
                            if($categoryName === "all") {
                                $productCategory = strtolower($row['category']);
                                
                                if(isset($productsClassMap[$productCategory])) {
                                    $class = (new $productsClassMap[$productCategory]($row));
                                    $products[] = $class->getGallery($pdo)->getPrice($pdo)->toArray();
                                }
                            }else {
                                if(isset($productsClassMap[$categoryName])) {
                                    $class = (new $productsClassMap[$categoryName]($row));
                                    $products[] = (new $class($row))->getGallery($pdo)->getPrice($pdo)->toArray();
                                }
                            }

                        }
                        return $products;
                    } 
                ]
            ],
        ]);
    } 
}