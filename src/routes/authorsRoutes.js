const { Router } = require("express");
const {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor,
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

router.put("/:id", async (req, res) => {
    const updatedAuthor = await updateAuthor(req.params.id, req.body);
    res.json(updatedAuthor);
});

router.delete("/:id", async (req, res) => {
    const deletedAuthor = await deleteAuthor(req.params.id);
    res.json(deletedAuthor);
});

module.exports = router;