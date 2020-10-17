// ffuncion constructora que crea objeetos o prototipos sin usar clases

function animales(tipo, raza, color) {
  (this.tipo = tipo), (this.raza = raza), (this.color = color);
}

animales.prototype.saludar = function () {
  console.log(`hola soy un ${this.tipo}`);
};
const gato = new animales("felino", "angora", "blanco");

console.log(gato);
console.log(gato.saludar());

//herencia prototípica
function perro(tipo, raza, color, tamanio) {
  this.super = animales;
  this.super(tipo, raza, color);
  this.tamanio = tamanio;
}

//perro heredando de animales
perro.prototype = new animales();
perro.prototype.constructor = perro;
// metodos para perro

perro.prototype.sonar = function () {
  console.log("yo ladro");
};

perro.prototype.ladrido = function () {
  console.log("guaooo guaaooo");
};

const snopy = new perro("perro", "dalmata", "blanco", "mediano");
console.log(snopy);

// el mismo ejemplo de animales pero con clases

class animalesClass {
  constructor(tipo, raza, color) {
    (this.tipo = tipo), (this.raza = raza), (this.color = color);
  }
  //metodos
  sonarClass() {
    console.log(`soy un ${this.tipo}`);
  }
  colorClass() {
    console.log(`soy de color ${this.color}`);
  }
  // una funcion estatica se puede llamar sin instanciar un objeto
  static razaClass() {
    console.log(`soy de la raza ${this.raza}`);
  }
}

const gallo = new animalesClass("gallo", "normal", "negro");
console.log(gallo.sonarClass() + gallo.colorClass());
animalesClass.razaClass();
//herencia con clases

class PerroClass extends animalesClass {
  constructor(tipo, raza, color, tamanio, nombre) {
    super(tipo, raza, color);
    this.tamanio = tamanio;
    this.nombre = null;
  }
  //metodos
  sonarClass() {
    console.log(`soy un ${this.tipo} y yo ladro`);
  }
  ladridoClass() {
    console.log("guauu guauu!!!");
  }
  get getNombre() {
    return this.nombre;
  }
  set setNombre(nombre) {
    this.nombre = nombre;
  }
}

const scooby = new PerroClass("perro", "gran danez", "cafe", "gigante");
console.log(scooby);
scooby.sonarClass();
scooby.setNombre = "scoby";
console.log(scooby);

console.table(console);

let fecha = new Date();

console.log(fecha.getSeconds());

// metodos matematicos

console.clear();
//abs saca el valor absoluto
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.8)); // lo redondea al siguiente numero
console.log(Math.floor(7.8)); // lo redondea al numero menor
console.log(Math.round(7.4)); // lo redondea el numero ya sea al menor o mayor
console.log(Math.round(Math.random() * 1000));
