<?php

namespace Meatfloor\App;

use PDO;

class Db
{
    public static function connect() {
        return new PDO("mysql:host=localhost;dbname=meatfloor;charset=utf8;", "root", "",[
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        ]);
    }
}
