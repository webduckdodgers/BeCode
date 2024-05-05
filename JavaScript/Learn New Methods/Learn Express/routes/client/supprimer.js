const express = require("express");
const router = express.Router();

router.delete("/supprimer", (req, res) => {
  res.send("<h1>Supprimer un client</h1>");
});

module.exports = router;
