

function division(N1, N2){

    let solucion = N1 / N2;
    alert(solucion);
    return(solucion);

};

   
    
 do{

    let Respuesta1 = prompt("Introduce un número");
    let Respuesta2 = prompt("Introduce otro número");
    let N1 = parseInt(Respuesta1);
    let N2 = parseInt(Respuesta2);
    
    division(N1,N2);

 } while (N2!=0);




