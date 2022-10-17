



function compara_valores (){

    let Respuesta1 = prompt("Dame tu primer número");
    let Respuesta2 = prompt("Dame tu segundo número");

    let N1 = parseInt(Respuesta1);
    let N2 = parseInt(Respuesta2);


    if (N1 < N2){
        console.log("El segundo número es mas grande");
    }

    else if(N1 > N2){
        console.log("El primer número es mas grande");
    }
      
    else {
        console.log("Los numeros son iguales");
    }

    };
 
    
    compara_valores();