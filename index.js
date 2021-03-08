// 1 - Faça sua implementação de um algoritmo de ordenação (preferencialmente MERGE SORT)
let entrada = [4, 2, 5, 1, 6, 3, 8, 7, 9];

console.log('-------------------------------- valor de entrada-------------------------------- ');
console.log(entrada);


/* logica realizada em call, não concluida */
function merge_sort(entrada) {
    let saida = []

    entrada.forEach(e => {
        let index = -1;
        saida.forEach((s, i) => {
            if(s > e)  {
                index = i; 
            }
        })

        if(index == -1){
            saida.push(e)
        }else{
            let esquerda = saida.filter((s, i) => { return i < index });
            let direita = saida.filter((s, i) => { return i >= index });
            esquerda.push(e)
            
            saida =  esquerda.concat(direita)
        }
    });
    return saida
}
console.log('-------------------------------- Logica realizada em call, não concluida --------------------------------');
console.log(merge_sort(entrada));
  


/* logica da call concluda depois */
function merge_sort2(entrada) {
    let saida = []

    entrada.forEach(e => {
        let index = -1;

        saida.every((s, i) => {
            if(e < s)  {
                index = i; 
                return false;
            }else{
                return true
            }
        })
        if(index == -1){
            saida.push(e)
        }else{
            let esquerda = saida.filter((s, i) => { return i < index });
            let direita = saida.filter((s, i) => { return i >= index });            
            saida =  esquerda.concat(e, direita)            
        }
    });

    return saida;
}
console.log('-------------------------------- Logica da call concluda depois --------------------------------');
console.log(merge_sort2(entrada));
  




/* metodo certo solicitado */

const merge_sort3 = (entrada) => {
    const join_array = (esquerda, direita) => {
        const retorno = []
      
        while (esquerda.length && direita.length) {
          retorno.push(esquerda[0] > direita[0] ? direita.shift() : esquerda.shift())
        }
      
        while (esquerda.length) {
          retorno.push(esquerda.shift())
        }
        while (direita.length) {
          retorno.push(direita.shift())
        }
      
        return retorno
    }

    if (entrada.length < 2) 
        return entrada
    
    const meio = Math.floor(entrada.length / 2)
    const esquerda = entrada.slice(0, meio)
    const direita = entrada.slice(meio, entrada.length)

    const sort_esquerda = merge_sort3(esquerda)
    const sort_direita = merge_sort3(direita)

    return join_array(sort_esquerda, sort_direita)
}

console.log('-------------------------------- Metodo solicitado -------------------------------- ');
console.log(merge_sort3(entrada));
