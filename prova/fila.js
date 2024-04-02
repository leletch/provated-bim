export function criarFila (size = 10){
    return [...new Array (size)]
}

export function inserirItem (fila, item) {
    if(fila.includes(undefined)){
        const index = item.IndexOF(element => element === undefined)
        fila[index] =  item

        console.log("[{$item}] foi adicionado a fila")
        console.log(fila)
        return
    }
    console.error("O itemn não foi adicionado pois a fila já esta cheia")
    return
}

export function retirarItem (item){
    if(item[0] !== undefined){
        let primeiro = item[0]
        for(let i = 1; i<item.length; i++){
        item[i - 1] =  item[i]
        }
        item[item.length - 1] = undefined
}
    console.error("Não foi possível retirar")
    return
}

    export function esvaziarFila (fila){

        if(fila[0] !== undefined){
            let primeiro = fila[0]
            for(let i = 0; i < fila.length; i++){

            fila[i] = undefined;
            }
            fila[0] = primeiro;
        }
    }

export function verTamanhoDaFila(fila){
    console.log(fila);
    let vazio = 0
    let usado = 0
    for(let i=0; i < fila.length; i++){
        if(fila[i] === undefined){
            vazio = vazio + 1;
        }else{
            usado = usado + 1;
        }
    }
    console.log("Espaços vazios: " + vazio)
    console.log("Espaços usados: " + usado)
    console.log(fila.length)

    let indefinido = [];
    let definido = [];
    for(let i=0; i < fila.length; i++){
        if(fila[i] === undefined){
            fila[i] = indefinido[i];
        }else{
            fila[i] = definido[i];
        }
    }
    console.log(definido)
}