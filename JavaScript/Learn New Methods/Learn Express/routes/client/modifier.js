const express = require("express");
const router = express.Router();

router.put("/modifier", (req, res) => {
  res.send("<h1>Modifier un client</h1>");
});

module.exports = router;
