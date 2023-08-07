let ul = document.getElementById("ul");
let input = document.getElementById("input");
let btn = document.getElementById("btn");

function crearElemento() {

  //se crea el elemento input checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";

  //se asigna valor a la variable li para crear el elemento contenedor del elemento checkbox y de la entrada del input
  let li = document.createElement("li");

  //para agregar el elemento checkbox al elemento li
  li.appendChild(checkbox);

  //para agregar el valor del elemento input de tipo texto
  li.appendChild(document.createTextNode(input.value));

  //se agrega al elemento li al elemento ul
  ul.appendChild(li);

  //para resetear el valor del input
  input.value = "";


  checkbox.addEventListener("click", function(e) {
    if (e.target.checked) {
      li.classList.add("checked");
    } else {
      li.classList.remove("checked");
    }
  
  });

}

//evento para agregar tareas
btn.addEventListener("click", function (e) {

  //para evitar que la pagina se refresque
  e.preventDefault();
 
  //validacion
  if (input.value == "") {
    alert("Debe ingresar un valor");
  } else {
    crearElemento();
  }

});
