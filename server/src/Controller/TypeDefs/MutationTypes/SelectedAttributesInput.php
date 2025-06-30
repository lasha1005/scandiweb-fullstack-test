<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs\MutationTypes;

use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class SelectedAttributesInput
{
    private static $selectedAttributesInput = null;

    public static function build()
    {
        if(!self::$selectedAttributesInput) {
            self::$selectedAttributesInput =  new InputObjectType([
                "name" => "SelectedAttributesInput",
                "fields" => [
                    "name" => Type::nonNull(Type::string()),
                    "value" => Type::nonNull(Type::string()),
                ]
            ]);
        }
        return self::$selectedAttributesInput;
    }
}