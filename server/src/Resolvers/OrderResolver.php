<?php

namespace App\Resolvers;

use App\Models\Order\Order;

class OrderResolver
{
    public static function resolveOrder(array $root, array $args, array $context) {
        $pdo = $context['pdo'];
        $order = new Order($args['order']['products']);
        return $order->create($pdo);   
    }
}