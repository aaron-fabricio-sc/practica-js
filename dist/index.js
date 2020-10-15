"use strict";

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (var i = 0; i <= numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}

// sin destructuracion

var a = [1, 2, 3];

var uno = a[0],
    dos = a[1],
    tres = a[2];

console.log(uno, dos, tres);
//con destructuracion

var one = a[0],
    two = a[1],
    tree = a[2];

console.log(one, two, tree);

var persona = {
  nombre: "aaron",
  apellido: "santa",
  edad: 24
};

persona.email = "aaronfabro";
console.log(persona);

var nombre = persona.nombre,
    apellido = persona.apellido,
    edad = persona.edad,
    email = persona.email;


console.log("hola mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " a\xF1os mi email es " + email);

var name = "choco",
    age = 4;

var perro = {
  name: name,
  age: age,
  ladrar: function ladrar() {
    console.log("guaoo guaoo");
  }
};

console.log(perro);

// en las funciones flecha el this salta el contexto
var gato = {
  n: "gatito",
  e: 1,
  maullar: function maullar() {
    console.log(undefined);
  }
};

gato.maullar();