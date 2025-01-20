let peso = 60;
let altura = 1.72;

let imc = peso/Math.pow(altura,2);

if(imc < 18.5){
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso!`);
    
}else if(imc < 25){
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está com peso normal!`);
    
}else if(imc < 30){
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está acima do peso!`);
    
}else{
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está obeso!`);
    
}