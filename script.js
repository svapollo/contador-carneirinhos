function contar (){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let pulos = document.getElementById('txtpulos')
    let res = document.getElementById('carneiros')

    if(ini.value.length == 0 || fim.value.length == 0 || pulos.value.length == 0){
        res.innerHTML = 'Impossível contar!<br>Verifique os dados digitados.'
    } else{
        res.innerHTML = 'Contando Carneirinhos: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pulos.value)

        if(p <= 0){
            window.alert('Pulos inválidos! Considerando Pulos = 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \uD83D\uDC11 ` //numeros+carneiros
            }
            res.innerHTML += `\uD83D\uDCA4` //dormiu
        } else{
            //contagem decrescente
            for(let c = i; c >= f; c -=p){
                res.innerHTML += `${c} \uD83D\uDC11 `
            }
            res.innerHTML += `\uD83D\uDCA4`
        }
        
    }
}