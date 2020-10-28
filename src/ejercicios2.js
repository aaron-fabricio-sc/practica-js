//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

console.warn("ejercicio 15");

const decimalBinario = (numero = undefined, base = undefined) => {
  if (!numero) return console.error("No se ingresó los el número a convertir");
  if (!base) return console.error("No la base de conversión.");

  if (typeof base !== "number")
    return console.error(`El dato "${base}"  no es un número`);
  if (typeof numero !== "number")
    return console.error(`El dato "${numero}"  no es un número`);

  if (base === 2) {
    return console.info(
      `${numero} binario es igual a ${parseInt(numero, base)} en décimal`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} décimal es igual a ${numero.toString(2)} en binario`
    );
  } else {
    return console.error("La base que ingresaste no es valida");
  }
};

decimalBinario(4, 10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

console.warn("ejercicio 16");

const descuento = (cantidad = undefined, descuento = undefined) => {
  if (!cantidad) return console.error("No se ingresó la cantidad");
  if (!descuento) return console.error("No se ingreso el descuento");
  if (cantidad === 0) return console.error("La cantidad no puede ser 0");
  if (Math.sign(cantidad) === -1)
    return console.error("La cantidad no puede ser números negativos");
  if (Math.sign(descuento) === -1)
    return console.error("El descuento no puede ser números negativos");
  if (typeof cantidad !== "number")
    return console.error(`El dato "${cantidad}"  no es un número`);
  if (typeof descuento !== "number")
    return console.error(`El dato "${descuento}"  no es un número`);

  let porcentajeDescuento = descuento / 100;

  let totalPagar = cantidad - cantidad * porcentajeDescuento;
  console.info(`La cantidad a pagar es ${totalPagar}`);
};

descuento(1000, 20);
descuento("1000", 20);

descuento(20);
descuento(1000, "20");
descuento();

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

console.warn("ejericio 17");
const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.error("no ingresaste la fecha");
  if (!(fecha instanceof Date))
    return console.error("El valor que ingresaste no es una fecha");
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${Math.abs(aniosHumanos)} años desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en la fecha actual ${fecha.getFullYear()}`);
};

calcularAnios();
calcularAnios("hola");
calcularAnios(new Date());
calcularAnios(new Date(1997, 4, 11));
calcularAnios(new Date(2030, 4, 11));

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

console.warn("ejercicio 18");

const VocalesConsonantes = (texto = "") => {
  if (!texto) return console.error(`No ingresaste un texto`);
  if (typeof texto !== "string")
    return console.error(`Lo que ingresaste no es un texto`);

  let vocales = 0;
  let consonantes = 0;
  texto = texto.toLowerCase();

  for (let letra of texto) {
    if (/[aeiouáéíóúü]/.test(letra)) vocales++;
    if (/[qwrtypñlkjhgfdszxcvbnm]/.test(letra)) consonantes++;
  }

  return console.info({ texto, vocales, consonantes });
};

VocalesConsonantes();
VocalesConsonantes(3);
VocalesConsonantes("holHOLAAFGXB DFBGNBDVBVVFGVVNAAa");

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

console.warn("ejercicio 19");

const ValidarNombre = (nombre = "") => {
  if (!nombre) return console.error(`No ingresaste un nombre`);
  if (typeof nombre !== "string")
    return console.error(`Lo que ingresaste no es un texto`);

  let expReg = /^[A-Za-zÑñÁáÉéÍíóÓúÚüÜ\s]+$/g.test(nombre);

  return expReg
    ? console.info(`"${nombre}" es un nombre válido`)
    : console.info(`"${nombre}" no un nombre válido`);
};

ValidarNombre();
ValidarNombre(3);
ValidarNombre("Aaron Fabricio");

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
console.warn("ejercicio 20");

const ValidarEmail = (email = "") => {
  if (!email) return console.error(`No ingresaste un email`);
  if (typeof email !== "string")
    return console.error(`Lo que ingresaste no es un email`);

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
    email
  );

  return expReg
    ? console.warn(`"${email}" es un email válido`)
    : console.warn(`"${email}" no un email válido`);
};
ValidarEmail();
ValidarEmail(2);
ValidarEmail("asdjj@gmail");
ValidarEmail("asdjj@gmail.com");

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

