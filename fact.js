document.write("<h1>NUMERO FACTORIAL</h1>")


let facto = 20;
let m = 1;
for (let i = 1; i <= facto; i++) {
    m *= i;
}

let n = Math.sqrt(2 * Math.PI * facto) * ((facto / Math.E) ** facto);

if (n === m) {
    console.log("La fórmula para calcular el factorial es correcta");
} else {
    console.log("La fórmula para calcular el factorial no es correcta");
}
