function exibeAlerta (mensagem){
    console.log("***" + mensagem + "***");
}

//exibeAlerta("Rodrigo")


function aniversário (data){
    console.log("Eu nasci em " + data + " e tenho " + (2022-data));
}

//aniversário(1987)

function imc(peso,altura){
   let calculo = peso / (altura*altura)
   console.log("O seu IMC é de " + Math.round (calculo));
   if (calculo>=20){
       console.log("dieta");
   }
   else{
       console.log("magro");
   }
    
}

imc (94, 1.98)

const gostar = 1;

if(gostar == 1){
    console.log("Casar");
}else{
    console.log("Separar");


}


let num1 = 24
let num2 = "34"

console.log(num1*num2);
