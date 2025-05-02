
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { mensagem } = req.body;
  res.json({ resposta: IA simulada: ${mensagem.toUpperCase()} });
});

module.exports = router;
