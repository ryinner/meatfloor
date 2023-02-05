<?php

namespace Meatfloor\Controllers;

use Meatfloor\Models\User;

class AuthController extends BaseController
{
    private User $user;

    public function __construct()
    {
        $this->user = new User();
    }

    public function registration()
    {
        try {
            if ($this->user->create($this->decodePostAnswer())) {
                return $this->setSuccessAnswer("Вы успешно зарегистрированы", );
            }
        } catch (\PDOException $th) {
            if ($th->errorInfo[1] === 1062) {
                return $this->setErrorAnswer(["phone" => ["Такой пользователь уже зарегистрирован"], "email" => ["Такой пользователь уже зарегистрирован"]]);
            }
        }
        return $this->setErrorAnswer(["form" => "Неизвестная ошибка регистрации"]);
    }

    public function auth()
    {
        if ($jwt = $this->user->auth($this->decodePostAnswer())) {
            return $this->setSuccessAnswer("Вы авторизованы", $jwt);
        }
        return $this->setErrorAnswer(["form" => "Не верный пароль или нет такого пользователя"]);
    }
}
