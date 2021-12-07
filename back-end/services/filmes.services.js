const filmes = [
    {
        id: 1,
        nome: "How to train your Dragon 3",
        imagem: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/21959-cartaz.jpg",
        genero: "Aventura",
        nota: "10",
        view: false
    },
    {
        id: 2,
        nome: "Theasure Planet",
        imagem: "https://br.web.img2.acsta.net/c_310_420/pictures/14/10/10/20/36/282573.jpg",
        genero: "Aventura",
        nota: "10",
        view: false
    }
]

const getFilmes = () => {
    return filmes
}

const getFilmesById = (id) => {
    return filmes.find((filme) => filme.id == id)
}

const postFilme = (newFilme) => {
    const fakeId = filmes.length + 1
    newFilme.id = fakeId
    newFilme.view = false
    filmes.push(newFilme)
    return newFilme
}

const deleteFilme = (id) => {
    const fakeId = filmes.find((filme) => filme.id == id).id
    const fakeFilme = filmes[fakeId]
    filmes.splice(fakeId, 1)
    return fakeFilme
}

const atualizarFilme = (id, attFilme) => {
    const getId = filmes.find((filme) => filme.id == id).id
    if(getId >= 0) {
        filmes[getId] = {
            ...filmes[getId],
            ...attFilme
        }
        return true
    }
    else {
        return false
    }
}

module.exports = {
    getFilmes,
    getFilmesById,
    postFilme,
    deleteFilme,
    atualizarFilme,
}