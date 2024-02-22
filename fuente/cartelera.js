/* A esto voy:

                <article class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w3/12 rounded border border-red-500">
                    <img src="https://moviestack.onrender.com/static/y5szbv8zju.jpg" alt="">
                    <h2>The Nun II</h2>
                    <h3>Horror- Mystery</h3>
                    <p>In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.</p>
                </article>

*/

function crearPelicula( pelicula ){
    return `

    <article class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded border border-red-500">
        <img src="${pelicula.image}" alt="">
        <h2 class=" text-center">${pelicula.title}</h2>
        <h3 class=" flex flex-col gap-3 gap-3">${pelicula.genres}</h3>
        <p class=" flex flex-col gap-3 gap-3">${pelicula.overview}</p>
    </article>
    
    `

}

/*
document.getElementById( "main" ).innerHTML += crearPelicula(peliculas[0])
document.getElementById( "main" ).innerHTML += crearPelicula(peliculas[1])
document.getElementById( "main" ).innerHTML += crearPelicula(peliculas[2])
document.getElementById( "main" ).innerHTML += crearPelicula(peliculas[3])
*/ //ESTO QUEDO PIOLA



function crearCartelera( listaPeliculas, ubicacion){

    let base = ""
    for( const pelicula of listaPeliculas){
        base += crearPelicula(pelicula)

    }

    ubicacion.innerHTML += base

}

crearCartelera( peliculas, document.getElementById( "main" ))