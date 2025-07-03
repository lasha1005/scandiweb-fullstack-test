<?php

namespace App\Models\Products;

trait ProducArrayTrait
{
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'brand' => $this->brand,
            'description' => $this->description,
            'in_stock' => $this->in_stock,
            'category' => $this->getType(),
            'gallery' => $this->gallery,
            'price' => $this->price
        ];
    }
}
