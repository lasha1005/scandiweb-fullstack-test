<?php

declare(strict_types=1);

namespace App\Models\Categories;

class All extends Category
{
    public function getType(): string
    {
        return "all";
    }

    public function getProducts(\PDO $pdo): array
    {
        $stmt = $pdo->query("
            SELECT products.*, categories.name AS category FROM products
            JOIN categories ON products.category_id = categories.id

        ");
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}