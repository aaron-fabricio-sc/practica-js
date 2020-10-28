this.nombre = "aaron global";
function imprimir() {
  console.log(this.nombre);
}
imprimir();

const obj = {
  nombre: "fabricio",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj.imprimir();

function Persona(nombre) {
  this.nombre = nombre;

  return function () {
    console.log(this.nombre);
  };
}

const caty = new Persona("caty");

caty();

function Persona2(nombre) {
  this.nombre = nombre;

  return () => {
    console.log(this.nombre);
  };
}

const mely = new Persona2("mely");

mely();

this.lugar = "constexto global";

function contexto(saludar, aQuien) {
  return console.log(`${saludar} ${aQuien} estas en el ${this.lugar}`);
}

const objet = {
  lugar: "contexto objeto",
};

contexto("holaa", "aaron");
contexto.call(objet, "hhi", "fabricio");
contexto.apply(objet, ["hi", "caty"]);

const gato = {
  nombre: "kyo",
  saludo: function () {
    console.log(`hola soy ${this.nombre}`);
  },
};

gato.saludo();

const gato2 = {
  saludo: gato.saludo.bind(gato),
};
gato2.saludo();
