let sobrenombre = prompt("Hola te propongo un juego! Primero, decime cual es tu sobrenombre?:");

if(sobrenombre =="") {
    sobrenombre = prompt("Dale, contame como te dicen para que podamos jugar:");
}else{
    alert("Excelente "+sobrenombre+". Empezamos?");
}
document.getElementById("sobreNombre").innerHTML = sobrenombre;
console.log(sobrenombre);
alert(sobrenombre+", primero pensa un numero del 1 al 20 y NO ME LO DIGAS. Avisame si ya esta.")
alert("Bien a ese numero, sumale 7 y decime cuando estes listo.")
alert("Ahora multiplica el resultado que te dio por 2.")
alert("Vamos bien "+sobrenombre+"! Restale 6 al resultado.")
alert("Dividilo por 2.")
alert("Casi estamos "+sobrenombre+" Como ultimo paso, restale el numero que habias pensado originalmente. Y pensa 3 segundos en el resultado que te dio.")
let aceptaResultado = confirm("Ahora llego la magia. El resultado es 4 correcto?.")
if (aceptaResultado ==false) {
    alert("O sos un mentirosillo, o no sos muy buenos con las matematicas :D. Refresca la pagina y volve a empezar")
} else {
    }