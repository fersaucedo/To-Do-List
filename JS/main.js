let ul = document.getElementById("ul");
let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {

  //para evitar que la pagina se refresque
  e.preventDefault();

  //validacion
  if (input.value == "") {
    alert("Debe ingresar un valor");
  } else {

    //se crea el elemento input checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //se crea la variable li para crear el elemento contenedor del elemento checkbox y de la entrada del input
    let li = document.createElement("li");

    //para agregar el elemento checkbox al elemento li
    li.appendChild(checkbox);

    //para agregar el valor del elemento input de tipo texto
    li.appendChild(document.createTextNode(input.value));

    //se agrega al elemento html
    ul.appendChild(li);

    //para resetear el valor del input
    input.value = "";
  }
});
