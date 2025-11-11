const productName = "laptop";
const price = 899;
const brand = "techCode";

function getProductInfo (){
    const productName = "Smartphone";
    const price = 499;
    return `${productName} costs ${price} and is of brand ${brand}`
}
console.log (getProductInfo)



let userPoints = 80;

function evaluePoints (){
    if (userPoints < 100){
        console.log("Below average");
    }
    else {
        console.log("Above average");
    }
}
console.log(evaluePoints());



const globalVariable = "global1";

function local1 (){
    console.log(globalVariable); //Accede correctamente a "global1"
console.log(localVariable); //Error: localVariable no esta definida

function local2 () {
    const carrot = ":)";
console.log(`local2: ${carrot}`);
}

function local3 (){
    console.log(local3Variable); //Error aca tambien
}
local2();
local3();
}
console.log(local1());