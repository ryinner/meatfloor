<?php

namespace Meatfloor\Models;

use Meatfloor\App\Db;
use Meatfloor\Config\ApplicationRoutesMap;

class Menu
{
    public function getMenuItemsByCategories(): array
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

    public function getMenuItems(): array
    {
        $menuDataRaw = $this->getRawMenuItems();
        $menuDataFormed = [];
        foreach($menuDataRaw as $menuDataRawRow) {
            $menuDataFormed[$menuDataRawRow->dish_id]['id'] = $menuDataRawRow->dish_id;
            $menuDataFormed[$menuDataRawRow->dish_id]['name'] = $menuDataRawRow->dish_name;
            $menuDataFormed[$menuDataRawRow->dish_id]['price'] = $menuDataRawRow->dish_price;
            $menuDataFormed[$menuDataRawRow->dish_id]['description'] = $menuDataRawRow->dish_description;
            $menuDataFormed[$menuDataRawRow->dish_id]['image'] =  ApplicationRoutesMap::DISHES_IMAGES_PATH . $menuDataRawRow->dish_image;
            $menuDataFormed[$menuDataRawRow->dish_id]['callories'] = $menuDataRawRow->dish_callories;

            if (!isset($menuDataFormed[$menuDataRawRow->dish_id]['categories'])) {
                $menuDataFormed[$menuDataRawRow->dish_id]['categories'] = [];
            }
            $menuDataFormed[$menuDataRawRow->dish_id]['categories'][] = [
                'id' => $menuDataRawRow->category_id,
                'name' => $menuDataRawRow->category_name,
            ];
        }
        return array_values($menuDataFormed);
    }

    public function getCategories(): array
    {
        $db = Db::connect();
        $categories = $db->prepare('
            SELECT
                c.id,
                c.name
            FROM categories c
            ORDER BY c.name
        ');
        $categories->execute();
        return $categories->fetchAll();
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
                d.image as dish_image,
                d.callories as dish_callories
            from categories c
            INNER JOIN categories_dishes cd ON cd.category_id = c.id
            INNER JOIN dishes d ON d.id = cd.dish_id
            ORDER BY c.id ASC 
        ');
        $menuDataRaw->execute();
        return $menuDataRaw->fetchAll();
    }
}
