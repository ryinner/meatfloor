<?php

namespace Meatfloor\Models;

use Meatfloor\App\Db;

class User
{
    public function findWithReservation(object $userData): array
    {
        $db = Db::connect();

        $query = $db->prepare('
            SELECT 
                u.name as user_name,
                u.email as user_email,
                u.phone as user_phone,
                r.id as reservation_id,
                r.table_id as reservation_table_id,
                r.time_from as reservation_time_from,
                r.time_to as reservation_time_to,
                r.count as reservation_count
            FROM users u
            LEFT JOIN reservation r ON r.user_id = u.id
            WHERE u.id = :user_id AND DATE(r.time_from) >= :today
        ');
        $query->execute([
            'user_id' => $userData->user_id,
            'today' => date('Y-m-d')
        ]);
        $userInfo = $query->fetchAll();

        $formedUser = [];
        foreach ($userInfo as $userRow) {
            $formedUser['name'] = $userRow->user_name;
            $formedUser['email'] = $userRow->user_email;
            $formedUser['phone'] = $userRow->user_phone;
            $formedUser['reservations'][] = [
                'id' => $userRow->reservation_id,
                'table_id' => $userRow->reservation_table_id,
                'time_from' => $userRow->reservation_time_from,
                'time_to' => $userRow->reservation_time_to,
                'count' => $userRow->reservation_count,
            ];
        }

        return $formedUser;
    }

    public function create(object $userData): bool
    {
        unset($userData->rules);
        $db = Db::connect();
        $userData->password = password_hash($userData->password, PASSWORD_DEFAULT);
        $query = $db->prepare("INSERT INTO `users`(`name`, `email`, `phone`, `password`) VALUES (:fio, :email, :phone, :password)");
        return $query->execute((array)$userData);
    }

    public function auth(object $userData): false|object
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
            return $userDb;
        }
        return false;
    }
}
