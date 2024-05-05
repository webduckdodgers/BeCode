const express = require("express");
const router = express.Router();

router.post("/ajouter", (req, res) => {
  res.send("<h1>Ajouter un nouveau client</h1>");
});

module.exports = router;
