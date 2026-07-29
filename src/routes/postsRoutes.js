const { Router } = require("express");
const { getPosts } = require("../services/postsService");

const router = Router();

router.get("/", async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
});

module.exports = router;