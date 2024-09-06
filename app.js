function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum atleta foi encontrado. Digite o nome de um atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let nome = "";
    let desc = "";
    let tags = "";

    for (let atleta of atletas ) {
        nome = atleta.nome.toLowerCase()
        desc = atleta.desc.toLowerCase()
        tags = atleta.tags.toLowerCase()
        // se titulo inclui o campoPesquisa
        if(nome.includes(campoPesquisa) || desc.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${atleta.nome}</a>
                    </h2>
                    <p class="descricao-meta">${atleta.desc}</p>
                    <a href="${atleta.link}" target="_blank">Mais informações</a>
                </div>
            `
        }
        
    };

    if (!resultados) {
        resultados = "<p>Nenhum atleta foi encontrado</p>"
    }
    section.innerHTML = resultados;
}