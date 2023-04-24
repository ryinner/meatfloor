<?php

namespace Meatfloor\Models;

use Meatfloor\App\Db;

class Reservation
{
    public function create(object $reservationData): bool
    {
        if (!$this->isReserved($reservationData->table_id, $reservationData->date, $reservationData->time->from, $reservationData->time->to)) {
            $db = Db::connect();
            $query = $db->prepare("INSERT INTO `reservation`(`time_from`, `time_to`, `user_id`, `table_id`, `count`) VALUES (:time_from, :time_to, :user_id, :table_id, :count)");
            $query->execute([
                'table_id' => $reservationData->table_id,
                'time_from' => date('Y-m-d H:i:s', strtotime("{$reservationData->date} {$reservationData->time->from}")),
                'time_to' => date('Y-m-d H:i:s', strtotime("{$reservationData->date} {$reservationData->time->to}")),
                'user_id' => $reservationData->user_id,
                'count' => $reservationData->count
            ]);
            return true;
        } else {
            return false;
        }
    }

    public function remove(int $id): void
    {
        $db = Db::connect();
        $query = $db->prepare("DELETE FROM `reservation` WHERE `id` = :id");
        $query->execute([
            'id' => $id
        ]);
    }

    private function isReserved (int $tableId, string $date, string $timeFrom, string $timeTo): bool
    {
        $db = Db::connect();
        $query = $db->prepare("SELECT * FROM `reservation` WHERE ((time_from BETWEEN :time_from AND :time_to) OR (time_to BETWEEN :time_from AND :time_to)) AND table_id = :table_id");
        $query->execute([
            'table_id' => $tableId,
            'time_from' => date('Y-m-d H:i:s', strtotime("{$date} {$timeFrom}")),
            'time_to' => date('Y-m-d H:i:s', strtotime("{$date} {$timeTo}")),
        ]);
        $query = $query->fetchAll();

        return $query !== false ? count($query) > 0 : false;
    }
}
