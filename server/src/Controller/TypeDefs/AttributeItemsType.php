<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;



class AttributeItemsType {
    private static $attributeItemsType = null;

    public static function build()
    {
        if(!self::$attributeItemsType){
            self::$attributeItemsType = new ObjectType([
                "name" => "Attribute",
                "fields" => [
                    "display_value" => Type::string(),
                    "value" => Type::string(),
                    "item_id" => Type::string(),
                    "type" => Type::string(),
                ]
            ]);
        }
        return self::$attributeItemsType;
    }
}