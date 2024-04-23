//Math
/*
let numero = Math.floor(Math.random()*20);

console.log(numero)
console.log(numero)
console.log(numero)
console.log(numero)
console.log(numero)
console.log(numero)*/

//funcion de math

function rdnumero(limite){
    return Math.floor(Math.random() * limite); //aqui le estamos pidiendo que en lugar de poner un numero fijo podemos 
    //seleccionar cual es el numero o el limite de entre el 0 al numeor aqui es 0-9 nunca dara 0 o 9
}


console.log(rdnumero(9))
console.log(rdnumero(9))
console.log(rdnumero(9))
console.log(rdnumero(9))
console.log(rdnumero(9))
console.log(rdnumero(9))
//

//funcion de math con numeros enterons entre un limite inferior y supeior
function rdnumero(limiteS,limiteI){
    return Math.floor(Math.random() * (limiteS - limiteI + 1)+limiteI);
     
}


console.log(rdnumero(1,9))
console.log(rdnumero(1,9))
console.log(rdnumero(1,9))
console.log(rdnumero(1,9))
console.log(rdnumero(1,9))

//funcion parseInt() convertir String en enteros (numeros)
///parseInt () significa convertir a entero recordar

console.log(parseInt("323"));
console.log(parseInt("6.3")); //
console.log(parseInt(5.4));//tambien funciona convirtiendo numeros decimales a entero pero ojo no es como floor sino que elimina de forma directa el numero decimal dejando solo el numeor entero por ejemplo 4.7 es 5 por apoximacion aqui con parseInt es 4

//funcion parseInt() con base

console.log(parseInt("110101", 2))//base binaria '2'
console.log(parseInt("EA02", 16))//base exadecimal 16

//operador condicional o operador ternario

function minimon(x,y){
    console.log(x < y ? x: y);//aqui lo que hisimos es que simplemente simplificamos la condicionales que seria normalmente hasi en una linia :
    /**
     if(X<y){
         return x
     }else {
         return y
     }
     */
 }
 
 minimon(2,4)
 minimon(3,4)
 minimon(4,4)
 minimon(6,9)
///la estructura del operador terceario es hasi primero la condicion luego el ? que es el simbolo que lo identifica luego lo que se realiza si es verdader y de los : puntos sale lo que aparece si no es verdaera 
///multiples condicionales terceario 

/*function condicionales (a,b){
    if (a == b){
        return "A y B son Iguales"
    }else if (a > b){
        return "A es Mayor que B"
    } else {
        return "B es Mayor que A"
    }
}*/
//ahora tranformalo en condicionales terciarios .

function condicionales (a,b){
    return a == b ? "A y B son Iguales" 
    : a > b ? "A es Mayor que B" : "B es Mayor que A"
}

console.log(condicionales(5,5))

//var vs let

/**
 * en Js el uso de var y let es casi igual pero tiene diferencias inportantes como este
 
 var campista = "Nico"
 var campista = "Tico"

 con var se puede volver a declarar una misma variable varias veces claro en casos normales el valor se remplazara por el ultimo declarado

 let campista = "nico"
 let campista = "Hugo"

con let esto no esta permitido nos dara un error de sintasis se puede  decir que es mas riguroso

let campista = "nico"
campista = "Donal"

este si se permite mientras no se repita let pero remplazamos el valor de la variable.
 */


//var primera obcion para declarar una variable la menos restringida puede usarse de forma goblar o local en todas pero generalmente solo global

//let es algo mas restringida  que var se puede usar cuando quieres hacer que la variable sea solo de un bloque de codigo por ejemplo ciclos o funciones .

//const  es constante una variable que nunca cambiara durante el programa es inportante en muchos programas que no quieres que algo sea cambiado es solo de lectura Read Only .
///congolar objetos

let objeto = {
    "Nombre": "Diego",
    "Raza" : "Pigbull",
    "Edad" : "6"
}

Object.freeze(objeto)
//hasi es cuando hay mas de una linia se dejan las {}

