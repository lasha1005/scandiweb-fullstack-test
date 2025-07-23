<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs;

use App\Resolvers\AttributeResolver;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeTypes 
{
    private static $attributeType = null;

    public static function build()
    {
        if(!self::$attributeType) {
            self::$attributeType = new ObjectType([
                "name" => "AttributeSet",
                "fields" => [
                    "id" => Type::string(),
                    "items" => [
                        "type" =>Type::listOf(AttributeItemsType::build()),
                        "resolve" => [AttributeResolver::class, "resolveAttributeValues"]
                    ],
                    "name" => Type::string(),
                    "type" => Type::string(),
                ]
            ]);
        }
        return self::$attributeType;
    }
}