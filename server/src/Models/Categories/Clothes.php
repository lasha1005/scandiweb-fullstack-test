<?php

declare(strict_types=1);

namespace App\Models\Categories;

class Clothes extends Category 
{
    public function getType(): string
    {
        return "clothes";
    }

    public function getProducts(\PDO $pdo): array
    {
        $stmt = $pdo->prepare("
            SELECT products.* FROM products
            JOIN categories ON products.category_id = categories.id
            WHERE categories.name = ?
        ");
        $stmt->execute([$this->getType()]);
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}