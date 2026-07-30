const { Router } = require("express");
const {
    getPosts,
    createPost,
    updatePost,
    deletePost,
} = require("../services/postsService");

const router = Router();

router.get("/", async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
});

router.post("/", async (req, res) => {
    const newPost = await createPost(req.body);
    res.status(201).json(newPost);
});

router.put("/:id", async (req, res) => {
    const updatedPost = await updatePost(req.params.id, req.body);
    res.json(updatedPost);
});

router.delete("/:id", async (req, res) => {
    const deletedPost = await deletePost(req.params.id);
    res.json(deletedPost);
});

module.exports = router;