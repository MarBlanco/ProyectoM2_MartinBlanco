const pool = require("../config/db");

const getPosts = async () => {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
};

const createPost = async (post) => {
    const { title, content, author_id } = post;

    const result = await pool.query(
        `INSERT INTO posts (title, content, author_id)
        VALUES ($1, $2, $3)
         RETURNING *`,
        [title, content, author_id]
    );

    return result.rows[0];
};

module.exports = {
    getPosts,
    createPost,
};