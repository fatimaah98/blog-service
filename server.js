const db = require("./db");
const app = require("./app");
const config = require("./config");

async function startServer() {
    try {
        await db.getConnection();
        app.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`); 
        })
    } 
    catch (error) {
        console.log(`Error Happened in server... \n ${error}`);
        db.end();
    }
}

startServer()