<?php

namespace Meatfloor\Controllers;

use Meatfloor\Models\Reservation;

class ReservationController extends BaseController
{
    private Reservation $reservation;

    public function __construct()
    {
        $this->reservation = new Reservation;
    }

    public function create()
    {
        if ($this->reservation->create($this->decodePostAnswer())) {
            return $this->setSuccessAnswer('Столик успешно забронирован');
        } else {
            return $this->setErrorAnswer(['form' => 'На это время уже забронирован столик']);
        }
    }
}
