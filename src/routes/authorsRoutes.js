const { Router } = require("express");
const { getAuthors } = require("../services/authorsService");

const router = Router();

router.get("/", (req, res) => {
    res.json(getAuthors());
});

module.exports = router;