const express = require('express');
const { create, getAll, deleteTag } = require('../controllers/tags');
const tags_router = express.Router();


tags_router
.route("/")
.post(create)
.get(getAll);

tags_router
.route("/:id")
.delete(deleteTag)


module.exports = tags_router;