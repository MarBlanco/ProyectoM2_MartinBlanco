const pool = require("../config/db");

const getPosts = async () => {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
};

module.exports = {
    getPosts,
};