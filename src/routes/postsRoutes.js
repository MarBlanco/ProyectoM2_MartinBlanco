const express = require("express");
const router = express.Router();

const {
    getPosts,
    getPostById,
    getPostsByAuthor,
    createPost,
    updatePost,
    deletePost,
} = require("../services/postsService");

// Obtener todos los posts
router.get("/", async (req, res) => {
    try {
        const posts = await getPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener posts por autor
router.get("/author/:authorId", async (req, res) => {
    try {
        const posts = await getPostsByAuthor(req.params.authorId);
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un post por ID
router.get("/:id", async (req, res) => {
    try {
        const post = await getPostById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post no encontrado",
            });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear post
router.post("/", async (req, res) => {
    try {
        const { title, content, author_id } = req.body;

        if (!title || title.trim() === "") {
            return res.status(400).json({
                message: "El título es obligatorio",
            });
        }

        const post = await createPost({
            title,
            content,
            author_id,
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar post
router.put("/:id", async (req, res) => {
    try {
        const { title, content, author_id } = req.body;

        if (!title || title.trim() === "") {
            return res.status(400).json({
                message: "El título es obligatorio",
            });
        }

        const post = await updatePost(req.params.id, {
            title,
            content,
            author_id,
        });

        if (!post) {
            return res.status(404).json({
                message: "Post no encontrado",
            });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar post
router.delete("/:id", async (req, res) => {
    try {
        const post = await deletePost(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post no encontrado",
            });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;