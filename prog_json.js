const carro = {
    nome: "Palio",
    motor: "1.6",
    cor: "Branco",
    opcionais: {
        roda: "roda de liga leve",
        banco: "couro",
        tracao: "4x4"
    }
}


console.log(carro)


const valores_str = JSON.stringify(carro)


console.log(valores_str)
