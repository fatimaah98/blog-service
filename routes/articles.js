const express = require('express');
const multer = require("multer");
const path = require("path")
const { createNewArticle, getAll, getOneArticle, removeArticle } = require('../controllers/articles');

const articles_router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../uploader"))
    },
    filename: (req, file, cb) => {
        const filename = file.originalname + "-" + Date.now() + path.extname(file.originalname);
        cb(null, filename);
    }
})

const uploader = multer({
    storage,
    fileFilter: (req,file,cb) => {
        const validFile = /jpeg|jpg|png/
        const mimeType = validFile.test(file.mimetype)
        const ext = validFile.test(path.extname(file.originalname))
        if(mimeType && ext) {
            return cb(null, true);
        }
        return cb(new Error("Thr file Type not support!"))
    },
    limits: {fileSize: 3 * 1024 * 1024}
})

articles_router.route("/")
.post(uploader.single("cover"),createNewArticle)
.get(getAll);

articles_router.route("/:slug").get(getOneArticle);

articles_router.route("/remove/:slug").delete(removeArticle)

module.exports = articles_router;