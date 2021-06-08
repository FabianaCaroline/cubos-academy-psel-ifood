function solucao(ano) {
    var n = 0;
    for(var i = 2014; i<=ano; i +=4){
        if(i===ano){
            console.log("COPA");
            n = 1;
            break;
        } else if(ano===(i+2)){
            console.log("JOGOS");
            n = 1;
            break;
        } 
    }
    if(n!=1){
            console.log("MEH");
        }
}