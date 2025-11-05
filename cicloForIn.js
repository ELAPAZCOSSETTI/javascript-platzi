
// for in ---> objetos 

// propiedades = valor

// array, string

// item

// Iteracion sobre el objeto y sus propiedades

// for (varible in objeto) {
//   cÃ³digo
// }



const listaDeCompras = {
    manzana: 5,
    banana: 4,
    naranja: 6,
    toronjas: 1,
    cerezas: 9,
};

for (fruta in listaDeCompras){
    console.log(fruta)
}

for (fruta in listaDeCompras){
    console.log (`${fruta} : ${listaDeCompras [fruta]}`)
}

for (fruta in listaDeCompras){
    console.log(fruta)
}
