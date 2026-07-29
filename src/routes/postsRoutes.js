const { Router } = require("express");
const { getPosts } = require("../services/postsService");

const router = Router();

router.get("/", (req, res) => {
    res.json(getPosts());
});

module.exports = router;