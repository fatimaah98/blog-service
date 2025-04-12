const db = require("../db");

const create = async({title, author_id, content, slug}) => {
    const insert = "INSERT INTO articles VALUES (NULL, ?, ?, ?, ?)";
    const [newArticle] = await db.execute(insert, [title, content, slug, author_id]);

    const selectQuery = "SELECT * FROM articles WHERE id = ?"
    const mainArticle = await db.execute(selectQuery, newArticle.insertId);

    return mainArticle;
}

const addTag = async(article_Id, tag_Id) => {
    try {
        const query = "INSERT INTO articles_tags VALUES (NULL, ?, ?)";
        await db.execute(query, [article_Id, tag_Id]);
    
        return true;
    } 
    catch (error) {
        return res.status(500).json({message: 'error in add tags', error});    
    }
}

const deleteOne = async(id) => {
    try {
        const query = "DELETE FROM tags WHERE id = ?";
        await db.execute(query, [id]);
        return true;
    } 
    catch (error) {
        return res.status(500).json({message: 'error in delete 1 tag', error});    
    }
}


module.exports = {
    create,
    addTag, 
    deleteOne
}