const express = require("express");

const authorsRoutes = require("./routes/authorsRoutes");
const postsRoutes = require("./routes/postsRoutes");

const app = express();

app.use(express.json());

app.use("/authors", authorsRoutes);
app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});