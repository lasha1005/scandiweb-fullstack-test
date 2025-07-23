<?php

declare(strict_types=1);

namespace App\Models\Categories;

abstract class Category
{
    public static function getCategory(string $name, \PDO $pdo):array
    {
        $stmt = $pdo->prepare("
            SELECT * FROM categories WHERE categories.name = ?
        ");
        $stmt ->execute([$name]);
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    abstract public function getType(): string;
    
    abstract public function getProducts(\PDO $pdo): array;
}