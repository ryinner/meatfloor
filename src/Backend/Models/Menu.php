<?php

namespace Meatfloor\Models;

use Meatfloor\App\Db;
use Meatfloor\Config\ApplicationRoutesMap;

class Menu
{
    public function getMenuItems(): array
    {
        $menuDataRaw = $this->getRawMenuItems();
        $menuDataFormed = [];
        foreach($menuDataRaw as $menuDataRawRow) {
            $menuDataFormed[$menuDataRawRow->category_id]['id'] = $menuDataRawRow->category_id;
            $menuDataFormed[$menuDataRawRow->category_id]['name'] = $menuDataRawRow->category_name;
            $menuDataFormed[$menuDataRawRow->category_id]['image'] = ApplicationRoutesMap::CATEGORIES_IMAGES_PATH . $menuDataRawRow->category_image;
            $bufferDish = [
                'id' => $menuDataRawRow->dish_id,
                'name' => $menuDataRawRow->dish_name,
                'price' => $menuDataRawRow->dish_price,
                'description' => $menuDataRawRow->dish_description,
                'image' => ApplicationRoutesMap::DISHES_IMAGES_PATH . $menuDataRawRow->dish_image,
            ];
            $menuDataFormed[$menuDataRawRow->category_id]['dishes'][] = $bufferDish;
        }
        return array_values($menuDataFormed);
    }

    private function getRawMenuItems(): array
    {
        $db = Db::connect();
        $menuDataRaw = $db->prepare('
            SELECT 
                c.id as category_id,
                c.name as category_name,
                c.image as category_image,
                d.id as dish_id,
                d.name as dish_name,
                d.price as dish_price,
                d.description as dish_description,
                d.image as dish_image
            from categories c
            INNER JOIN categories_dishes cd ON cd.category_id = c.id
            INNER JOIN dishes d ON d.id = cd.dish_id
            ORDER BY c.id ASC 
        ');
        $menuDataRaw->execute();
        return $menuDataRaw->fetchAll();
    }
}
