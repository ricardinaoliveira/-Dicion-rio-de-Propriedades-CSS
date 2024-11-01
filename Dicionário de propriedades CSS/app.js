function pesquisar(){   
let section = document.getElementById("resultado_pesquisa");
let campoPesquisa = document.getElementById("campo_pesquisa").value
if (!campoPesquisa) {
    section.innerHTML = "<p>Busca vazia</p>"
    return
}
campoPesquisa = campoPesquisa.toLowerCase()
titulo = titulo.toLowerCase();
descricao = descricao.toLowerCase();  
let resultados = "";  
let titulo = ""; 
let descricao = "";

    for(let dado of dados){
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)){
            resultados +=`
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao_meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }
if (!resultados){
    resultados = "<p> Resultado não encontrado</p>"
    return
}
section.innerHTML = resultados
}