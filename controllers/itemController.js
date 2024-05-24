const { getAllItems } = require('../models/itemModel');

function apiItems(req, res) {
    res.json(getAllItems());
}

module.exports = { apiItems };
