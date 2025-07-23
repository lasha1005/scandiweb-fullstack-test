<?php

namespace App\Resolvers;

use App\Models\Attributes\Attributes;
use App\Models\Attributes\Swatch;
use App\Models\Attributes\Text;

class AttributeResolver
{
    public static function resolveAttribute(array $root, array $args, array $context) {
        $pdo = $context['pdo'];
        return Attributes::getAttributes($pdo, $root['id']);
    }

    public static function resolveAttributeValues(array $root, array $args, array $context) {
        $pdo = $context['pdo'];
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
}