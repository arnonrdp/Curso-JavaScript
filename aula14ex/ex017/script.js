function gerar() {
    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')

    if (num.value.length == 0) {
        res.innerHTML = `O campo acima não pode estar vazio!`
    } else {
        res.innerHTML = ''
        
        for (var i = 1; i <= 10; i++) {
            let n = Number(num.value)
            res.innerHTML += `${n} x ${i} = ${n * i} <br>` + "\n"
        }

        /*
        res.innerHTML += `${n} x 0 = 0 <br>
        ${n} x 1 = ${n *= 1} <br>
        ${n} x 2 = ${n *= 2} <br>
        ${n} x 3 = ${n *= 3} <br>
        ${n} x 4 = ${n *= 4} <br>
        ${n} x 5 = ${n *= 5} <br>
        ${n} x 6 = ${n *= 6} <br>
        ${n} x 7 = ${n *= 7} <br>
        ${n} x 8 = ${n *= 8} <br>
        ${n} x 9 = ${n *= 9} <br>
        ${n} x 10 = ${n *= 10} <br>
        ${n} x ${n} = ${n *= n}`
        */
    
    }
}