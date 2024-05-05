const express = require("express");
const router = express.Router();

router.get("/voir", (req, res) => {
  res.send("<h1>Voir les informations du client</h1>");
});

module.exports = router;
