const posts = [
    {
        id: 1,
        title: "Introducción a Node.js",
        content: "Node.js es un runtime de JavaScript.",
        author_id: 1,
        published: true,
    },
    {
        id: 2,
        title: "PostgreSQL vs MySQL",
        content: "Ambas bases de datos tienen ventajas.",
        author_id: 2,
        published: true,
    },
    {
        id: 3,
        title: "APIs RESTful",
        content: "REST es un estilo arquitectónico.",
        author_id: 1,
        published: true,
    },
    {
        id: 4,
        title: "Manejo de errores en Express",
        content: "El manejo apropiado de errores.",
        author_id: 3,
        published: false,
    },
    {
        id: 5,
        title: "Async/Await explicado",
        content: "Las promesas simplifican el código asíncrono.",
        author_id: 3,
        published: false,
    },
];

const getPosts = () => {
    return posts;
};

module.exports = {
    getPosts,
};