<?php

use Meatfloor\App\Router;
use Meatfloor\Controllers\AuthController;
use Meatfloor\Controllers\IndexController;
use Meatfloor\Controllers\MenuController;
use Meatfloor\Controllers\ProfileController;
use Meatfloor\Controllers\ReservationController;

Router::route('/Api/Index/Menu', IndexController::class);

Router::route('/Api/Menu', MenuController::class);

Router::route('/Api/Auth/Registration', AuthController::class, "registration");
Router::route('/Api/Auth', AuthController::class, "auth");

Router::route('/Api/Reservation/Create', ReservationController::class, "create");

Router::route('/Api/Profile', ProfileController::class);