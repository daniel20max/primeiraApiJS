const apiUrl = "http://localhost:3000";
const lista = document.getElementById('lista');
let modoEdicao = false;
let idEdicao = 0;

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
                    ${filme.view? 
                        '<div><span class="indicator online"></span>Assistiu</div>' : 
                        '<div><span class="indicator offline"></span>Não Assistiu</div>'}
                    </div>
                <button onclick="deleteFilme(${filme.id})" class="botao"> Deletar</button>
                <button onclick="editarFilme(${filme.id})" class="botao">Editar</button>
                <button onclick="marcarView(${filme.id})" class="botao">Marcar View</button>
                </div>
                </section>
            `
        )
    })
}
getFilmes()

const getById = async (id) => {

    const response = await fetch(`${apiUrl}/filmes/${id}`)
    const filme = await response.json();
    return filme
}

const getFilmeById = async () => {
    const id = document.getElementById("valueID").value
    const response = await fetch(`${apiUrl}/filmes/${id}`)
    const filmeById = await response.json()
    if(document.getElementById('card2'))
    {
    const card = document.getElementById('card2')
    card.parentNode.removeChild(card)
    }   
    document.getElementById("escolha").insertAdjacentHTML(
        "beforeend",
        `
        <section id="card2">
            <img src="${filmeById.imagem}">
            <div class="texto">
                <div class="nome">${filmeById.nome}</div>
            </div>
        </section>
    
        `
    )
}

const submitForm = () => {
    const nome = document.getElementById('nome').value
    const imagem = document.getElementById('imagem').value
    const genero = document.getElementById('genero').value
    const nota = document.getElementById('nota').value
    const filme = {
        nome,
        imagem,
        genero,
        nota
    }
    if(modoEdicao) {
        putFilme(filme)
    }
    else {
        postFilme(filme)
    }
    
}

const postFilme = async (filme) => {
    const responde = await fetch(`${apiUrl}/filmes/add`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(filme)
    })
    lista.innerHTML = ''
    getFilmes()
    limpaCampos()
}

const deleteFilme = async (id) => {
    const responde = await fetch(`${apiUrl}/filmes/delete/${id}`, {
        method: 'DELETE'
    })
    lista.innerHTML = ''
    getFilmes()
}

const limpaCampos = () => {

    document.getElementById('nome').value = '';
    document.getElementById('imagem').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('nota').value = '';
}

const putFilme = async (filme) => {
    const response = await fetch(`${apiUrl}/filmes/edit/${idEdicao}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filme)
    })
    lista.innerHTML = '';
    getFilmes();
    limpaCampos();

    modoEdicao = false;
    idEdicao = 0;
}

const editarFilme = async (id) => {
    modoEdicao = true;
    idEdicao = id;
    const filme = await getById(id);

    document.getElementById('nome').value = filme.nome;
    document.getElementById('imagem').value  = filme.imagem;
    document.getElementById('genero').value = filme.genero;
    document.getElementById('nota').value = filme.nota;
}

const marcarView = async (id) => {
    const filme = await getById(id)
    if(filme.view == false){
        filme.view = true
        console.log(filme.view)
    }else{
        filme.view = false
        console.log(filme.view)
    }
    const response = await fetch(`${apiUrl}/filmes/edit/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filme)
    })
    lista.innerHTML = '';
    getFilmes();
}