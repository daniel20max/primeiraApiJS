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
    res.send(newFilme)
}
const putFilme = (req, res) => {
    const id = req.body
    const attFilme = req.params.id
    const filmeChanged = filmesService.atualizarFilme(id, attFilme)
    if(filmeChanged){
        res.status(200)
    }
    else{
        res.status(404).json({error: "Filme não encontrado"})
    }
}
const deleteFilme = (req, res) => {
    const delFilme = filmesService.deleteFilme(req.params.id)
    const valid = filmesService.getFilmesById(delFilme.id).id
    if(valid === null){
        res.status(200)
    }else{
        res.status(404).json({error: "Filme não encontrado"})
    }
}
module.exports = {
    getFilmes,
    getFilmesById,
    postFilme,
    putFilme,
    deleteFilme
}