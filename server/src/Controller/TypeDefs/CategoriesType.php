<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class CategoriesType 
{
    private $categoriesType = null;

    public static function build() {
        return new ObjectType([
            "name" => "Categories",
            "fields" => [
                "name" => Type::string()
            ]
        ]);
    }
}