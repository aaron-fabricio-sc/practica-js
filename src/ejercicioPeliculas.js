/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class Pelicula {
  constructor({ id, titulo, director, anio, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarAñoEstreno(anio);
    this.validarPaises(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get ListaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film",
      "Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.ListaGeneros.join(" , ")}`
    );
  }

  fichaTecnica() {
    console.info(
      `Ficha técnica\nTítulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño: "${this.anio}"\nPaís: "${this.pais.join(
        ", "
      )}"\nGéneros: "${this.generos.join(", ")}\n"Califiacion: "${
        this.calificacion
      }"\nId: "${this.id}"`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.error(`El campo ${propiedad} esta vacio `);
    if (typeof valor !== "string")
      return console.error(
        `El valor ${propiedad} ${valor} no es una cadena de texto`
      );
    return true;
  }
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `la propiedad "${propiedad}": ${valor} excede el limite de catacteres permitidos "${longitud}"`
      );
  }
  validarNumero(propiedad, valor) {
    if (!valor) return console.error(`El campo ${propiedad} esta vacio `);
    if (typeof valor !== "number")
      return console.error(`El valor ${propiedad} ${valor} no es un Número`);
    return true;
  }

  validarArreglo(propiedad, valor) {
    if (valor === undefined) return console.error("No ingreso la lista datos");
    if (!(valor instanceof Array))
      return console.error("Lo que ingreso no es una lista de Paises");

    if (valor.length === 0)
      return console.error("La lista de paises esta vacia");

    for (let pais of valor) {
      if (typeof pais !== "string") {
        return console.error(
          `El valor ${pais} no es un texto en el campo ${propiedad}`
        );
      }
    }
    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras y 7 números`
        );
      }
    }
  }
  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }
  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarAñoEstreno(anio) {
    if (this.validarNumero("Año de estreno", anio)) {
      if (!/^([0-9]){4}$/.test(anio)) {
        return console.error(
          `El año de estreno "${anio}" no es válido, debe tener 4 números.`
        );
      }
    }
  }

  validarPaises(pais) {
    if (this.validarArreglo("Lista de paises", pais)) {
    }
  }
  validarGeneros(generos) {
    if (this.validarArreglo("Lista de gereros", generos)) {
      for (let genero of generos) {
        if (!Pelicula.ListaGeneros.includes(genero)) {
          console.error(`genero incorrecto: ${generos.join(", ")}`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.error(`La calificación tiene que ser de 0 a 10`)
        : (this.calificacion = calificacion.toFixed(1));
    }
  }
}

/* const peli = new Pelicula({
  id: "gg7811558",
  titulo: "rocky",
  director: "Silverter Stallone",
  anio: 2520,
  pais: ["bolivia", "peru"],
  generos: ["Sport", "Talk-Show", "Thriller", "War", "Western"],
  calificacion: 9.55555,
});

peli.fichaTecnica(); */

const misPelis = [
  {
    id: "gg7811558",
    titulo: "rocky",
    director: "Silverter Stallone",
    anio: 2520,
    pais: ["bolivia", "peru"],
    generos: ["Sport", "Talk-Show", "Thriller", "War", "Western"],
    calificacion: 9.55555,
  },
  {
    id: "gg7811558",
    titulo: "rokooocky",
    director: "Silverter Stallone",
    anio: 2520,
    pais: ["bolivia", "peru"],
    generos: ["Sport", "Talk-Show", "Thriller", "War", "Western"],
    calificacion: 9.55555,
  },
  {
    id: "gg7811558",
    titulo: "rockkkky",
    director: "Silverter Stallone",
    anio: 2520,
    pais: ["bolivia", "peru"],
    generos: ["Sport", "Talk-Show", "Thriller", "War", "Western"],
    calificacion: 9.55555,
  },
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
