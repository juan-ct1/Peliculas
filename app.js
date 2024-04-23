//paginas y botones

let pagina = 1;
const btnAnterior =  document.getElementById('btnAnterior');
const btnSiguiente =  document.getElementById('btnSiguiente');
///pagina siguiente
btnSiguiente.addEventListener('click', () =>{
    if(pagina < 1000){
        pagina += 1; //aumenta el indice de la pagina
    cargarPeliculas();
    }
})
/// regresar pagina
btnAnterior.addEventListener('click', () =>{
    if(pagina > 1){
        pagina -= 1; //regresa 
    cargarPeliculas();
    }
})

//primero la funcion de cargar peliculas
const cargarPeliculas = async() =>{
    //usamos fecth para poner la url de la peticion de  la api
    try{
     const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a300aeca79f47bbbf8c5eb44d65756f3&Language=es-MX&page=${pagina}`)
    console.log(respuesta)
    /**aqui lo que hacemos es pedir una respuesta del servido esto no es instantaneo 
     * por lo que usamos await para que solo se carge la siguiente linias o bloques de codigo despues de que 
     * resivamos la respuesta para que sea await debe ser async que es asincrona no lo olvides
     * en este caso nos devuelve el objeto
     * como es una funcion asincrona es inportante usar el try y catch 
     */   
    //haremos un comprobante para la obtencion de datos
    if(respuesta.status === 200){
    const datos = await respuesta.json();

    //aqui estamos obteniendo los datos de las peliculas y usandolos en la pagina html
    let peliculas = '';
    datos.results.forEach(pelicula => {
       peliculas +=  `
       <div class= "pelicula">
          <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
          "
       </div>
          <h4 class="titulo">${pelicula.title}</h4>
       `; // no olvides no es comilla sino  ` esta.
       ///tube un problema con los poster debido a que me falto una comilla dentro de src ojo con estos detalles
       document.getElementById('contenedor').innerHTML = peliculas;
    });
/** aqui tenemos los datos de las peliculas como los poster imagenes nombre informacion todo como una respuesta json y estamos guardando la respues
 * en un constante.
    */} else if(respuesta.status === 401){
        console.log("la llave de la Api esta mal puesta")
    }else if(respuesta.status === 404){
        console.log("La Pelicula que buscas no existe en la pagina")
    }else{
        console.log("Tenemos un Error desconocido")
    }
    }catch(error){
        console.log(error)
    }
    
}

cargarPeliculas();