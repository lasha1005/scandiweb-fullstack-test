<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs\MutationTypes;

use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class OrderInputType
{
    private static $orderInputType = null;

    public static function build()
    {
        if(!self::$orderInputType){
            self::$orderInputType = new InputObjectType([
                "name" => "OrderInput",
                "fields" => [
                    "products" => Type::nonNull(Type::listOf(ProductInputType::build()))
                ]
                ]);
        }
        return self::$orderInputType;
    }
}