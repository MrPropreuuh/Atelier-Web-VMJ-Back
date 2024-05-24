// backend/models/itemModel.ts
class Item {
    constructor(public name: string, public description: string) { }
}

const items: Item[] = [
    new Item("Item 1", "Description 1"),
    new Item("Item 2", "Description 2")
];

function getAllItems(): Item[] {
    return items;
}

export { Item, getAllItems };
