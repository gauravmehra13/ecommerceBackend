const express = require('express')
const allapi = require('../api/all');

const all = express.Router();
all.route("/all").get(allapi.apiController)

module.exports = all;