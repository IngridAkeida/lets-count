function contar(){

    let inicio = window.document.querySelector('input#txtinicio')

    let fim = window.document.querySelector('input#txtfim')

    let pulo = window.document.querySelector('input#txtpulo')

    let res = window.document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0) {
        window.alert('Faltam dados para realizar a contagem')
        res.innerHTML = 'Por favor, verifique se todas as lacunas estão preenchidas corretamente e tente novamente.'
    
    } else {

        res.innerHTML = 'Contando: <br>'
    
        let i = Number(inicio.value)

        let f = Number(fim.value)

        let p = Number(pulo.value)

        if (p <= 0) {
            window.alert('Pulo inválido! Considerando Pulo: 1')
            p = 1
        }

        if (i < f){
    
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F438}`
            }
    
        } else{
    
            // Contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F438}`
            }
    
        }
        res.innerHTML += '\u{2714}'
    }
    
}   