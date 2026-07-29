const { Router } = require("express");
const { getAuthors } = require("../services/authorsService");

const router = Router();

router.get("/", async (req, res) => {
    const authors = await getAuthors();
    res.json(authors);
});

module.exports = router;