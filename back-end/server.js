const express = require("express");
const app = express();
const port = 3000;

// Permet de récupérer le body sur les requêtes POST / PUT
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
