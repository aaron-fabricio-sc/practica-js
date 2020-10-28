//setTimeout

let temporisador = setTimeout(() => {
  console.log("soy un setTimeout");
}, 2000);
clearTimeout(temporisador);

// setInterval

let temporisadordos = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporisadordos);

//procesamiento SINGLE THREAD Y MULTI THREAD

// funcion sincrona bloqueante

(() => {
  console.log("inicio");

  function dos() {
    console.log("dos");
  }
  function uno() {
    console.log("uno");
    dos();
    console.log("tres");
  }
  uno();
  console.log("fin");
})();

//funcion asincrona no bloqueante
(() => {
  console.log("inicio");

  function dos() {
    setTimeout(() => {
      console.log("dos");
    }, 1000);
  }
  function uno() {
    setTimeout(() => {
      console.log("uno");
    }, 0);
    dos();
    console.log("tres");
  }
  uno();
  console.log("fin");
})();

//callbacks

/* function cuadradroCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradroCallback(0, (value, result) => {
  console.log("inicio");
  console.log(`Callback: ${value}, ${result}`);
  cuadradroCallback(2, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradroCallback(4, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradroCallback(6, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradroCallback(8, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
        });
      });
    });
  });
}); */

//Promesas

/* function cuadradroPromise(value) {
  return new Promise((resolve, reject) => {
    if (typeof value !== "number") {
      reject(`Error, el "${value}" no es un número`);
    }
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 2000));
  });
}

cuadradroPromise(5)
  .then((obj) => {
    console.log("respuesta");
    console.log(`el resultado es ${obj.result}`);
    return cuadradroPromise(8);
  })
  .then((obj) => {
    console.log("respuesta");
    console.log(`el resultado es ${obj.result}`);
    return cuadradroPromise(2);
  })
  .then((obj) => {
    console.log("respuesta");
    console.log(`el resultado es ${obj.result}`);
    return cuadradroPromise(6);
  })
  .then((obj) => {
    console.log("respuesta");
    console.log(`el resultado es ${obj.result}`);
    return cuadradroPromise("10");
  })
  .then((obj) => {
    console.log("respuesta");
    console.log(`el resultado es ${obj.result}`);
    return cuadradroPromise(78);
  })
  .then((obj) => {
    console.log("respuesta");
    console.log(`el resultado es ${obj.result}`);
  })
  .catch((error) => {
    console.warn(error);
  }); */

// funcion asincrona async await

function cuadradroPromise(value) {
  return new Promise((resolve, reject) => {
    if (typeof value !== "number") {
      reject(`Error, el "${value}" no es un número`);
    }
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 2000));
  });
}

async function functionAsincrona() {
  try {
    console.log("inicio");
    let obj = await cuadradroPromise(5);
    console.log(`Async: el resultado es ${obj.result}`);
    obj = await cuadradroPromise(8);
    console.log(`Async: el resultado es ${obj.result}`);
    obj = await cuadradroPromise(99);
    console.log(`Async: el resultado es ${obj.result}`);
    obj = await cuadradroPromise(50);
    console.log(`Async: el resultado es ${obj.result}`);
    obj = await cuadradroPromise(11);
    console.log(`Async: el resultado es ${obj.result}`);
    obj = await cuadradroPromise(8);
    console.log(`Async: el resultado es ${obj.result}`);
    console.log("final");
  } catch (error) {
    console.warn(error);
  }
}

functionAsincrona();
