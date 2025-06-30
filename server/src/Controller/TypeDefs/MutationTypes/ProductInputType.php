<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs\MutationTypes;

use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class ProductInputType
{
    private static $productInputType = null;
    
    public static function build()
    {
        if(!self::$productInputType) {
            self::$productInputType = new InputObjectType([
                "name" => "ProductInput",
                "fields" => [
                    "id" => Type::nonNull(Type::string()),
                    "quantity" => Type::nonNull(Type::int()),
                    "selectedAttributes" => Type::nonNull(Type::listOf(SelectedAttributesInput::build())),
                ],
            ]);
        }
        return self::$productInputType;
    } 
}