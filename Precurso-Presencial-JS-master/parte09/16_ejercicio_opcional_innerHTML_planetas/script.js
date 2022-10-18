let sistemaSolar = {
    mercurio: {
    nombre: 'mercurio',
    color: 'gris',
    temperatura: 350,
    imagen: 'https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg'
    },

    venus: {
    nombre: 'venus',
    color: 'blanco',
    temperatura: 460,
    imagen :
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg'
    },

    tierra: {
    nombre: 'tierra',
    color: 'morado',
    temperatura: 14,
    imagen :
    'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg'
    },
    marte: {
    nombre: 'marte',
    color: 'rojo',
    temperatura: -46,
    imagen :
    'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg'
    },
    jupiter: {
    nombre: 'jupiter',
    color: 'marrón',
    temperatura: -121,
    imagen :
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg'
    },
    saturno: {
    nombre: 'saturno',
    color: 'amarillo',
    temperatura: -130,
    imagen :
    'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg'
    },
    urano: {
    nombre: 'urano',
    color: 'azul',
    temperatura: -205,
    imagen : 'http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg'
    },
    neptuno: {
    nombre: 'neptuno',
    color: 'azul',
    temperatura: -220,
    imagen :
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg'
    },
    pluton: {
    nombre: 'plutón',
    color: 'blanco',
    temperatura: -229,
    imagen :
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg'
    }
    };


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
    <img src="${sistemaSolar[Planeta1].imagen}">
    <p class="CaracterísticasP1"> Temperatura <br>  ${sistemaSolar[Planeta1].temperatura}</p>
    </div>`;
    
    

};

if (sistemaSolar[Planeta2].Nombre == PLanetasElegidos.Planeta2);{

    let carta = document.querySelector(".carta2")
    carta.innerHTML = `
    <div class="planeta2">
            <h2 class="NombreP2"> ${Planeta2} </h2>
            <img src="${sistemaSolar[Planeta2].imagen}">
            <p class="CaracterísticasP2"> Temperatura <br> ${sistemaSolar[Planeta2].temperatura}</p>
        </div>`;
    }

    
if (sistemaSolar[Planeta3].Nombre == PLanetasElegidos.Planeta3);{

    let carta = document.querySelector(".carta3")
    carta.innerHTML = `
    <div class="planeta3">
        <h2 class="NombreP2"> ${Planeta3} </h2>
        <img src="${sistemaSolar[Planeta3].imagen}">
        <p class="CaracterísticasP3"> Temperatura <br> ${sistemaSolar[Planeta3].temperatura}</p>

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