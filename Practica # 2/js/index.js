/*let frutas = ["Banana","Manzana","Pera"]

console.log(frutas[2])

for(let fruta of frutas){
    console.log(fruta);
}

frutas.push("Piña")
frutas.pop()
frutas.unshift("Melocoton")
frutas.reverse()
console.log(frutas.includes("Melocoton"))
frutas.forEach( i => console.log(i))

let num=[]
let otrosNum=[]

let af=[]

for(let i=1; i<=100; i++){
    let men=`El valor es: ${i}`
    num.push(men)
}

for(let i=101; i<=200; i++){
    let men=`El valor es: ${i}`
    otrosNum.push(men)
}

af=[...num, ...otrosNum]

af.forEach((i)=>{
    console.log(i)
})*/

let per1= {
    nombre: `Ezequiel`,
    edad: `23`,
    carrera: `Software`
}

let per2= {
    nombre: `Cindy`,
    edad: `20`,
    carrera: `Computacion`
}

let per3= {
    nombre: `Javier`,
    edad: `21`,
    carrera: `Software`
}

let array = [per1, per2, per3]

array.forEach((i)=>{
    console.log(i)
})

console.log(array[1].carrera)