// main.js
console.log("Hola desde JavaScript externo");

// Declaración de variable
var monstruo = "Frankenstein";
alert("Bienvenido, " + monstruo + "!"); // ventana emergente
// Declarando variables
var edad = 300;
var energia = 85;

// Mecanismo de escape
var frase = "Él dijo: \"No tengo miedo a nada\"";

// Operadores
var totalEnergia = energia + 15;
var estaListo = energia > 80 && edad < 1000;

// Mostrar resultados
console.log("Edad: " + edad);
console.log("Energía total: " + totalEnergia);
console.log("¿Está listo?: " + estaListo);
// if - else
if (energia > 70) {
  console.log("El monstruo tiene buena energía.");
} else {
  console.log("El monstruo está cansado.");
}

// Bucle for
for (var i = 1; i <= 3; i++) {
  console.log("Intento #" + i);
}

// Funciones con cadenas
var nombre = "drácula";
console.log(nombre.toUpperCase());     // DRÁCULA
console.log(nombre.charAt(0));         // d
console.log(nombre.substring(0, 3));   // drá

// Arreglos
var miedos = ["sol", "crucifijo", "ajo"];
miedos.push("agua bendita");
console.log("Miedos: " + miedos.join(", "));

// Números
var altura = 1.765;
console.log("Altura: " + altura.toFixed(1)); // 1.8
// FUNCIONES ADICIONALES CON ARREGLOS
miedos.pop(); // elimina el último elemento
miedos.shift(); // elimina el primero
miedos.unshift("luz"); // agrega un nuevo miedo al principio
console.log("Miedos actualizados: " + miedos.join(", "));
console.log("Miedos al revés: " + miedos.reverse().join(", "));

// FUNCIONES CON NÚMEROS
var peso = "abc";
console.log("¿Es un número válido?: " + !isNaN(peso)); // false, porque no es número

// COMENTARIOS PARA ACLARAR EL CÓDIGO
// Esta sección muestra cómo trabajar con métodos de arreglo adicionales
// y cómo verificar si un valor es numérico usando isNaN().

