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
router.get("/", async (req, res, next) => {
    try {
        const posts = await getPosts();
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

// Obtener posts por autor
router.get("/author/:authorId", async (req, res, next) => {
    try {
        const posts = await getPostsByAuthor(req.params.authorId);
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

// Obtener un post por ID
router.get("/:id", async (req, res, next) => {
    try {
        const post = await getPostById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post no encontrado",
            });
        }

        res.json(post);
    } catch (error) {
        next(error);
    }
});

// Crear post
router.post("/", async (req, res, next) => {
    try {
        const { title, content, author_id, published } = req.body;

        if (!title || title.trim() === "") {
            return res.status(400).json({
                message: "El título es obligatorio",
            });
        }

        if (!content || content.trim() === "") {
            return res.status(400).json({
                message: "El contenido es obligatorio",
            });
        }

        if (!author_id) {
            return res.status(400).json({
                message: "El author_id es obligatorio",
            });
        }

        const post = await createPost({
            title,
            content,
            author_id,
            published,
        });

        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
});

// Actualizar post
router.put("/:id", async (req, res, next) => {
    try {
        const { title, content, author_id, published } = req.body;

        if (!title || title.trim() === "") {
            return res.status(400).json({
                message: "El título es obligatorio",
            });
        }

        if (!content || content.trim() === "") {
            return res.status(400).json({
                message: "El contenido es obligatorio",
            });
        }

        if (!author_id) {
            return res.status(400).json({
                message: "El author_id es obligatorio",
            });
        }

        const post = await updatePost(req.params.id, {
            title,
            content,
            author_id,
            published,
        });

        if (!post) {
            return res.status(404).json({
                message: "Post no encontrado",
            });
        }

        res.json(post);
    } catch (error) {
        next(error);
    }
});

// Eliminar post
router.delete("/:id", async (req, res, next) => {
    try {
        const post = await deletePost(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post no encontrado",
            });
        }

        res.json(post);
    } catch (error) {
        next(error);
    }
});

module.exports = router;