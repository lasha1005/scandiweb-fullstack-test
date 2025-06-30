<?php

declare(strict_types=1);

namespace App\Models;

use PDO;
use PDOException;

class Dbh
{
    public function connect()
    {
        $dsn = "mysql:host={$_ENV['DB_HOST']};port={$_ENV['DB_PORT']};dbname={$_ENV['DB_DATABASE']}";
        $username = $_ENV['DB_USERNAME'];
        $password = $_ENV['DB_PASSWORD'];
        try {
            $pdo = new PDO($dsn, $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $e) {
            // You can log the error or handle it as needed
            die("Database connection failed: " . $e->getMessage());
        }
    }
}