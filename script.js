let predio = [];
let andares = [];

let totalApartamentos = 10 * 42;
let apartamentosAlugados = (totalApartamentos / 3) * 2;
let apartamentosNaoAlugados = totalApartamentos - apartamentosAlugados;

let familiaDuasPessoas = (apartamentosAlugados / 2) * 2;
let familiaTresPessoas = (apartamentosAlugados / 2) * 3;
let totalPessoas = familiaDuasPessoas + familiaTresPessoas;

for (i=0; i < 10; i++) {
    //console.log("entrando no for");
    predio[i] = 1;
    //console.log(predio); 
    for (j=0; j < 42; j++){
        andares[j] = 1;
        //console.log(andares);
    }
}

console.log(predio, andares);

