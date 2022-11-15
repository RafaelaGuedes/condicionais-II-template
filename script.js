//const idadeDep = prompt("Solicitação de dependente\n Qual a idade do dependente?")

/*
if(idadeDep>13){
    if(idadeDep<18){
        console.log("Seu dependente já pode ter um cartão vinculado ao seu.")
    }else{
        console.log("O dependente já pode ter seu próprio cartão.")
    }
}else{
    console.log("Consulte outras possibilidades do Labank");
}
*/
/*
if(idadeDep>=13 && idadeDep<18){
    console.log("Seu dependente já pode ter um cartão vinculado ao seu.")
}else{
    console.log("Consulte outras possibilidades do Labank.")
}
*/

/*
idadeDep == 13 ? console.log("A idade do dependente é 13 e ja pode ter um cartão.") : console.log("Verifique as opções possíveis.");
*/

/*
let tipoCartao = prompt("Escolha o tipo do seu cartão")

switch(tipoCartao){
    case "1":
        console.log("Fácil");
        break;
    case "2":
        console.log("Black");
        break;
    case "3":
        console.log("Platinum");
        break;
    case "4":
        console.log("Master Gold");
        break;
default:
    console.log("Escolha uma das quatro opções disponíveis.");
}
*/

let number = prompt("Digite um número");
/*
if(number%2==0){
    if(number%3==0){
        console.log("Este número é divisivel por 2 e por 3.");
    }
}number==30 ? console.log("UFA ACERTEI!") : console.log("não foi dessa vez :(")
*/



if(number%2==0 && number%3==0){
    console.log("Este número é divisivel por 2 e por 3.")
}//number==30 ? console.log("UFA ACERTEI!") : console.log("não foi dessa vez :(")
switch(number){
    case "6":
        console.log("O número é 6");
    break;
    case "12":
        console.log("O número é 12");
    break;
    case "18":
        console.log("O número é 18");
    break;
    case "24":
        console.log("O número é 24");
    break;
    case "30":
        console.log("O número é 30");
    break;
default:
    console.log("O número é maior que 30 ou menor que 6");
}
