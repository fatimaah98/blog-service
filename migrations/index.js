// ? RUN QUERIES:
const fs = require("fs");
const path = require("path");
const db = require("../db")

const migrate = async() => {
    const connection = await db.getConnection()
    
    const create_Users_Table = fs.readFileSync(path.resolve(__dirname, './users-ddl.sql'), "utf-8");
    const create_Articles_Table = fs.readFileSync(path.resolve(__dirname, './articles-ddl.sql'), "utf-8");
    const create_Tags_Table = fs.readFileSync(path.resolve(__dirname, './tags-ddl.sql'), "utf-8");
    const create_Article_Tag_Table = fs.readFileSync(path.resolve(__dirname, './articles-tags-ddl.sql'), "utf-8");
    
    await connection.beginTransaction()

    try {
        await connection.query(create_Users_Table)
        await connection.query(create_Articles_Table)
        await connection.query(create_Tags_Table)
        await connection.query(create_Article_Tag_Table)

        await connection.commit()

    } 
    catch (error) {
        await connection.rollback() //? remove all tables
        throw `Error happened in migrations: \n ${error}`
    }
}
migrate().then(() => {
    console.log(`migration ran successfully 🥍`); 
})