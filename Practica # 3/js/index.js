let array1 = [];
let array2 = [];

// Insertar los números del primer y segundo array
for (let i = 1; i <= 100; i++) {
    array1.push(i);
}
for (let i = 101; i <= 200; i++) {
    array2.push(i);
}

//Calcular la media de ambos arrays
function calcularMedia(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

let mediaArray1 = calcularMedia(array1);
let mediaArray2 = calcularMedia(array2);

//Calcular la media conjunta de ambos arrays
let mediaTotal = (mediaArray1 + mediaArray2) / 2;

console.log("Media del primer array:", mediaArray1); // 50.5
console.log("Media del segundo array:", mediaArray2); // 150.5
console.log("Media conjunta de ambos arrays:", mediaTotal); // 100.5