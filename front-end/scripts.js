const apiUrl = "http://localhost:3000";
const lista = document.getElementById('lista');

const getVagas = async() => {
    const response = await fetch(`${apiUrl}/vagas`);
    const vagas = await response.json();
    vagas.map((vaga) => {
        console.log(vaga.empresa);
        lista.insertAdjacentHTML('beforeend', `
        <tr>
            <th>${vaga.id}</th>
            <th>${vaga.empresa}</th>
            <th>${vaga.oportunidade}</th>
            <th>${vaga.tipo}</th>
        </tr>
        `)
    })
};
getVagas();