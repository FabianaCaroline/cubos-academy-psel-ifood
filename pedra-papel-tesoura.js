function solucao(joao, andre) {
    if(joao===andre){
        console.log("EMPATE");
    } else if(joao==="PEDRA"){
        if(andre==="TESOURA"){
            console.log("JOAO");
        } else{
            console.log("ANDRE");
        }
    } else if(joao ==="TESOURA"){
        if(andre==="PAPEL"){
            console.log("JOAO");
        } else{
            console.log("ANDRE");
        }
    } else if(joao ==="PAPEL"){
        if(andre==="PEDRA"){
            console.log("JOAO");
        } else{
            console.log("ANDRE");
        }
    }
}