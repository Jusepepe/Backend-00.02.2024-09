// RETO 2
//Ejercicio1
document
    .getElementById("r2_e1_btn1")
    .addEventListener("click", (sumarNumeros) => {
        sumarNumeros.preventDefault();
        const a = document.getElementById("r2_e1_input1").value;
        const b = document.getElementById("r2_e1_input2").value;
        const c = document.getElementById("r2_e1_input3").value;

        if (a == null || b == null || isNaN(c)) {
            alert("Ejercicio 1. Valores inválidos");
            return;
        }
        console.log(a, b, c);
        document.getElementById("r2_e1_input1").value = ``;
        document.getElementById("r2_e1_input2").value = ``;
        document.getElementById(
            "r2_e1_resultado"
        ).innerText = `Hola mi nombre es ${a} ${b} y mi edad ${c}`;
    });
//Ejercicio2
let e2_acumulador = 0;
document.getElementById("r2_e2_btn1").addEventListener("click", (sumaCubos) => {
    sumaCubos.preventDefault();
    const a = +document.getElementById("r2_e2_input1").value;
    console.log(a, e2_acumulador);
    if (a === 0 || a === null) {
        document.getElementById("r2_e2_resultado").value = ` `;
        alert("Ejercicio 2. Valores reiniciados");
        document.getElementById("r2_e2_resultado").value = ` `;
        e2_acumulador = 0;
        return;
    }
    e2_acumulador += a ** 3;
    document.getElementById("r2_e2_input1").value = ``;
    document.getElementById("r2_e2_resultado").value = `${e2_acumulador}`;
});

//ejercicio3
const enteroRandom = () => {
    const random = Math.floor(Math.random() * 1000);
    return random;
}
const flonateRandom = () => {
    const random = Math.random();
    return random;
}

const cadenaRandom = () => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let random = "";
    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        random += caracteres[indiceAleatorio];
    }
    return random;
};
document.getElementById("r2_e3_btn1").addEventListener("click", (varTipo) => {
    varTipo.preventDefault();
    const azar = enteroRandom();
    var random = null;
    switch (azar % 3) {
        case 1:
            random = enteroRandom();
            break;
        case 2:
            random = flonateRandom();
            break;

        default:
            random = cadenaRandom();
            break;
    }
    document.getElementById("r2_e3_span1").innerText = `${random}`;
    console.log(typeof random);
    document.getElementById("r2_e3_resultado").innerText = `${(typeof random)}`;
    random = null;
});

//Ejercicio 04
const sumaParametros = (...rest) => {
    const sum = (accumulator, currentValue) => accumulator + currentValue;
    return rest.reduce(sum, 0);
};
document.getElementById("r2_e4_btn1").addEventListener("click", (paramRest) => {
    paramRest.preventDefault();
    let numeros = [];
    for (let index = 0; index < 10; index++) {
        numeros.push(enteroRandom());
    }
    document.getElementById("r2_e4_span1").innerText = `${numeros}`;
    document.getElementById("r2_e4_resultado").innerHTML = `${sumaParametros(...numeros)}`;
})

//Ejercicio 05
const sinCadenas = (arreglo = []) => {
    let sinCadenas = [];
    arreglo.forEach(element => {
        if (!isNaN(element)) {
            sinCadenas.push(element);
        }
    });
    return sinCadenas;
}
document.getElementById("r2_e5_btn1").addEventListener("click", (filtarCadenas) => {
    filtarCadenas.preventDefault();
    //generar arreglo aleatorio
    let arreglo = []
    for (let index = 0; index < 12; index++) {
        if (enteroRandom() % 2 === 0) {
            arreglo.push(enteroRandom());
        } else {
            arreglo.push(cadenaRandom());
        }
    }
    document.getElementById("r2_e5_span1").innerText = `${arreglo}`;
    document.getElementById("r2_e5_resultado").innerText = `${sinCadenas(arreglo)}`;
})

// ejercicio 06

const minMaxSimple = (arreglo) => {
    // console.log("minmaxSample ",arreglo);
    let min = Math.min(...arreglo);
    let max = Math.max(...arreglo);
    // console.log(min,max);
    return [max, min];
};

document.getElementById("r2_e6_btn1").addEventListener("click", (minMax) => {
    minMax.preventDefault();
    //generar arreglo
    let arreglo = []

    for (let index = 0; index < 12; index++) {
        arreglo.push(enteroRandom());
    }
    document.getElementById("r2_e6_span1").innerText = `${arreglo}`;
    const arr = minMaxSimple(arreglo);
    // console.log(arr);
    document.getElementById("r2_e6_resultado").innerText =
        `Mínimo: ${arr[0]}, Máximo: ${arr[1]}`;

})

// ejercicio 07
const formartPhoneNumber = (numero = []) => {
    if (numero.length != 10) {
        return "numero invalido";
    }

    let part1 = numero.slice(0, 3);
    part1 = part1.join("");

    let part2 = numero.slice(3, 6).join("");
    let part3 = numero.slice(6, 10).join("");

    return `(${part1}) ${part2}-${part3}`;
};

