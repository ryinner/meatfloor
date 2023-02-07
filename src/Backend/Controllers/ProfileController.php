<?php

namespace Meatfloor\Controllers;

use Meatfloor\Models\User;

class ProfileController extends BaseController
{
    private User $user;

    public function __construct()
    {
        $this->user = new User;
    }

    public function index(): array
    {
        return [
            'user' => $this->user->findWithReservation($this->decodePostAnswer())
        ];
    }
}
