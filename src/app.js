require("./config/db");

const express = require("express");
const authorsRoutes = require("./routes/authorsRoutes");
const postsRoutes = require("./routes/postsRoutes");
const errorHandler = require("./middlewares/errorHandler");

const { swaggerUi, swaggerDocument } = require("./docs/swagger");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API MiniBlog funcionando");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/authors", authorsRoutes);
app.use("/posts", postsRoutes);

app.use(errorHandler);

module.exports = app;