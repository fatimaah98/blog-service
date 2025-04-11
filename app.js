const express = require("express");
const cors = require("cors");
const auth_router = require("./routes/auth");
const articles_router = require("./routes/articles");
const tags_router = require("./routes/tags");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use("/api/auth", auth_router);
app.use("/api/articles", articles_router);
app.use("/api/tags", tags_router);

module.exports = app;
