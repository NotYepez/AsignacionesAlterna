//Ejercicio 1: Introducir un numero por teclado, si es par multiplicarlo por 2, si es impar dividirlo entre 2. Valor: 10pts

/*

let valor = prompt("Submit a Number");

let sumaPar = function (numberValue) {
  //Primero hace la primera comparacion, si es impar pues la consola imprime el resultado de numberValue / 2
  if (numberValue % 2 === 1) {
    console.log(numberValue / 2);
    //Luego hace la segunda comparacion, si es par la consola imprime el resultado de numberValue * 2
  } else if (numberValue % 2 === 0) {
    console.log(numberValue * 2);
    //Si ninguna de las condiciones se cumple pues no es un numero, cabe destacar que esta funcion no funciona con numeros decimales, pero se podria modificar un poco para que funcione.
  } else console.log("Not a number");
};

sumaPar(valor);

*/
//-------------------------------------------------------------------------------
/*

Tarea 2: Determinar si un año es bisiesto. Valor 100pts

Un año bisiesto es un año que tiene un día adicional, el 29 de febrero, para mantener nuestros calendarios en línea con el tiempo astronómico. 

Realizar un programa que determine si un año es bisiesto o no, de acuerdo a los siguientes criterios:
Si el año es divisible por 4, entonces es un año bisiesto, excepto:Si el año es divisible por 100, entonces no es un año bisiesto, a menos que:El año también sea divisible por 400, en cuyo caso sí es un año bisiesto.

Si un año es divisible por 4 pero no por 100, es bisiesto. Si un año es divisible por 100 pero también por 400, es bisiesto. En todos los demás casos, el año no es bisiesto.

Por ejemplo:
El año 2000 fue bisiesto porque es divisible entre 4, 100 y 400.
El año 1900 no fue bisiesto porque, aunque es divisible entre 4 y 100, no es divisible entre 400.
El año 2020 fue bisiesto porque es divisible entre 4 pero no entre 100.
Nota: Para identificar si un número es divisible por otro, se utiliza el operador de módulo (%).

*/

/*
let year = 1822;
//Esta es una funcion que nos dice si un año es bisiesto o no. Funciona tomando dos comparaciones utilizando el operador logico && (and) y luego comparando el boolean de esas dos comparaciones y comparandolas entre si con el operador || (or)
// V || V = V
// V || F = V
// F || F = F
// V && V = V
// V && F = F
// F && F = F
const isLeapYear = function (yearInput) {
  if (
    //si el año es divisible entre 4 y el año no es divisible entre 100
    (yearInput % 4 === 0 && yearInput % 100 !== 0) ||
    //si el año es divisible entre 400
    yearInput % 400 === 0
  ) {
    console.log("Is leap Year");
  } else console.log("Is not Leap Year");
};

console.log(isLeapYear(year));
//si (el año es divisible entre 4 y no es divisible entre 100) o (el año es divisible entre 4 y el año es divisible entre 100)

*/

//-------------------------------------------------------------------------------

/*
Realizar un programa en TypeScript que convierta de Decimal a Romano.

Ejemplo:

Input: 1945
Output: "El numero en romano es MCMXLV"
*/

/*
const decToRom = function (input) {
  let roman = "";
  while (input >= 1000) {
    roman += "M";
    input -= 1000;
  }
  while (input >= 900) {
    roman += "CM";
    input -= 900;
  }
  while (input >= 500) {
    roman += "D";
    input -= 500;
  }
  while (input >= 400) {
    roman += "CD";
    input -= 400;
  }
  while (input >= 100) {
    roman += "C";
    input -= 100;
  }
  while (input >= 90) {
    roman += "LC";
    input -= "90";
  }
  while (input >= 50) {
    roman += "L";
    input -= 50;
  }
  while (input >= 40) {
    roman += "XL";
    input -= 40;
  }
  while (input >= 10) {
    roman += "X";
    input -= 10;
  }
  while (input >= 9) {
    roman += "IX";
    input -= 9;
  }
  while (input >= 5) {
    roman += "V";
    input -= 5;
  }
  while (input >= 4) {
    roman += "IV";
    input -= 4;
  }
  while (input >= 1) {
    roman += "I";
    input -= 1;
  }
  return roman;
};

console.log(decToRom(1945));
*/

//-------------------------------------------------------------------------------
/*
Escriba un programa que reciba un número entre 0  y 100 e imprima en la consola el equivalente en letras de esa calificación.

La escala que utilizamos es la siguiente:

> 90 -> A
80-89 -> B
70-79 -> C
60-69 -> D
< 60 -> F

Ejemplo: 

Si la calificación es un 95, el programa debe imprimir "La calificación en letras es una A"
Si la calificación es un 75, el programa debe imprimir "La calificación en letras es una C"
Si la calificación es un 50, el programa debe imprimir "La calificación en letras es una F"


El entregable es el código en TypeScript del programa en un documento.
El desarrollo de este programa debe hacerse de forma individual.
Clasificacion 100pts
*/
/*
//Declaracion de funcion:
const clasificacion = function (num: number) {
  //Logica del programa: si el numero es mayor a 100, retornara 'Numero necesita ser menor a 100', luego se evalua cada uno de los valores y retorna la letra asignada segun el valor
  if (num > 100) {
    return "Number needs to be below 100";
  } else if (num <= 100 && num >= 90) {
    return "A";
  } else if (num <= 89 && num >= 80) {
    return "B";
  } else if (num <= 79 && num >= 70) {
    return "C";
  } else if (num <= 69 && num >= 60) {
    return "D";
  } else return "F";
};

console.log(clasificacion(50));
*/

