<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs;

use App\Models\Attributes\Attributes;
use App\Models\Attributes\Swatch;
use App\Models\Attributes\Text;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeTypes 
{
    private static $attributeType = null;

    public static function build(\PDO $pdo)
    {
        if(!self::$attributeType) {
            self::$attributeType = new ObjectType([
                "name" => "AttributeSet",
                "fields" => [
                    "id" => Type::string(),
                    "items" => [
                        "type" =>Type::listOf(AttributeItemsType::build()),
                        "resolve" => static function ($root) use ($pdo) {
                            $attributeMap = [
                                "text" => Text::class,
                                "swatch" => Swatch::class
                            ];
                            $attributeRows = Attributes::getAttributeItems($pdo, $root['id']);
    
                            $attributes = [];
                            foreach($attributeRows as $row) {
                                if(isset($attributeMap[$root['type']])) {
                                    $class = $attributeMap[$root['type']];
                                    $attributes[] = (new $class($row))->toArray();
                                }
                            }
                            return $attributes;
                        }
                    ],
                    "name" => Type::string(),
                    "type" => Type::string(),
                ]
            ]);
        }
        return self::$attributeType;
    }
}