const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i <= numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}

// sin destructuracion

const a = [1, 2, 3];

let uno = a[0],
  dos = a[1],
  tres = a[2];

console.log(uno, dos, tres);
//con destructuracion

const [one, two, tree] = a;
console.log(one, two, tree);

const persona = {
  nombre: "aaron",
  apellido: "santa",
  edad: 24,
};

persona.email = "aaronfabro";
console.log(persona);

const { nombre, apellido, edad, email } = persona;

console.log(
  `hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años mi email es ${email}`
);

let name = "choco",
  age = 4;

const perro = {
  name,
  age,
  ladrar() {
    console.log("guaoo guaoo");
  },
};

console.log(perro);

// en las funciones flecha el this salta el contexto
const gato = {
  n: "gatito",
  e: 1,
  maullar: () => {
    console.log(this);
  },
};

gato.maullar();
