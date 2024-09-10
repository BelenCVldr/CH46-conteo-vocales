console.log ("Conteo de Vocales");

/**
 Encuentra el número de letras que eixten en el
 nombre
 @letra {string} letra a buscar
 @nombre {string} nombre a buscar la letra
 return número de letras encontradas
*/
function encontrarNumeroDeLetra( letra, nombre ) {    
    let numeroDeLetras = 0;
    for(let index = 0; index < nombre.length; index++ ) {
        let letraAEvaluar = nombre.charAt( index );
        if( letraAEvaluar === letra){
            numeroDeLetras++;
        }
    }
    return numeroDeLetras;
}

function leerValorDenombre(){
    const inputNombre = document.getElementById("nombre");
    return inputNombre.value;
}

function manejoDelEventodeInputNombre(){
 const nombre = leerValorDenombre();
 console.log( nombre );    
}

//console.log(encontrarNumeroDeLetra("a", "estefany"));