<?php

declare(strict_types=1);

namespace App\Models\Order;

class OrderValidator
{
    public static function validateProducts(array $products) {
        if(!is_array($products) || empty($products)) {
            return ["result" => "No products provided for the order"];
        }

        foreach ($products as $product) {
            if(empty($product["id"]) || !isset($product["quantity"]) || !is_array($product["selectedAttributes"])) {
                return "Invalid product data";
            }
            if(!is_numeric($product['quantity']) || $product['quantity'] <= 0) {
                return "Product quantity must be a positive number.";
            }
            foreach($product["selectedAttributes"] as $attr) {
                if(empty($attr["name"]) || !isset($attr["value"])) {
                    return "Invalid attribute data.";
                }
            }
        }
    } 
}