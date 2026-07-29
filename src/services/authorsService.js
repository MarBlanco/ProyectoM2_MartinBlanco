const pool = require("../config/db");

const getAuthors = async () => {
    const result = await pool.query("SELECT * FROM authors");
    return result.rows;
};

const createAuthor = async (author) => {
    const { name, email, bio } = author;

    const result = await pool.query(
        `INSERT INTO authors (name, email, bio)
        VALUES ($1, $2, $3)
         RETURNING *`,
        [name, email, bio]
    );

    return result.rows[0];
};

module.exports = {
    getAuthors,
    createAuthor,
};