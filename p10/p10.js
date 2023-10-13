function ordenamientoRapido(array){

    if(array.length <= 1){
        return array
    }

    let pivote = array[array.length -  1]

    let leftArray = []
    let rightArray = []
    let equalsArray = []

    for( const item of array){
        if(item < pivote){
            leftArray.push(item)
        }else if(item === pivote){
            equalsArray.push(item)
        }else{
            rightArray.push(item)
        }
    }

    const subLeftArray = ordenamientoRapido(leftArray)
    const subRigthArray = ordenamientoRapido(rightArray)

    return[
        ...subLeftArray,
        ...equalsArray,
        ...subRigthArray
    ]
}

const numeros = [-1,5,6,7,52,50,41,-100]
//console.log(ordenamientoRapido(numeros))

function metododeburbuja(array){
    let cambiado;

    do{
        cambiado = false

        for ( let i = 0; i < array.length; i++){
            if(array[i] > array [i + 1]){

                const temporal = array[i]
                array[i] = array[i + 1];
                array[i + 1] = temporal 

                cambiado = true
            }
        }
    }while(cambiado)

    return array;
}
//console.log(metododeburbuja(numeros))

function metodoSeleccion(array){

    for( let i = 0; i < array.length; i++){
        let smallestIndex = i

        for(let j = i + i; j < array.length; j++){
            
            if(array[j] < array[smallestIndex]){
                smallestIndex = j;
            }
        }

        if(array[i] !== i){
            const temporal = array[i];
            array[i] == array[smallestIndex]
            array[smallestIndex] = temporal
        }
    }
    return array;
}

console.log(metodoSeleccion(numeros))