<?php

namespace Meatfloor\Controllers;

use Meatfloor\Models\Menu;

class MenuController extends BaseController
{
    private Menu $menu;

    public function __construct()
    {
        $this->menu = new Menu;
    }

    public function index(): array
    {
        return [
            'categories' => $this->menu->getCategories(),
            'dishes' => $this->menu->getMenuItems()
        ];
    }
}
