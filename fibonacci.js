function calcularFibonacci(n) {
    const fibonacci = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        fibonacci.push(a);
        const temp = a;
        a = b;
        b = temp + b;
    }
    
    return fibonacci;
}

function solicitarNumero() {
    let input;

    while (true) {
        input = prompt("Introduce un número para calcular la serie de Fibonacci:");

        if (input === null) {
            return;
        }

        const numero = Number(input);

        if (!isNaN(numero) && numero > 0) {
            return numero;
        } else {
            alert("Por favor, introduce un número válido.");
        }
    }
}

document.getElementById("startButton").addEventListener("click", () => {
    const numero = solicitarNumero();

    if (numero !== undefined) {
        const resultado = calcularFibonacci(numero);
        console.log(resultado);
        document.getElementById("result").innerText = `Serie de Fibonacci: ${resultado.join(', ')}`;
    }
});