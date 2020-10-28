//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/* const numeroDeCaracteres = (palabras) =>
  typeof palabras === "string"
    ? alert(`"${palabras}" Tiene: ${palabras.length} caracteres`)
    : alert("lo que ingresaste no es una cadena de texto");

numeroDeCaracteres("holaaa mi caty"); */
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
/* (function (texto) {
  alert(texto.substring(5, 12));
})("eres algo muy importante para mi"); */

const recortarTexto = (texto = "", longitud = undefined) =>
  !texto
    ? console.warn("no ingresaste una cadena de texto")
    : longitud === undefined
    ? console.warn("no ingresaste la cantidad para recortar")
    : console.info(texto.substring(0, longitud));

recortarTexto("eres algo muy importante para mi", 10);
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
/* (function (texto, separacion) {
  const NuevoArray = texto.split(separacion);
  console.log(NuevoArray);
})("que onda jhaelmon", " "); */

const cadenaAArray = (texto = "", separador = undefined) =>
  !texto
    ? console.warn("no ingresaste la cadena de texto")
    : separador === undefined
    ? console.warn("No ingresaste el separador")
    : console.info(texto.split(separador));

console.log(cadenaAArray("que oonda jhalemon", " "));

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/* const caja4 = document.getElementById("e4");
function ejercicio4(texto, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    caja4.innerHTML += `${texto}, `;
  }
}

ejercicio4("hola mundo", 5); */

const ejercicio4 = (texto = "", repetidor = undefined) => {
  if (!texto) console.warn("no ingresaste el texto");
  if (repetidor === undefined) console.warn("no ingresaste el repetidor");
  if (repetidor === 0) console.warn("el repetidor no puede ser 0");
  if (Math.sign(repetidor) === -1)
    console.warn(`el repetidor no puede ser negativo`);
  for (let i = 0; i < repetidor; i++) {
    console.info(texto, i + 1);
  }
};
ejercicio4("caty", 5);

//5) invierte la cadena de texto

const invertirCadena = (texto = "") =>
  !texto
    ? console.warn("no ingresaste un texto")
    : console.info(texto.split("").reverse().join(""));

invertirCadena("holaa mundo");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const palabraRepetida = (texto = "", repetidor = "") => {
  if (!texto) console.warn("No ingresaste el texto");
  if (!repetidor) console.warn("No ingresaste la palabra para buscar");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = texto.indexOf(repetidor, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`la palabra ${repetidor} se repite ${contador}`);
};

palabraRepetida("hola mundo mundo mundo mundo", "mundo");

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palabraPalindroma = (texto) => {
  if (!texto) console.warn("No ingresaste una palabra");

  texto = texto.toLowerCase();

  let palabraInvertida = texto.split("").reverse().join("");

  if (palabraInvertida === texto) {
    console.info(
      `Si es palíndromo palabra original ${texto} palabra al reves ${palabraInvertida}`
    );
  } else {
    console.info(
      `No es palíndromo palabra original ${texto} palabra al reves ${palabraInvertida}`
    );
  }
};
console.warn("Ejercicio 7");
palabraPalindroma("melisa");

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

console.warn("ejercicio 8");
const eliminarPalabra = (texto, patron) => {
  !texto
    ? console.warn("No ingreso el texto")
    : !patron
    ? console.warn("no ingreso el patron")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));
};

eliminarPalabra('"xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"', "z");

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
console.warn("ejercicio p");
const numAleatorios = () => console.info(Math.round(Math.random() * 100 + 500));
numAleatorios();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

console.warn("ejercicio numero 10");
const capicua = (numero = 0) => {
  if (!numero) return console.warn("no ingresaste el número");

  if (typeof numero !== Number)
    return console.warn("lo que ingresaste no es un número");
  numero = numero.toString();

  let numInvertido = numero.split("").reverse().join("");

  return numero === numInvertido
    ? console.info(`el numero ${parseInt(numero)} si es capícua`)
    : console.info(`el numero ${parseInt(numero)} no es capícua`);
};

capicua("88");
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

console.warn("ejercicio 11");

const factorial = (num = undefined) => {
  if (!num) return console.error("No ingresaste un número");
  if (typeof num !== "number")
    return console.error(`El dato "${num}"  no es un número`);

  if (num === 0) return console.error(`No puedes ingresar un número 0`);

  let factorial = 1;
  for (let i = num; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`el factoria de ${num} es: ${factorial}`);
};
factorial();
factorial("hola");

factorial(20);

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

console.warn("Ejercicio 12");

const numPrimo = (numero = undefined) => {
  if (!numero) return console.error("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error(`El dato "${numero}"  no es un número`);

  if (numero === 0) return console.error(`No puedes ingresar un número 0`);
  if (numero === 1) return console.error(`No puedes ingresar un número 1`);
  if (Math.sign(numero) === -1)
    return console.error("No puedes ingresar números negativos");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.info(`El número ${numero} NO es primo`)
    : console.info(`El número ${numero} Si es primo`);
};
numPrimo("200");
numPrimo();
numPrimo(-1);

numPrimo(19);
//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

console.warn("ejericio 13");

const parImpar = (numero) => {
  if (!numero) return console.error("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error(`El dato "${numero}"  no es un número`);

  if (numero % 0) {
    return console.info(`el número ${numero} es par`);
  } else {
    return console.info(`el número ${numero} es impar`);
  }
};

parImpar(15);
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

console.warn("ejercicio 15");

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.error("No se ingresó los grados a convertir");
  if (!unidad) return console.error("No la unidad de conversión.");

  if (typeof grados !== "number")
    return console.error(`El dato "${grados}"  no es un número`);
  if (typeof unidad !== "string")
    return console.error(`El dato "${unidad}"  no es una cadena de texto`);

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor no reconocido");

  if (unidad === "C") {
    return console.info(`${grados}C = ${Math.round((grados * 9) / 5 + 32)}F`);
  } else if (unidad === "F") {
    return console.info(`${grados}F = ${Math.round((grados - 32) * (5 / 9))}C`);
  }
};

convertirGrados(100, "F");
