
const express = require("express");
const router = express.Router();

router.get("/teste", (req, res) => {
  res.send("Backend IA funcionando com sucesso!");
});

module.exports = router;
