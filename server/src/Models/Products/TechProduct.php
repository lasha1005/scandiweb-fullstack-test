<?php 

declare(strict_types=1);

namespace App\Models\Products;

class TechProduct extends Products
{
    use ProductArrayTrait;
    
    public function __construct(array $data)
    {
        parent::__construct($data);
    }

    public function getType(): string 
    {
        return "tech";
    }
    
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
