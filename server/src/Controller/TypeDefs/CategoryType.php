<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\Controller\TypeDefs\ProductTypes;
use App\Resolvers\CategoryResolver;

class CategoryType
{
    public static function build()
    {
        return new ObjectType([
            "name" => "Category",
            "fields" => [
                "categoryName" => Type::string(),
                "products" => [
                    "type" => Type::listOf(ProductTypes::build()),
                    "resolve" => [CategoryResolver::class, 'resolveCategoryProducts']
                ]
            ],
        ]);
    } 
}