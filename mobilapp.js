function solucao(tempo, distancia) {
    let precoTotal = 0;
    if(tempo<5){
        console.log("600");
    } else if((tempo>=5)&&(tempo<=60)){
        precoTotal = (100*tempo) + (50*distancia);
        console.log(precoTotal);
    } else{
        if(distancia<100){
            precoTotal = 200*distancia;
            console.log(precoTotal);
        } else {
            precoTotal = 150*distancia;
            console.log(precoTotal);
        }
    }

}