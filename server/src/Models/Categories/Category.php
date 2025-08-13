<?php

declare(strict_types=1);

namespace App\Models\Categories;

use GraphQL\Error\UserError;

abstract class Category
{
    
    public static function getCategories(\PDO $pdo) {
        $stmt = $pdo->query("SELECT * FROM categories");
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public static function getCategory(string $name, \PDO $pdo):array
    {
        $stmt = $pdo->prepare("
            SELECT * FROM categories WHERE categories.name = ?
        ");
        $stmt ->execute([$name]);
        $result = $stmt->fetch(\PDO::FETCH_ASSOC);
        if($result === false || $result === null) {
            throw new UserError("Category named \"$name\" not found");
        }
        return $result;
    }

    abstract public function getType(): string;
    
    abstract public function getProducts(\PDO $pdo): array;
}