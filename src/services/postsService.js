const pool = require("../config/db");

// Obtener todos los posts
const getPosts = async () => {
    const result = await pool.query("SELECT * FROM posts ORDER BY id");
    return result.rows;
};

// Obtener un post por ID
const getPostById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM posts WHERE id = $1",
        [id]
    );

    return result.rows[0];
};

// Crear post
const createPost = async ({ title, content, author_id }) => {
    const result = await pool.query(
        `INSERT INTO posts (title, content, author_id)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [title, content, author_id]
    );

    return result.rows[0];
};

// Actualizar post
const updatePost = async (id, { title, content, author_id }) => {
    const result = await pool.query(
        `UPDATE posts
        SET title = $1,
        content = $2,
        author_id = $3
        WHERE id = $4
        RETURNING *`,
        [title, content, author_id, id]
    );

    return result.rows[0];
};

// Eliminar post
const deletePost = async (id) => {
    const result = await pool.query(
        "DELETE FROM posts WHERE id = $1 RETURNING *",
        [id]
    );

    return result.rows[0];
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};