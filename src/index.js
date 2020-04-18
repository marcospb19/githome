const express = require("express");
const connectToDB = require("./db.js");
const routes = require("./routes/repositoryRoutes.js");

const app = express();

connectToDB();
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Hey mermão! Tô funcionando!");
});
