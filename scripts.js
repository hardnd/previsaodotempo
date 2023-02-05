// variaveis -> um espaço da memoria do computador 
// função -> um trecho de código que só é executado quando der da ordem

let key_api = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados) {
    console.log(dados)
    
    document.querySelector(".cidade").innerHTML = "Hoje em " + dados.name
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".umidade").innerHTML = "Umidade " + (dados.main.humidity) + "%"
    document.querySelector(".input-cidade").value = ""
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        key_api +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then(resposta => resposta.json())
    colocarNaTela(dados)
    console.log(dados)

}

function pesquisar() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}


// fim