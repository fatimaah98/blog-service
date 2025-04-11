// ? RUN QUERIES:
const fs = require("fs");
const path = require("path");
const db = require("../db")

const migrate = () => {
    const create_Users_Table = fs.readFileSync(path.resolve(__dirname, './users-ddl.sql'), "utf-8");
    const create_Articles_Table = fs.readFileSync(path.resolve(__dirname, './articles-ddl.sql'), "utf-8");
    const create_Tags_Table = fs.readFileSync(path.resolve(__dirname, './tags-ddl.sql'), "utf-8");
    const create_Article_Tag_Table = fs.readFileSync(path.resolve(__dirname, './articles-tags-ddl.sql'), "utf-8");
    
    try {
        db.query(create_Users_Table)
        db.query(create_Articles_Table)
        db.query(create_Tags_Table)
        db.query(create_Article_Tag_Table)

    } 
    catch (error) {
        throw `Error happened in migrations: \n ${error}`
    }
}
migrate()