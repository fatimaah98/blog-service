const db = require("../db")

const create = async({name, username, email, password}) => {
    // ? old way:
    const insertQuery = "INSERT INTO users (name, username, email, password) VALUES (?,?,?,?)";
    const [insertedUser] = await db.execute(insertQuery, [name, username, email, password]);
     
    const selectedUser = "SELECT * FROM users WHERE id = ?"
    const user = await db.execute(selectedUser, [insertedUser.insertId]);
    
    // ? this way will be in ^10.5-MariaDB - Source distribution 🔽 
    // const insertQuery = "INSERT INTO users (name, username, email, password) VALUES (?,?,?,?) RETURNING id";
    return user[0][0];
}

const findByUsername = async(username) => {
    const query = "SELECT * FROM users WHERE username = ?";
    const [user] = await db.execute(query, [username]);
    return user[0];
}

const findById = async(id) => {
    const query = "SELECT * FROM users WHERE id = ?";
    const [user] = await db.execute(query, [id]);
    return user;
}

module.exports = {create, findByUsername, findById};