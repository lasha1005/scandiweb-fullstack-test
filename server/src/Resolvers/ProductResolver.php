<?php

namespace App\Resolvers;

use App\Models\Products\ClothesProduct;
use App\Models\Products\Products;
use App\Models\Products\TechProduct;

class ProductResolver
{
    public static function resolveProduct(array $root, array $args, array $context) {
        $pdo = $context['pdo'];
        $data = Products::getProduct($args["id"], $pdo);
        if (!$data) {
            return null;
        }

        $type = strtolower($data["category"]);
        $classMap = [
            "tech" => TechProduct::class,
            "clothes" => ClothesProduct::class
        ];

        if(!isset($classMap[$type])) {
            return null;
        }

        $product = new $classMap[$type]($data);
        return $product->getGallery($pdo)->getPrice($pdo)->toArray();
    }
}