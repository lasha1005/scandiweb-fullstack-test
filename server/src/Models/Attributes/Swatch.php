<?php

declare(strict_types=1);

namespace App\Models\Attributes;

class Swatch extends Attributes
{

    public function __construct(array $data)
    {
        parent::__construct($data);
    }
    
    public function getType():string 
    {
        return "swatch";
    }

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