function solucao(letra, palavras) {
    var cont = 0;
    for(let i = 0; i<palavras.length; i++){
        let str = palavras[i];
        if(str[0]!=letra){
            cont++;
        }
    }
    console.log(cont);
    
}