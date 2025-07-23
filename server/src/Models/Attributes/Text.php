<?php

declare(strict_types=1);

namespace App\Models\Attributes;

class Text extends Attributes 
{
    public function __construct(array $data)
    {
        parent::__construct($data);
    }

    public function getType():string 
    {
        return "text";
    }
}