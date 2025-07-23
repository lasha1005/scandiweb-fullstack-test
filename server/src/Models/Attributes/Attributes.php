<?php

declare(strict_types=1);

namespace App\Models\Attributes;

abstract class Attributes 
{
    protected string $type;
    protected string $display_value;
    protected string $value;
    protected int|string $item_id;
    

    public function __construct(array $data)
    {
        $this->display_value = $data["display_value"];
        $this->value = $data["value"];
        $this->item_id = $data["item_id"];
    }

    public static function getAttributes(\PDO $pdo, int|string $id) {
        $stmt = $pdo->prepare("
            SELECT * FROM attributes
            WHERE product_id = ?
        ");
        $stmt->execute([$id]);
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public static function getAttributeItems(\PDO $pdo, int|string $id) {
        $stmt = $pdo->prepare("
            SELECT * FROM attribute_items
            WHERE attribute_id = ?
        ");
        $stmt->execute([$id]);
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    } 
    
    abstract public function getType(): string;
    
    public function toArray():array
    {
        return [
            "type" => $this->getType(),
            "display_value" => $this->display_value,
            "value" => $this->value,
            "item_id" => $this->item_id,
        ];
    }
}