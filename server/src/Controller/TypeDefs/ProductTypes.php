<?php

declare(strict_types=1);

namespace App\Controller\TypeDefs;

use App\Resolvers\AttributeResolver;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;



class ProductTypes {

    private static $productType = null;
    private static $galleryType = null;
    private static $priceType = null;

    public static function getGalleryType() {
        if(!self::$galleryType) {
            self::$galleryType =  new ObjectType([
                "name" => "Gallery",
                "fields" => [
                    "image_url" => Type::string()
                ]
            ]);
        }
        return self::$galleryType;
    }

    public static function getPriceType() {
        if(!self::$priceType) {     
            self::$priceType = new ObjectType([
               "name" => "Price",
               "fields" => [
                   "amount" => Type::string(),
                   "symbol" => Type::string(),
                   "label" => Type::string()
               ]
           ]);
        }
        return self::$priceType;
    }

    public static function build() 
    {
        if(!self::$productType) {
            self::$productType =  new ObjectType([
                "name" => "Product",
                'fields' => [
                    "id" => Type::string(),
                    "name" => Type::string(),
                    "brand" => Type::string(),
                    'description' => Type::string(),
                    "in_stock" => Type::boolean(),
                    "category" => Type::string(),
                    "gallery" => Type::listOf(self::getGalleryType()),
                    "price" => self::getPriceType(),
                    "attributes" => [
                        "type" => Type::listOf(AttributeTypes::build()),
                        "resolve" => [AttributeResolver::class, 'resolveAttribute']
                    ]
    
                    
                ]
            ]);
        }
        return self::$productType; 
    }

}