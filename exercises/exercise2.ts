/*
Ejercicio 2: Nomenclatura
Te presentamos el siguiente fragmento de código:

function f(x, y, z) {
    let a = x + y;
    let b = a * z;
    let c = Math.sin(b);
    return c;
}

Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
su función.
*/

function calculateSinOfProductOfSum(firstNumber: number, secondNumber: number, thirdNumber: number) {
    let sumOfInputs = firstNumber + secondNumber;
    let product = sumOfInputs * thirdNumber;
    let sinOfProduct = Math.sin(product);
    return sinOfProduct;
}