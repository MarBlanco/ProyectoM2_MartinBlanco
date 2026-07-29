const { Router } = require("express");
const {
    getAuthors,
    createAuthor,
} = require("../services/authorsService");

const router = Router();

router.get("/", async (req, res) => {
    const authors = await getAuthors();
    res.json(authors);
});

router.post("/", async (req, res) => {
    const newAuthor = await createAuthor(req.body);
    res.status(201).json(newAuthor);
});

module.exports = router;