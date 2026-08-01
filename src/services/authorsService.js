const pool = require("../config/db");

// Obtener todos los autores
const getAuthors = async () => {
    const result = await pool.query("SELECT * FROM authors ORDER BY id");
    return result.rows;
};

// Obtener un autor por ID
const getAuthorById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM authors WHERE id = $1",
        [id]
    );

    return result.rows[0];
};

// Buscar autor por email
const getAuthorByEmail = async (email) => {
    const result = await pool.query(
        "SELECT * FROM authors WHERE email = $1",
        [email]
    );

    return result.rows[0];
};

// Crear autor
const createAuthor = async ({ name, email, bio }) => {
    const result = await pool.query(
        `INSERT INTO authors (name, email, bio)
     VALUES ($1, $2, $3)
     RETURNING *`,
        [name, email, bio]
    );

    return result.rows[0];
};

// Actualizar autor
const updateAuthor = async (id, { name, email, bio }) => {
    const result = await pool.query(
        `UPDATE authors
     SET name = $1,
         email = $2,
         bio = $3
     WHERE id = $4
     RETURNING *`,
        [name, email, bio, id]
    );

    return result.rows[0];
};

// Eliminar autor
const deleteAuthor = async (id) => {
    const result = await pool.query(
        "DELETE FROM authors WHERE id = $1 RETURNING *",
        [id]
    );

    return result.rows[0];
};

module.exports = {
    getAuthors,
    getAuthorById,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor,
};