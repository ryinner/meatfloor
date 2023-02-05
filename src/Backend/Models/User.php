<?php

namespace Meatfloor\Models;

use Firebase\JWT\JWT;
use Meatfloor\App\Db;
use DateTimeImmutable;

class User
{
    private $secretKey = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
    public function create(object $userData): bool
    {
        $db = Db::connect();
        $userData->password = password_hash($userData->password, PASSWORD_DEFAULT);
        $query = $db->prepare("INSERT INTO `users`(`name`, `email`, `phone`, `password`) VALUES (:fio, :email, :phone, :password)");
        return $query->execute((array)$userData);
    }

    public function auth(object $userData): false|string
    {
        $db = Db::connect();
        $query = $db->prepare("SELECT * FROM `users` WHERE `email` = :email OR `phone` = :phone");
        $query->execute([
            "email" => $userData->login,
            "phone" => $userData->login,
        ]);
        $userDb = $query->fetch();
        if ($userDb && password_verify($userData->password, $userDb->password)) {
            unset($userDb->password);
            $jwt = $this->createJwt($userDb);
            return $jwt;
        }
        return false;
    }

    public function createJwt(object $user): string
    {
        $issuedAt = new DateTimeImmutable();
        $expire = $issuedAt->modify('+6 minutes')->getTimestamp();
        return JWT::encode(
            [
                'iat' => $issuedAt,
                'exp' => $expire,
                'user' => $user,
            ],
            $this->secretKey,
            'HS256'
        );
    }
}
