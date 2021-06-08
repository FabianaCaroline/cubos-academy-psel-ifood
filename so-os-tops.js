function solucao(produtos) {
    var totalTopster = 0;
    var total = 0;
    var obj = {
        totalTop: 0,
        percentual: 0
    }
    for(let i = 0; i<produtos.length; i++){
        
        total += produtos[i].preco;
        
        if(produtos[i].preco>10000){
            totalTopster += produtos[i].preco;
        }
    }
    
    obj.totalTop = totalTopster;
    obj.percentual = ((totalTopster)/total);
    console.log(obj);
}