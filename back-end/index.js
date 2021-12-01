const express = require("express");
const port = 3000;
const app = express();
app.use(express.json());

const blueVagas = [
    {
        id: 1,
        empresa: "Blue",
        oportunidade: "Front-End",
        tipo: "CLT"
    },
    {
        id: 2,
        empresa: "NetFlix",
        oportunidade: "Front-End",
        tipo: "PJ"
    },
    {
        id: 3,
        empresa: "NetFlix",
        oportunidade: "Back-End",
        tipo: "PJ"
    },
    {
        id: 4,
        empresa: "Google",
        oportunidade: "FullStack",
        tipo: "CLT"
    },
]
//CORS - permite a troca de recursos entre origens diferentes
app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
})

app.get('/', (req, res) =>{ 
    res.send("Koé")
});

app.get("/vagas", (req, res) => {
    res.send(blueVagas)
});

app.get("/vagas/:id", (req, res) => {
    const id = req.params.id;
    const vaga = blueVagas.find(vaga => vaga.id = id)
    res.send(vaga)
});
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));