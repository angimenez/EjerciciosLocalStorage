// Accedemos al valor asociado a "example"
// que devolverá null (nulo) ya que no hay nada cargado
console.log(localStorage.getItem("example"));

// Guardamos un valor cualquiera asociado a la clave example
// (notar que siempre debe almacenarse en String)
localStorage.setItem("example", "example value");

// Mostramos que ahora sí hay un valor asociado
console.log(localStorage.getItem("example"));

// Eliminamos el elemento asociado a "example"
localStorage.removeItem("example");

// Vemos que nuevamente es null
console.log(localStorage.getItem("example"));