document.getElementById("r2_e7_btn1").addEventListener("click", (numTelf) => {
    numTelf.preventDefault();
    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    document.getElementById("r2_e7_span1").innerText = `${arreglo}`;
    document.getElementById("r2_e7_resultado").innerText = `${formartPhoneNumber(arreglo)}`;
})

//ejercicio 08

const formartoMatrizMatrices = (matriz = []) => {
    // console.log(matriz);
    let arr = [];
    matriz.forEach(element => {
        let max = Math.max(...element);
        arr.push(max);
    });
    return arr;
}

document.getElementById("r2_e8_btn1").addEventListener("click", (mayorMatrices) => {
    indiceCaracter.preventDefault();
    const findLargestNums = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
    // console.log(findLargestNums);
    document.getElementById("r2_e8_span1").innerText = `${findLargestNums}`;
    document.getElementById("r2_e8_resultado").innerText = `${formartoMatrizMatrices(findLargestNums)}`;
})

//ejercicio 09
const validaCadenaRelativo = (cadena, minimo, maximo) => {
    let validacion = ((cadena.length > minimo) && (cadena.length < maximo)) ? true : false;
    return validacion;
}

const encontrarIndices = (cadena, letra) => {
    if (cadena.indexOf(letra) === -1) {
        return "Letra no encontrada en la cadena";
    } else {
        return [cadena.indexOf(letra), cadena.lastIndexOf(letra)];
    }
}

document.getElementById("r2_e9_btn1").addEventListener("click", (indiceCaracter) => {
    indiceCaracter.preventDefault();
    const cadena = document.getElementById("r2_e9_input1").value;
    const letra = document.getElementById("r2_e9_input2").value;

    if (validaCadenaRelativo(cadena, 0, 20) && validaCadenaRelativo(letra, 0, 2)) {
        document.getElementById("r2_e9_resultado").innerText = `${encontrarIndices(cadena, letra)}`;
    } else {
        alert("Ejercicio 9, Valores no son validos");
    }
})

// ejercicio 10
const toArray = (objeto = {}) => {
    return Object.entries(objeto);
};
document.getElementById("r2_e10_btn1").addEventListener("click", (convertirArreglo) => {
    convertirArreglo.preventDefault();

    const objObejto = {
        a: 1,
        b: 2
    };
    // document.getElementById("r2_10_span1").innerText = `${objObejto.a} ${objObejto.b}`;
    document.getElementById("r2_e10_resultado").innerText = `${toArray(objObejto)}`;
})
const sumarPresupuestos =(individuos ={})=>{
    let accumulator=0;
    individuos.forEach(individuo => { accumulator+=individuo.budget;});
    return accumulator;
}
//ejercicio 11
document.getElementById("r2_e11_btn1").addEventListener("click", (ejercicio11) => {
    ejercicio11.preventDefault();

    const getBudgets= ([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }
        ]);
    // document.getElementById("r2_10_span1").innerText = `${objObejto.a} ${objObejto.b}`;
    document.getElementById("r2_e11_resultado").innerText = `${sumarPresupuestos(getBudgets)}`;
})

// ejercicio 12

const devolverNombres =(individuos ={})=>{
    let nombres=[];
    individuos.forEach(individuo => { nombres.push(individuo.name);});
    return nombres;
}
document.getElementById("r2_e12_btn1").addEventListener("click", (ejercicio12) => {
    ejercicio12.preventDefault();

    const getStudentNames= ([
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }]);
    // document.getElementById("r2_10_span1").innerText = `${objObejto.a} ${objObejto.b}`;
    document.getElementById("r2_e12_resultado").innerText = `${devolverNombres(getStudentNames)}`;
})

// ejercicio 13

const objectToArrayKeyValue =(reacciones ={})=>{
    let reaccionesCV=[];
    // console.log(reacciones);
    // reacciones.forEach(reaccion => { 
    //     // nombres.push(individuo.name);
    //     const arr = [reaccion.key,reaccion.value];
    //     reaccionesCV.push(arr);
    // });
    // reacciones=Object.entries(reacciones).
    // reacciones.forEach(reaccion => { 
    //         const arr = [reaccion.key,reaccion.value];
    //         reaccionesCV.push(arr);
    // })
    
    Object.entries(reacciones).forEach(([clave, valor]) => {
        const arr = [clave,valor];
        reaccionesCV.push(arr);
    });

    return reaccionesCV;
}
document.getElementById("r2_e13_btn1").addEventListener("click", (ejercicio13) => {
    ejercicio13.preventDefault();
    const getReacciones={
        likes: 2,
        dislikes: 3,
        followers: 10};
    // document.getElementById("r2_10_span1").innerText = `${objObejto.a} ${objObejto.b}`;
    console.log(objectToArrayKeyValue(getReacciones));
    document.getElementById("r2_e13_resultado").innerText = `${objectToArrayKeyValue(getReacciones)}`;
})
// ejercicio 14
const squaresSum =(numero)=>{
    let sqrs=0;
    for (let i = 1; i <= numero; i++) {
        sqrs += i**2;
    }
    return sqrs;
}
document.getElementById("r2_e14_btn1").addEventListener("click",(ejercicio14)=>{
    ejercicio14.preventDefault();
    const n = parseInt(document.getElementById("r2_e14_input1").value);
    if (!(n === "")){
        
        document.getElementById("r2_e14_resultado").innerText = `${squaresSum(n)}`;
        document.getElementById("r2_e14_input1").value = ``;
    }else{
        alert("Ejercicio 14, valor vacio o inválido ");
    }
})

