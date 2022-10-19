

let respuesta = prompt("Escribe un número");
let respuestaDato = parseInt(respuesta);

addnumber(respuestaDato);

button = document.querySelector("#btn");

button.addEventListener("click", function()
{addnumber(respuestaDato)
});

function addnumber(respuestaDato){

    p = document.querySelector("#Number");
    p.innerHTML = parseInt(p.innerHTML) + respuestaDato;

};