let operacion = (a,b) => {
    let num = 6
    return a +b + num
}
console.log(operacion(2,2))
//
//operador rest permite escribir fucniones mas versatiles dando mas libertad cuando se forma argumentos.

function rest(...arg){ // aqui usamos los puntos ... para activar la funcion rest en esto todos los argumentos que pasemos a la funcion seran convertidos a un arreglo
    console.log(arg)
   }
   
   rest(2,3,4,5,)
   rest([2,2,4,3],[1212,3,23,23])// SI USAMOS ARREGLOS NOS QUEDA COMO ARREGLOS ANIDADOS
   rest(2,3,'B','A',)

   //
   const sumar = (...arg) => {
    return arg.reduce((a, b) => a + b, 0);// reduce() con este termino suma los elemntos del arreglo y retorna el resultado
    console.log(sumar)
  }
  
  sumar(2,4,56);

  //
  //operador scren se usa para desconponer arreglos y usar los elementos individualmente

const arg = [2,4,62]

function suma (x,y,z){
  return x + y +z
}

console.log (suma(...arg))

//

//sintazis de desestructuracion 

var usuario = {
    nombre : "Gino",
    edad : 23
  }
  
  const {nombre,edad} = usuario;
  //esta es la estructura mas sensilla de destructuracion
  
  var cordenadas = {
    x: 2,
    y: 4,
    z: 3
  }
  
  const {x,y,z} = cordenadas;
  
  console.log(x)
  console.log(y)
  console.log(z)

//sintazis de desestructuracion de objetios anidados
/*
var usuario = {
    Gino :{
    nombre : "Gino",
    edad : 23},

  }
  
  const {Gino:{nombre,edad}} = usuario;
  ///  const {Gino:{nombre: n,edad: e}} = usuario; si asemos esto le estamos danto nuevo nombre a la propiedad

  console.log(nombre)*/

  const pronostico = {
    "ayer" :{
      maxima: 61,
      minima : 70
    },
    "hoy" :{
      maxima: 71,
      minima : 80
    },
    "Siguente" :{
      maxima: 66,
      minima : 76
    }
  }
  
  const {hoy :{maxima,minima},ayer :{maxima:a,minima:m}} = pronostico;
  //si vas a destructurar en una misma linia tendras que cambiar el nombre de la propiedad este es objeto anidados
  console.log(minima)

  //sintesis de destructuracion arreglos
var a;
var b;
var c;

[a,b,,,c] = [2,3,1,6,87,45,3]//aqui podemos como destructurar un arreglo ademas de eso podemos darle la posicion que  queramos a las propiedades usando las como como ,,, aqui nos dice que saltemos dos posiciones es como dejar dos espacio en blanco arriba se ve que la posicion c es 87
console.log(a)
console.log(b)
console.log(c)
//intercanbio de valores
var aa = 6;
var bb = 9;

[bb,aa] = [aa,bb]

console.log(aa,bb)
//sintesis de destructuracion arreglos
var I;
var II;
var arr;

[I,II,...arr] = [2,3,1,6,87,45,3]// todo es anandido al final a un arreglo el resto que no nombramos
console.log(I)
console.log(II)
console.log(arr)

/*
///eliminar elementyos de un arr con destructuriacion

var arr = [1,2,3,4,5,6,7,8,9];

function removearr(arrg){
  const [,,,...narr] = arrg;
  return narr
}

const arrgf = removearr(arr);
console.log(arrgf)*/

//plantillas literales

/*
Carapteristicas
--se usa el acento invertido(`) en lugar de comillas
---pueden contener comillas simples o dobles
---las linias se presentan como se escribe el codigo
--para remplazar una variable se escribe somo 
`${varibale}`
--dentro de ${} se puede escribr expresiones */\


///crear objeto con funcion flecha

var miob = (nombre,edad,id) => ({nombre,edad,id})

console.log(miob("Gino",23,321333))

