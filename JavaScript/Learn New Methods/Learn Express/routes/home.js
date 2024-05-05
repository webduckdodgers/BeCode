const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Page d'acceuil de l'application</h1>");
});

module.exports = router;
