//Código del cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado *4;
}
//console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm2");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es : " + areaCuadrado + "cm2");
console.groupEnd();

//Código del triángulo
/*console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm, "
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " +alturaTriangulo + "cm");
*/

function perimetroTriangulo(lado, lado2, base) {
    return lado + lado2 + base;
}
//console.log("El perímetro del triángulo es : " + perimetroTriangulo + "cm2");

function areaTriangulo(base,altura) {
    return (base * altura) /2;
}
//JavaScript ejecuta primero lo que esta entre paréntesis
//console.log("El área del triángulo es : " + areaTriangulo + "cm2");

console.groupEnd();

//Código del Círculo
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es : " + radioCirculo + "cm2");


//Diámetro
//const diametroCirculo = radioCirculo *2;
//console.log("El diámetro del círculo es : " + diametroCirculo + "cm2");
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("El PI es : " + PI);

//Circunferencia
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es : " + perimetroCirculo + "cm2");

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
//const areaCirculo = (radioCirculo * radioCirculo) *PI;
//console.log("El área del círculo es : " + areaCirculo + "cm2");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//Interacción con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}