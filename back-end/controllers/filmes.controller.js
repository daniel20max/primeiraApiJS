const filmesService = require("../services/filmes.services")

const getFilmes = (req, res) => {
    const filmes = filmesService.getFilmes()
    res.send(filmes)
}

const getFilmesById = (req, res) => {
    const id = req.params.id
    const filme = filmesService.getFilmesById(id)
    res.send(filme)
}
const postFilme = (req, res) => {
    const filme = req.body
    const newFilme = filmesService.postFilme(filme)
    res.send(`Filme ${newFilme.nome}`)
}
const putFilme = (req, res) => {
    const id = req.params.id
    const attFilme = req.body
    const filmeChanged = filmesService.atualizarFilme(id, attFilme)
    if(filmeChanged){
        res.send({message: `Filme ${attFilme.nome} foi atualizado`})
    }
    else{
        res.status(404).json({error: "Filme não encontrado"})
    }
}
const deleteFilme = (req, res) => {
    filmesService.deleteFilme(req.params.id)
    res.send(`Foi deletado com sucesso`)
    
}
module.exports = {
    getFilmes,
    getFilmesById,
    postFilme,
    putFilme,
    deleteFilme
}