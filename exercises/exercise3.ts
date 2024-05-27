/*
Ejercicio 3: Pensamiento lógico
Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].
*/

function* generateOdds(number: number) {
    for (let i = 1; i <= number; i += 2) {
        yield i;
    }
}

//usage:
//const generator = generateOdds(9);
//const odds = [...generator];
//console.log(odds);
