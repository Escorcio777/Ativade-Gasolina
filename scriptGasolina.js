const precos = {
    gasolina: 6.69,
    etanol: 5.80,
    diesel: 6.20
};


const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};


const calcularAbastecimento = (preco, litros) => preco * litros;


const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);

  
    if (!tipo) {
        alert("Selecione um tipo de combustível!");
        return;
    }

    if (isNaN(litros)) {
        alert("Digite um valor válido em litros!");
        return;
    }

    if (litros < 0) {
        alert("Não é permitido valor negativo!");
        return;
    }

    const preco = precos[tipo];

    if (!preco) {
        alert("Combustível inválido!");
        return;
    }

    const total = calcularAbastecimento(preco, litros);

    document.getElementById("resultado").textContent = formatarMoeda(total);
};


document.getElementById("litros").addEventListener("input", atualizarValor);
document.getElementById("combustivel").addEventListener("change", atualizarValor);


document.getElementById("formCombustivel").addEventListener("submit", (e) => {
    e.preventDefault();
    atualizarValor();
});