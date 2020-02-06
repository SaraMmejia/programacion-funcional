
//const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

// utilizar el método reduce para sumar todos los elementos
// 21


function earray(arr){
    let dup = arr.map(a => a*2)
    let eve n= arr.filter ( e => e %2 ===0 )
    let sum = arr.reduce ( ( acc , s ) => acc + s)
    return dup +"\n"+ even +"\n"+ sum
}

console.log(earray([1, 2, 3, 4, 5, 6]))