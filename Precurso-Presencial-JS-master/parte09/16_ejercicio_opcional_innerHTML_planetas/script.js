
let sistemaSolar = {
    
    Mercurio:{
        Nombre: "Mercurio",
        Caracteristicas: "Mercurio es el planeta más cercano al Sol, el más pequeño de los planetas internos. Se sabe de la existencia de Mercurio desde el siglo III a.d.C. En la mitología romana, Mercurio era el dios del comercio y los viajes, por eso se le dió este nombre al planeta, por su movimiento rápido a través del cielo.",
        
    },

    Venus:{
        Nombre: "Venus",
        Caracteristicas: "Venus es el segundo planeta desde el Sol. Se le considera la hermana del planeta Tierra por su similitud en tamaño y masa, y por ser el planeta más cercano. Sin embargo, su atmósfera está compuesta por gases tóxicos (90-95% dióxido de carbono) y temperaturas superiores a los 450ºC.",
    },

    Tierra:{
        Nombre: "Tierra",
        Caracteristicas: "La Tierra es el tercer planeta desde el Sol y el mayor de los planetas internos. Es el quinto más grande en tamaño en el sistema solar. Como Mercurio y Venus, la Tierra se formó a partir de una masa caliente y fundida que luego se enfrió y solidificó.",
    },

    Marte:{
        Nombre: "Marte",
        Caracteristicas: "Marte es el cuarto planeta desde el Sol y el último de los planetas internos. Desde la Tierra se puede observar a Marte que luce rojo por la gran cantidad de polvo que cubre la superficie, por lo que se le conoce como el planeta rojo.",
    },

    Jupiter:{
        Nombre: "Jupiter",
        Caracteristicas: "Júpiter es el primero de los planetas gaseosos y el quinto desde el Sol. Es el más grande de los planetas del sistema solar, concentrando el 71% de todo el material del sistema, exceptuando al Sol.",
    },

    Saturno:{
        Nombre: "Saturno",
        Caracteristicas: "Saturno es el sexto planeta desde el Sol y el segundo más grande del sistema solar. Su característica más distintiva es el sistema de anillos que lo circunda. En total son siete anillos: A, B, C, D, E, F y G.",
    },
        
    Urano:{
        Nombre: "Urano",
        Caracteristicas: "Urano es el tercero de los planetas gaseosos y el séptimo desde el Sol. Fue descubierto por el astrónomo William Herschel en 1781. Es un planeta helado, azul pálido y es el más lejano de los planetas que puede ser visto a simple vista desde la Tierra.",
    },

     Neptuno:{
        Nombre: "Neptuno",
        Caracteristicas: "El octavo y último planeta del sistema solar es Neptuno. Es el más pequeño de los planetas gaseosos, de color azul intenso y nubes blancas. Como los otros planetas gaseosos, posee un sistema de anillos alrededor del planeta.",
    },
    

   
}


let PLanetasElegidos ={

    Planeta1:"",
    Planeta2:"",
    Planeta3:"",

}



let Planeta1 = prompt("escribe tu primer planeta");
let Planeta2 = prompt("escribe tu segundo planeta");
let Planeta3 = prompt("escribe tu tercer planeta");


if (sistemaSolar[Planeta1].Nombre == PLanetasElegidos.Planeta1);{

    let carta = document.querySelector(".carta1")
    carta.innerHTML = `
    <div class="planeta1"> 
    <h2 class="NombreP1"> ${Planeta1} </h2>
    <img class="ImagenP1">
    <p class="CaracterísticasP1">${sistemaSolar[Planeta1].Caracteristicas}</p>
    </div>`;
    
    

};

if (sistemaSolar[Planeta2].Nombre == PLanetasElegidos.Planeta2);{

    let carta = document.querySelector(".carta2")
    carta.innerHTML = `
    <div class="planeta2">
            <h2 class="NombreP2"> ${Planeta2} </h2>
            <img class="ImagenP2">
            <p class="CaracterísticasP2">${sistemaSolar[Planeta2].Caracteristicas}</p>
        </div>`;
    }

    
if (sistemaSolar[Planeta3].Nombre == PLanetasElegidos.Planeta3);{

    let carta = document.querySelector(".carta3")
    carta.innerHTML = `
    <div class="planeta3">
        <h2 class="NombreP2"> ${Planeta3} </h2>
        <img class="ImagenP3">
        <p class="CaracterísticasP3">${sistemaSolar[Planeta3].Caracteristicas}</p>

        </div>`;
    }

   
   
   
    
    
    


console.log(sistemaSolar[Planeta2]);
console.log(sistemaSolar[Planeta3]);





//for (i=0; i<3 ; i++){

 /*let respuesta = prompt("escribe un planeta");
    if (respuesta(i) = sistemaSolar.Mercurio)
        respuesta(i) = PLanetasElegidos.Planeta1;
    
    else if (respuesta(i) = sistemaSolar.Venus)
        respuesta(i) = PLanetasElegidos.Planeta2;*/




//}