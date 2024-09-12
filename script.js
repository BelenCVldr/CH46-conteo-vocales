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

function imprimirResultado( resultado ){
    const paragraph = document.getElementById("vocales");
    paragraph.innerHTML = resultado;

}

function manejoDelEventodeInputNombre(){
 const nombre = leerValorDenombre().toLowerCase();
 const numLetraA = encontrarNumeroDeLetra("a", nombre);
 imprimirResultado("Num letras A: " + numLetraA);
}
