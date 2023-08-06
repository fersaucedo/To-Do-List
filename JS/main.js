let ul = document.getElementById("ul");
let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(e) {

    e.preventDefault();

    let li = document.createElement("li");//se crea la variable li para crear el elemento contenedor de la entrada del input

    li.innerHTML = input.value// al contenedor li se le asigna el valor del input

    ul.appendChild(li); //se agrega al elemento html

    input.value = "";
});
