

button = document.querySelector("#btn");

p = document.querySelector("#text");
p.innerHTML = "La variable está en False";

button.addEventListener("click",function(){
addtext()
});

function addtext(){

    p = document.querySelector("#text");
    p.innerHTML = "La variable está en True";

}

