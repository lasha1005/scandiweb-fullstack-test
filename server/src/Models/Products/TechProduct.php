<?php 

declare(strict_types=1);

namespace App\Models\Products;

class TechProduct extends Products
{   
    public function __construct(array $data)
    {
        parent::__construct($data);
    }

    public function getType(): string 
    {
        return "tech";
    }
}
