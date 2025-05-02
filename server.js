
const express = require("express");
const cors = require("cors");
const iaRoute = require("./routes/ia");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/gerar", iaRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Servidor de teste rodando na porta", PORT);
});
