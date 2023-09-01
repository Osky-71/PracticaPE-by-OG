const usuarios =[ 
    {"name": "User1", "Edad": 21, "Carrera": "Software", "Year": 1},
    {"name": "User15", "Edad": 22, "Carrera": "Software", "Year": 1},
    {"name": "User19", "Edad": 23, "Carrera": "Software", "Year": 3},
    {"name": "User2", "Edad": 24, "Carrera": "Computación", "Year": 2},
    {"name": "User22", "Edad": 21, "Carrera": "Computacion", "Year": 2},
    {"name": "User3", "Edad": 21, "Carrera": "Comunicacion", "Year": 3},
    {"name": "User32", "Edad": 20, "Carrera": "Comunicacion", "Year": 3},
    {"name": "User33", "Edad": 23, "Carrera": "Ingles", "Year": 4},
    {"name": "User4", "Edad": 26, "Carrera": "Medicina", "Year": 5},
    {"name": "User5", "Edad": 24, "Carrera": "Software", "Year": 5},
];

/*const usuariosfilter = usuarios.filter((x) =>{
    // condicion a cumplir
    if(x.Carrera == "Software"){
        return x; //si cumple agregar
    }

    return x.Carrera == "Software"
})

console.log(usuariosfilter)*/


const usuariosNuevos = usuarios.filter( (car) =>{
    return car.Carrera == "Comunicacion" && car.Edad== 21
})
console.log(usuariosNuevos)


const usuariosMap = usuarios.map( (user) => {
    return{
        "nombre": user.name,
        "edad": user.Edad
    }
})

console.log(usuariosMap)