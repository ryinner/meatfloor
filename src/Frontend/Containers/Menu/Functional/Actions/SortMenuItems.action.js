export default function (menuItems, form) {
    const formData = new FormData(form);
    const dataForSorting = {};

    for (const [key, value] of formData) {
        if (dataForSorting[key] !== undefined) {
            if (dataForSorting[key] instanceof Array) {
                dataForSorting[key].push(value);
            } else {
                dataForSorting[key] = [dataForSorting[key], value];
            }
        } else {
            dataForSorting[key] = value;
        }
    }

    return menuItems.filter(item => {
        if (dataForSorting.name !== undefined && dataForSorting.name.trim() !== '') {
            if(!item.name.includes(dataForSorting.name)) return false;
        }

        if (dataForSorting.categories_ids !== undefined && dataForSorting.categories_ids.length > 0) {
            if (!item.categories.find(category => dataForSorting.categories_ids.includes(category.id))) return false;
        }

        return true;
    });
}
