const express = require("express");
const port = 3000;
const app = express();
const cors = require('cors')
const filmesRouter = require("./routes/filmes.route");

app.use(express.json());
app.use(cors());

// app.all('/*', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "*");
//     next();
// })

app.use("/filmes", filmesRouter)

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));