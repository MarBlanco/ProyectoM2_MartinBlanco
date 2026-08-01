const express = require("express");
const router = express.Router();

const {
    getPosts,
    getPostById,
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
        const post = await createPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar post
router.put("/:id", async (req, res) => {
    try {
        const post = await updatePost(req.params.id, req.body);

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