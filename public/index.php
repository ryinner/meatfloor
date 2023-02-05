<?php
session_start();

use Meatfloor\App\Router;

require_once '../vendor/autoload.php';
require_once '../src/Backend/Config/Routes.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Accept, X-PINGOTHER, Content-Type');

echo Router::execute($_SERVER['REQUEST_URI']);