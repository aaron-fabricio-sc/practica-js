const NOMBRE = Symbol();
const SALUDAR = Symbol("saludo");

const persona = {
  [NOMBRE]: "jon",
};

persona.NOMBRE = "Aaron";

console.log(persona);

persona[SALUDAR] = function () {
  console.log("hola");
};

console.log(persona);
persona[SALUDAR]();

// set

const set = new Set([1, 2, 1, 2, 2, 2, 2, 3, 3, 5, 5, 5, 5]);
const set2 = new Set();

set2.add(8);
set2.add(5);
set2.add(2);
set2.add(5);
set2.add(8);
set2.add(8);

console.log(set);
console.log(set2);

const arr = Array.from(set);

console.log(arr[0]);

// Map

const mapa = new Map();
mapa.set("nombre", "aaron");
mapa.set("apellido", "santa Cruz");
console.log(mapa);
console.log(mapa.size);

mapa.set("edad", 23);
console.log(mapa);
console.log(mapa.has("hola"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));

mapa.delete("apellido");
console.log(mapa);

const mapa2 = new Map([
  ["nombre", "choco"],
  ["edad", "4"],
  ["color", "cafe"],
]);
const llavemapa2 = mapa2.keys();
const valoresmapa2 = mapa2.values();

console.log(mapa2);
console.log(llavemapa2);
console.log(valoresmapa2);

// generadores

/* function* iterable() {
  yield "hola";
  yield "hola2";
  yield "hola3";
  yield "hola4";
  yield "hola5";
}
let iterador = iterable();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

for (let i of iterador) {
  console.log(i);
}

const arrIterador = [...iterable()];

console.log(arrIterador);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({
      valor,
      resultado: valor * valor,
    });
  }, Math.random() * 5000);
}
function* generador() {
  console.log(`inicia generador`);

  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);

  console.log(`finaliza generador`);
}

let gen = generador();

for (let i of gen) {
  console.log(i);
} */

// un proxi es una copia de un objeto
console.warn("proxis");
const personaaa = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.warn(
        `lA PROPIEDAD ${prop} NO EXISTE EN EL OBJETO PERSONAAA`
      );
    }
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ\s]+$/g.test(valor)
    ) {
      return console.log(`en la propiedad "${prop}" solo acepta letras`);
    }
    obj[prop] = valor;
  },
};

const aaron = new Proxy(personaaa, manejador);

aaron.nombre = "aaron";
aaron.apellido = "santa cruz97";
aaron.edad = 0;

console.log(aaron);

// propiedades dinamica