//-------------------------------------------------------------------------------

//Ejercicio de 30 days of Javascript con maicol

/*
let base = 1;
const hashtag = ["#", "##", "###", "####", "#####", "######", "#######"];
while (base <= 7) {
  console.log(hashtag[base - 1]);
  base++;
}

*/

//-------------------------------------------------------------------------------

/*
Crear una función que reciba dos Coordenadas como parámetros y retorne el valor de la pendiente de la recta que pasa por los dos puntos. VALOR: 100pts

Una Coordenada es un tipo de datos que representa un punto en un plano, y tiene dos atributos:
1. x - number
2. y - number

La pendiente m de una recta está dada por la siguiente fórmula:

m = (y2−y1)/(x2−x1)


Ejemplo:

Para los puntos (2, 6) y (5, 1), si se llama la función de la siguiente manera: 

const m = pendiente({x: 2, y: 6}, {x: 5, y: 1})

El valor de m debe ser igual a − 1.667
*/

/*
const recta = function ([X1, Y1], [X2, Y2]) {
  return (Y2 - Y1) / (X2 - X1);
};

console.log(recta([2, 6], [5, 1]));
*/

//-------------------------------------------------------------------------------

/*
Realizar una función que reciba como parámetro un string y devuelva ese string en Title Case.

Title Case es un estilo de capitalización que tiene la primera letra de cada palabra en mayúscula y el resto de las letras en minúsculas.

Ejemplos:

Entrada: "yo quiero taco bell"
Salida: "Yo Quiero Taco Bell"

Entrada: "alTErNa AcaDEMy eS lo MEJOR"
Salida: "Alterna Academy Es Lo Mejor"

Nota:
Puede ayudarles verificar el funcionamiento de las funciones toLowerCase y split de los strings en JavaScript/TypeScript.
*/
/*
const titleCase = function (param) {
  let paramArr = param.split("");
  let titleCArray = [];
  for (let i = 0; i < paramArr.length; i++) {
    if (paramArr.indexOf(paramArr[i]) % 2 === 0) {
      titleCArray.push(paramArr[i].toLowerCase());
    } else titleCArray.push(paramArr[i].toUpperCase());
  }
  return titleCArray.join("");
};

console.log(titleCase("Jamoneta"));
*/

//Intento Fallido no.1
/*
const prueba = "yo quiero taco bell";

const toUpp = function (input) {
  const inputArr = input.split("");
  const toUppArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr.indexOf(inputArr[i]) === 0) {
      toUppArr.push(inputArr[i].toUpperCase());
    } else if (inputArr[i] === " ") {
      toUppArr.push(" ");
      toUppArr.push(inputArr[1 + i].toUpperCase());
    } else toUppArr.push(inputArr[i + 1]);
  }
  return toUppArr.join("");
};

console.log(toUpp("jamon con queso"));

*/

//-------------------------------------------------------------------------------

/*
Realizar una función que reciba como parámetro un string y devuelva ese string en Title Case.

Title Case es un estilo de capitalización que tiene la primera letra de cada palabra en mayúscula y el resto de las letras en minúsculas.

Ejemplos:

Entrada: "yo quiero taco bell"
Salida: "Yo Quiero Taco Bell"

Entrada: "alTErNa AcaDEMy eS lo MEJOR"
Salida: "Alterna Academy Es Lo Mejor"

Nota:
Puede ayudarles verificar el funcionamiento de las funciones toLowerCase y split de los strings en JavaScript/TypeScript.

*/

/*

//Primera Solucion:

const toTitleCase1 = function (str) {
  // 1. Se almacena en la variable strArr el Array con el string divido por espacios y convertido en minuscula: jamon de queso => [jamon, de, queso].
  let strArr = str.toLowerCase().split(" ");
  // 2. En esta variable se almacena el resultado final del for loop en un array.
  let newStr = [];
  // 3. el for loop itera en cada elemento del array reemplazando la primera letra por la misma letra en Mayuscula y luego agregandola al array de la variable newStr
  for (let i = 0; i < strArr.length; i++) {
    newStr.push(strArr[i].replace(strArr[i][0], strArr[i][0].toUpperCase()));
  }
  // 4. La funcion retorna el array guardada en la variable newStr y la convierte en un string con .join
  return newStr.join(" ");
};

console.log(toTitleCase1("jAmoN dE quEsO"));
// El console log seria = Jamon De Queso


// Segunda Solucion utilizando el metodo map:

const string = "";
const toTitleCase2 = function (string) {
  // 1. Creamos una variable en donde se almacenara el resultado final.
  // 2.le asignamos como valor el parametro de la funcion y utilizamos los siguientes metodos para obtener el resultado final
  const newstring = string
    .toLowerCase() //lo convierte todo en lowerCase: beBieNDO CervEzA! => bebiendo cerveza!
    .split(" ") //Lo convierte en un array: bebiendo cerveza => [bebiendo, cerveza]
    .map((param) => param.replace(param[0], param[0].toUpperCase()))
    //utilizamos el map function para reemplazar (.replace) la primera letra de cada string en la misma pero en mayuscula (.toUpperCase)
    // [bebiendo, cerveza] => [Bebiendo, Cerveza]
    .join(" "); //y por ultimo lo unimos (.join) con un espacio de por medio [Bebiendo, Cerveza] => Bebiendo Cerveza

  return newstring;
};

console.log(toTitleCase2("beBieNDO CervEzA!"));

*/

const libreria = {
  libros: 'juan sal gab', 'harry potter',
  revistas: 
}