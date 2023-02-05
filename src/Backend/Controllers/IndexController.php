<?php

namespace Meatfloor\Controllers;

use Meatfloor\Models\Menu;

class IndexController extends BaseController
{
    private Menu $menu;

    public function __construct()
    {
        $this->menu = new Menu;
    }

    public function index(): array
    {
        return $this->menu->getMenuItems();
    }
}
