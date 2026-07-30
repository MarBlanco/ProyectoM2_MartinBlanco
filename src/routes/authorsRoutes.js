const express = require("express");
const router = express.Router();

const {
    getAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
} = require("../services/authorsService");

// Obtener todos los autores
router.get("/", async (req, res) => {
    try {
        const authors = await getAuthors();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un autor por ID
router.get("/:id", async (req, res) => {
    try {
        const author = await getAuthorById(req.params.id);

        if (!author) {
            return res.status(404).json({
                message: "Autor no encontrado",
            });
        }

        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear autor
router.post("/", async (req, res) => {
    try {
        const author = await createAuthor(req.body);
        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar autor
router.put("/:id", async (req, res) => {
    try {
        const author = await updateAuthor(req.params.id, req.body);

        if (!author) {
            return res.status(404).json({
                message: "Autor no encontrado",
            });
        }

        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar autor
router.delete("/:id", async (req, res) => {
    try {
        const author = await deleteAuthor(req.params.id);

        if (!author) {
            return res.status(404).json({
                message: "Autor no encontrado",
            });
        }

        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;