// ejercicio 15
const productoTamaño =(arreglo =[])=>{
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i]= arreglo[i]*(arreglo.length);
    }
    return arreglo;
}
document.getElementById("r2_e15_btn1").addEventListener("click",(ejercicio15)=>{
    ejercicio15.preventDefault();
    let arreglo = [2, 3, 1, 0];
    // const n = parseInt(document.getElementById("r2_e14_input1").value);
    document.getElementById("r2_e15_resultado").innerText = `${productoTamaño(arreglo)}`;
    // document.getElementById("r2_e15_input1").value = ``;
})

// ejercicio 16

const countdown =(tamano)=>{
    let arreglo =[];
    for (let i = 0; i < tamano; i++) {
        arreglo[i]= tamano - i;
    }
    return arreglo;
}
document.getElementById("r2_e16_btn1").addEventListener("click",(ejercicio16)=>{
    ejercicio16.preventDefault();
    // let arreglo = [2, 3, 1, 0];
    const tamano = parseInt(document.getElementById("r2_e16_input1").value);
    document.getElementById("r2_e16_resultado").innerText = `${countdown(tamano)}`;
    document.getElementById("r2_e16_input1").value = ``;
})
// ejercicio 17

document.getElementById("r2_e17_btn1").addEventListener("click",(ejercicio17)=>{
    ejercicio17.preventDefault();
    const arreglo = [10, 4, 1, 4, -10, -50, 32, 21];
    document.getElementById("r2_e17_resultado").innerText = `Diferencia: ${minMaxSimple(arreglo)[0] - minMaxSimple(arreglo)[1]}`;
    
})

//ejericio 18

const filterList =(arreglo =[]) =>{
    let arr =arreglo.filter(num =>  !isNaN(num));
    return arr;
}
document.getElementById("r2_e18_btn1").addEventListener("click",(ejercicio18)=>{
    ejercicio18.preventDefault();
    const arreglo = [1, 2, 3, "x", "y", 10];
    document.getElementById("r2_e18_resultado").innerText = ` ${filterList(arreglo)}`;
    
})

//ejercicio 19
const repeat = (elemento,veces) =>{
    let  arr =[];
    for (let i = 0; i < veces; i++) {
        arr.push(elemento);
    }
    console.log(arr);
    return arr;
    
}
document.getElementById("r2_e19_btn1").addEventListener("click",(ejercicio19)=>{
    ejercicio19.preventDefault();
    const elemento = document.getElementById("r2_e19_input1").value;

    const veces = parseInt(document.getElementById("r2_e19_input2").value);
    document.getElementById("r2_e19_input1").value="";
    document.getElementById("r2_e19_input2").value="";
    document.getElementById("r2_e19_resultado").innerText = ` ${repeat(elemento,veces)}`;
    
})
// ejercicio 20
const vreplace  = (palabra,vocal) =>{
    const nuevapalabra = palabra.replaceAll(/[aeiou]/g, vocal);
    return nuevapalabra;
}
document.getElementById("r2_e20_btn1").addEventListener("click",(ejercicio20)=>{
    ejercicio20.preventDefault();
    const palabra = document.getElementById("r2_e20_input1").value;
    const vocal = document.getElementById("r2_e20_input2").value;

    document.getElementById("r2_e20_input1").value="";
    document.getElementById("r2_e20_input2").value="";
    document.getElementById("r2_e20_resultado").innerText = ` ${vreplace (palabra,vocal)}`;
    
})
// ejercicio 21
const findNemo = (texto,palabra) =>{
    const  indice = texto.indexOf(palabra);
    return `¡Encontré a Nemo en ${indice}!`;
}
document.getElementById("r2_e21_btn1").addEventListener("click",(ejercicio21)=>{
    ejercicio21.preventDefault();
    const palabra='Nemo';
    const frase = document.getElementById("r2_e21_input1").value;
    document.getElementById("r2_e21_input1").value="";
    document.getElementById("r2_e21_resultado").innerText = ` ${findNemo(frase,palabra)}`;
    
})

// ejercicio 22
const capLast = (palabra) =>{
    // const nuevapalabra = palabra.replac(/[aeiou]/g, "O");
    const nuevapalabra = palabra.replace("o", "O");
    return nuevapalabra;
}


document.getElementById("r2_e22_btn1").addEventListener("click",(ejercicio19)=>{
    ejercicio19.preventDefault();
    const palabra = "Hello";
    document.getElementById("r2_e22_resultado").innerText = ` ${capLast(palabra)}`;
    
})