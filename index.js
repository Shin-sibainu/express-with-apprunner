const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/posts", (req, res) => {
  res.send("get All posts");
});

app.listen(PORT, () => console.log(`server is running🚀`));
