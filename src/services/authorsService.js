const pool = require("../config/db");

const getAuthors = async () => {
    const result = await pool.query("SELECT * FROM authors");
    return result.rows;
};

module.exports = {
    getAuthors,
};