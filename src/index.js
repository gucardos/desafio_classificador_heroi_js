let nome = "Gustavo"
let experiencia = 6790
let classificacao = ""

if(experiencia <= 1000){
    classificacao = "Ferro"
} else if(experiencia > 1000 && experiencia <= 2000){
    classificacao = "Bronze"
} else if(experiencia > 2000 && experiencia <= 5000){
    classificacao = "Prata"
} else if(experiencia > 5000 && experiencia <= 7000){
    classificacao = "Ouro"
} else if(experiencia > 7000 && experiencia <= 8000){
    classificacao = "Platina"
} else if(experiencia > 8000 && experiencia <= 9000){
    classificacao = "Ascendente"
} else if(experiencia > 9000 && experiencia <= 10000){
    classificacao = "Imortal"
} else if(experiencia > 10000){
    classificacao = "Radiante"
} else {
    console.log("Valor inválido")
}

console.log("O herói de nome " + nome + " está no nível de " + classificacao)