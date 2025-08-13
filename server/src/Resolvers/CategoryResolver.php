<?php

namespace App\Resolvers;

use App\Models\Categories\All;
use App\Models\Categories\Category;
use App\Models\Categories\Clothes;
use App\Models\Categories\Tech;
use App\Models\Products\ClothesProduct;
use App\Models\Products\TechProduct;

class CategoryResolver
{
    public static function resolveCategories(array $root, array $args, array $context) {
        $pdo = $context['pdo'];
        return $categories = Category::getCategories($pdo);
    }

    public static function resolveCategory(array $root, array $args, array $context) {
        $pdo = $context['pdo'];
        if(!empty($args['name'])) {
            $category = Category::getCategory($args['name'], $pdo);
            return ["categoryName" => $category['name']];
        }
        return null;
    }

    public static function resolveCategoryProducts(array $root, array $args, array $context) {
        $pdo = $context['pdo'];
        if(empty($root['categoryName'])) {
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

        $categoryName = strtolower($root['categoryName']);
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
}
