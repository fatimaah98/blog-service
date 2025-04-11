const db = require("../db");

const create = async(title) => {
    try {
        const query = "INSERT INTO tags (title) VALUES (?)";
        const [insertedTag] = await db.execute(query, [title]);

        const selectedTag = "SELECT * FROM tags WHERE id = ?";
        const tag = await db.execute(selectedTag, [insertedTag.insertId]);

        return tag[0][0];
    } 
    catch (error) {
        throw error;  
    }
}

const findBytitle = async(title) => {
    try {
        const query = "SELECT * FROM tags WHERE title = ?";
        const [tag] = await db.execute(query, [title]);
        return tag[0];
    } 
    catch (error) {
        throw error;  
    }
}

const findAll = async() => {
    try {
        const query = "SELECT * FROM tags";
        const [tags] = await db.execute(query);
        return tags;
    } 
    catch (error) {
        throw error    
    }
}

const remove = async(id) => {
    try {
        const query = "DELETE FROM tags WHERE id = ?";
        await db.execute(query, [id]);
        return true;
    } 
    catch (error) {
        throw error;    
    }
}

module.exports = {
    create, remove, findAll, findBytitle
}