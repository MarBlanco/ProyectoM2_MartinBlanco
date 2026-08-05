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
router.get("/", async (req, res, next) => {
    try {
        const authors = await getAuthors();
        res.json(authors);
    } catch (error) {
        next(error);
    }
});

// Obtener un autor por ID
router.get("/:id", async (req, res, next) => {
    try {
        const author = await getAuthorById(req.params.id);

        if (!author) {
            return res.status(404).json({
                message: "Autor no encontrado",
            });
        }

        res.json(author);
    } catch (error) {
        next(error);
    }
});

// Crear autor
router.post("/", async (req, res, next) => {
    try {
        const { name, email, bio } = req.body;

        if (!name || name.trim() === "") {
            return res.status(400).json({
                message: "El nombre es obligatorio",
            });
        }

        const author = await createAuthor({
            name,
            email,
            bio,
        });

        res.status(201).json(author);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({
                error: "El email ya está registrado",
            });
        }

        next(error);
    }
});

// Actualizar autor
router.put("/:id", async (req, res, next) => {
    try {
        const { name, email, bio } = req.body;

        if (!name || name.trim() === "") {
            return res.status(400).json({
                message: "El nombre es obligatorio",
            });
        }

        const author = await updateAuthor(req.params.id, {
            name,
            email,
            bio,
        });

        if (!author) {
            return res.status(404).json({
                message: "Autor no encontrado",
            });
        }

        res.json(author);
    } catch (error) {
        next(error);
    }
});

// Eliminar autor
router.delete("/:id", async (req, res, next) => {
    try {
        const author = await deleteAuthor(req.params.id);

        if (!author) {
            return res.status(404).json({
                message: "Autor no encontrado",
            });
        }

        res.json(author);
    } catch (error) {
        next(error);
    }
});

module.exports = router;