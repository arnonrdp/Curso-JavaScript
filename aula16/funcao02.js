function soma(n1=0, n2=0) { // Se não definir um valor padrão para o parâmetro e ele não for informado retornará NaN (Not a Number).
    return n1 + n2
}

console.log(soma(7)) // Neste caso, o segundo parâmetro será = 0.

console.log(soma(7, 3))