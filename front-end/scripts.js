const apiUrl = "http://localhost:3000";
const lista = document.getElementById('lista');


const getFilmes = async () => {
    const response = await fetch(`${apiUrl}/filmes`)
    const filmes = await response.json()

    filmes.map((filme) => {
        lista.insertAdjacentHTML(
            "beforeend",
            `
                <section class="card">
                <img src="${filme.imagem}">
                <div class="texto">
                    <div class="nome">${filme.nome}</div>
                    <div>Genero: ${filme.genero}</div>
                    <div>Nota: ${filme.nota}</div>
                <div>
                </section>
            `
        )
    })
}
getFilmes()

const getFilmeById = async () => {
    const id = document.getElementById("valueID")
    const response = await fetch(`${apiUrl}/filmes/${id}`)
    const filmeById = await response.json()

    document.getElementById("filme").insertAdjacentElement(
        "beforeend"
        `

        `
    )
}