<?php

namespace Meatfloor\App;

class Router
{
    private static $routes;

    public static function route(string $pattern, string $controller, string $action = 'index')
    {
        $pattern = '/^' . str_replace('/', '\/', $pattern) . '$/';
        self::$routes[$pattern] = ['controller' => $controller, 'action' => $action];
    }

    public static function execute($url)
    {
        $isRouteWasFounded = false;
        foreach (self::$routes as $pattern => $controllerData)
        {
            if (preg_match($pattern, $url, $params)) // сравнение идет через регулярное выражение
            {
                $isRouteWasFounded = true;
                // соответствие найдено, поэтому удаляем первый элемент из массива $params
                // который содержит всю найденную строку
                array_shift($params);
                $controller = new $controllerData['controller']();
                return json_encode($controller->{$controllerData['action']}(...array_values($params)), JSON_UNESCAPED_UNICODE);
            }
        }
        // Если не найден маршрут вернуть обычную страницу
        if (!$isRouteWasFounded) {
            require_once 'index.html';
        }
    }
}
