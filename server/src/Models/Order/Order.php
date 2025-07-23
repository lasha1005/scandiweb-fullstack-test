<?php

declare(strict_types=1);

namespace App\Models\Order;

class Order
{
    private $products;
    
    public function __construct(array $products)
    {
        $this->products = $products;
    }

    public function create(\PDO $pdo) {
        // Validationg Order
        $validationError = OrderValidator::validateProducts($this->products);
        if($validationError) {
            return [
                "result" => $validationError,
                "success" => false
            ];
        }

        $stmt = $pdo->prepare("INSERT INTO orders() VALUES ()");
        $stmt->execute();
        $orderId = $pdo->lastInsertId();

        $orderItemStmt = $pdo->prepare("
            INSERT INTO order_items (order_id, product_id, quantity) VALUES(?, ?, ?)
        ");
        $attrStmt = $pdo->prepare("
            INSERT INTO order_item_attributes (order_item_id, name, value) VALUES(?, ?, ?)
        ");
        
        // Inserting products and their selected variables into the database
        foreach($this->products as $product) {
            $orderItemStmt->execute([$orderId, $product["id"],$product["quantity"]]);
            $orderItemId= $pdo->lastInsertId();

            foreach($product["selectedAttributes"] as $attr) {
                $attrStmt->execute([$orderItemId, $attr["name"], $attr["value"]]);
            }
        }

        return [
            "result" => "Order created successfully!",
            "success" => true
        ];
    }
}