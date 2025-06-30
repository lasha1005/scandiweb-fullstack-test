<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs\MutationTypes;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class OrderType
{
    private static $orderType = null;

    public static function build() {
        if(!self::$orderType) {
            self::$orderType = new ObjectType([
                "name" => "Order",
                "fields" => [
                    "result" => Type::string(),
                    "success" => Type::boolean()
                ]
            ]);
        }
        return self::$orderType;
    }
}