<?php

declare(strict_types=1);

namespace App\Models\Products;

use GraphQL\Error\UserError;

abstract class Products
{
    protected int|string $id;
    protected string $name;
    protected string $brand;
    protected string $description;
    protected int|bool $in_stock;
    protected int|string $category_id;
    protected array $gallery = [];
    protected array $price = [];
    
    public function __construct(array $data)
    {
        $this->id = $data['id'];
        $this->name = $data['name'];
        $this->brand = $data['brand'];
        $this->description = $data['description'];
        $this->in_stock = $data['in_stock'];
        $this->category_id = $data['category_id'];
    }
    
    public static function getProduct(int|string $id, \PDO $pdo) {
        $stmt = $pdo->prepare("
            SELECT products.*, categories.name AS category FROM products
            JOIN categories ON categories.id = products.category_id
            WHERE products.id = ?
        ");
        $stmt->execute([$id]);
        $result = $stmt->fetch(\PDO::FETCH_ASSOC);
        if($result === false || $result === null) {
            throw new UserError("Product with ID \"$id\" not found.");
        } 
        return $result;
    }

    public function getGallery(\PDO $pdo):Products {
        $stmt = $pdo->prepare("
            SELECT * FROM galleries
            WHERE galleries.product_id = ?
        ");
        $stmt->execute([$this->id]);
        $this->gallery = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $this;
    } 

    public function getPrice(\PDO $pdo):Products {
        $stmt = $pdo->prepare("
            SELECT * FROM prices
            JOIN currencies ON currencies.id = prices.currency_id
            WHERE product_id = ?
        ");
        $stmt->execute([$this->id]);
        $this->price = $stmt->fetch(\PDO::FETCH_ASSOC);
        return $this;
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

    abstract public function getType(): string;
}