<?php

use Meatfloor\App\Router;
use Meatfloor\Controllers\AuthController;
use Meatfloor\Controllers\IndexController;
use Meatfloor\Controllers\ReservationController;

Router::route('/Index/Menu', IndexController::class);

Router::route('/Auth/Registration', AuthController::class, "registration");
Router::route('/Auth', AuthController::class, "auth");

Router::route('/Reservation/Create', ReservationController::class, "create");