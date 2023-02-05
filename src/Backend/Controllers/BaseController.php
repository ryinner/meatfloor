<?php

namespace Meatfloor\Controllers;

class BaseController
{
    public function decodePostAnswer(): object
    {
        return json_decode(file_get_contents('php://input'));
    }

    public function setErrorAnswer(array $errors): array
    {
        return [
            'success' => false,
            'errors'  => $errors,
        ];
    }

    public function setSuccessAnswer(string $message, mixed $additionalData = null): array
    {
        return [
            'success' => true,
            'message' => $message,
            'data'    => $additionalData,
        ];
    }
}
