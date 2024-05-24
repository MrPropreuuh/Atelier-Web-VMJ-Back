class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const items = [
    new Item("Item 1", "Description 1"),
    new Item("Item 2", "Description 2")
];

function getAllItems() {
    return items;
}

module.exports = { Item, getAllItems };