console.warn("ejercicio 21");

const arrayElevado = (coleccion = undefined) => {
  if (coleccion === undefined)
    return console.error("No ingreso la lista datos");
  if (!(coleccion instanceof Array))
    return console.error("Lo que ingreso no es una lista de números");

  if (coleccion.length === 0) return console.error("La lista esta vacia");

  for (let num of coleccion) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} no es un número`);
    }
  }

  const lista = coleccion.map((el) => el * el);
  return console.info(
    `El array original ${coleccion} array elevado al cuadrado = ${lista}`
  );
};

arrayElevado([2, 4, 6]);
arrayElevado();
arrayElevado(true);
arrayElevado([]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

console.warn("ejercicio 22");
const numMayor = (coleccion = undefined) => {
  if (coleccion === undefined) return console.warn("No ingreso la lista datos");
  if (!(coleccion instanceof Array))
    return console.warn("Lo que ingreso no es una lista de números");

  if (coleccion.length === 0) return console.warn("La lista esta vacia");

  for (let num of coleccion) {
    if (typeof num !== "number") {
      return console.warn(`El valor ${num} no es un número`);
    }
  }

  console.info(
    `Array original ${coleccion} \n el númmero mayor es :${Math.max(
      ...coleccion
    )} \n el valor menor es ${Math.min(...coleccion)}`
  );
};
numMayor();
numMayor(true);
numMayor(["d"], 223, false);

numMayor([2, 5, 8, 6, 60, 99999, -55]);
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

console.warn("ejericio 23");

const separarNumeros = (coleccion = undefined) => {
  if (coleccion === undefined)
    return console.error("No ingreso la lista datos");
  if (!(coleccion instanceof Array))
    return console.error("Lo que ingreso no es una lista de números");

  if (coleccion.length === 0) return console.error("La lista esta vacia");

  for (let num of coleccion) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} no es un número`);
    }
  }

  console.info({
    pares: coleccion.filter((num) => num % 2 === 0),
    impares: coleccion.filter((num) => num % 2 === 1),
  });
};

separarNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

console.warn("Ejercicio 24");

const ordenarArreglo = (coleccion = undefined) => {
  if (coleccion === undefined)
    return console.error("No ingreso la lista datos");
  if (!(coleccion instanceof Array))
    return console.error("Lo que ingreso no es una lista de números");

  if (coleccion.length === 0) return console.error("La lista esta vacia");

  for (let num of coleccion) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} no es un número`);
    }
  }

  return console.info({
    coleccion,
    asc: coleccion.map((num) => num).sort(),
    desc: coleccion
      .map((num) => num)
      .sort()
      .reverse(),
  });
};

ordenarArreglo([5, 2, 6, 3, 7]);
ordenarArreglo();
ordenarArreglo([5, 2, "holaaa", 3, 7]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

console.warn("ejericio 25");

const eliminarDuplicados = (coleccion = undefined) => {
  if (coleccion === undefined)
    return console.error("No ingreso la lista datos");
  if (!(coleccion instanceof Array))
    return console.error("Lo que ingreso no es una lista de números");

  if (coleccion.length === 0) return console.error("La lista esta vacia");
  if (coleccion.length === 1)
    return console.error("La lista tiene que ser mas de un valor");

  console.info({
    original: coleccion,
    sinDuplicar: [...new Set(coleccion)],
  });
};

eliminarDuplicados([5, 2, "holaaa", 3, 7, 7, 5, 2, 5, 6, 2, 1, false, false]);
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

console.warn("ejercicio 26");

const promedio = (coleccion = undefined) => {
  if (coleccion === undefined)
    return console.error("No ingreso la lista datos");
  if (!(coleccion instanceof Array))
    return console.error("Lo que ingreso no es una lista de números");

  if (coleccion.length === 0) return console.error("La lista esta vacia");

  for (let num of coleccion) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} no es un número`);
    }
  }

  return console.info(
    coleccion.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es : ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

promedio([9, 5, 7, 1, 6, 2, 4, 9, 7]);
