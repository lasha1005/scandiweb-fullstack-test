<?php

declare(strict_types=1);

namespace App\Models\Products;

class ClothesProduct extends Products 
{
    use ProductArrayTrait;
    
    public function __construct(array $data)
    {
        parent::__construct($data);
    }

    public function getType(): string
    {
        return "clothes";
    }
}
