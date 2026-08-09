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

// Obtener posts por autor
const getPostsByAuthor = async (authorId) => {
    const result = await pool.query(
        "SELECT * FROM posts WHERE author_id = $1 ORDER BY id",
        [authorId]
    );

    return result.rows;
};

// Crear post
const createPost = async ({ title, content, author_id, published }) => {
    const result = await pool.query(
        `INSERT INTO posts (title, content, author_id, published)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [title, content, author_id, published]
    );

    return result.rows[0];
};

// Actualizar post
const updatePost = async (id, { title, content, author_id, published }) => {
    const result = await pool.query(
        `UPDATE posts
        SET title = $1,
        content = $2,
        author_id = $3,
        published = $4
        WHERE id = $5
        RETURNING *`,
        [title, content, author_id, published, id]
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
    getPostsByAuthor,
    createPost,
    updatePost,
    deletePost,
};