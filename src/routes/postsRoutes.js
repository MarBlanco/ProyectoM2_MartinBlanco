const { Router } = require("express");
const {
    getPosts,
    createPost,
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

module.exports = router;