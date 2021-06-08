function solucao(precos) {
    var min = precos[0];
    var total = 0;
    for(let i = 0; i<precos.length; i++){ 
        total += precos[i];
        if(precos[i]<min){
                min = precos[i];
        }
    }
    if(precos.length>=5){
        total = total - min;
    }
    console.log(total);
    
}