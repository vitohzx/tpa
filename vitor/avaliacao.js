//definições

let adulto = 3 //numero de adultos
let crianca = 3 //numero de crianças
let voo = "002" //Norte do brasil 001, sul do brasil 002, asia 003, europa 004, africa 005
let classe = "econômica" //classe 1: econômica, classe 2: executiva

//variavel das passagens norte

let adultonec = 500; //preco individual das passagens economicas adultas para o norte do brasil
let criancanec = 400; //preco individual das passagens economicas infantis para o norte do brasil
let adultonex = adultonec * 20/100 + adultonec; //preco individual das passagens executivas adultas para o norte do brasil
let criancanex = criancanec * 10/100 + criancanec; //preco individual das passagens executivas infantis para o norte do brasil
let valortotalnec = adulto * adultonec + crianca * criancanec //valor total a ser pago na classe economica para o norte do brasil
let valortotalnex = adulto * adultonex + crianca * criancanex //valor total a ser pago na classe executiva o norte do brasil


//variavel das passagens sul

let precosec = 200; //preco individual das passagens economicas para o sul do brasil
let precosex = 400; //preco individual das passagens executivas para o sul do brasil
let valortotalsec = (adulto + crianca) * precosec //valor total a ser pago na classe economica para o sul do brasil
let valortotalsex = (adulto + crianca) * precosex //valor total a ser pago na classe executiva para o sul do brasil

//variavel das passagens continente asiatico

let preco1 = 1600; //preco individual das passagens economicas para a asia
let preco1e = 2000; //preco individual das passagens executivas para a asia
let valortotal1 = (adulto + crianca) * preco1 //valor total a ser pago na classe economica para a asia
let valortotal1e = (adulto + crianca) * preco1e //valor total a ser pago na classe executiva para a asia

//variavel das passagens continente europeu

let preco2 = 1800; //preco individual das passagens economicas para a europa
let preco2e = 2300;//preco individual das passagens economicas para a europa
let valortotal2 = (adulto + crianca) * preco2 //valor total a ser pago na classe economica para a europa
let valortotal2e = (adulto + crianca) * preco2e //valor total a ser pago na classe executiva para a europa

//variavel das passagens continente africano

let preco3 = 1200;//preco individual das passagens economicas para a africa
let preco3e = 1900;//preco individual das passagens economicas para a africa
let valortotal3 = (adulto + crianca) * preco3 //valor total a ser pago na classe economica para a africa
let valortotal3e = (adulto + crianca) * preco3e//valor total a ser pago na classe executiva para a africa

//condicional dos voos para Norte do Brasil

if (voo === "001" && classe === "econômica") {
    console.log (`voo escolhido: Norte do Brasil
classe escolhida: econômica
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
valor total sera: ${valortotalnec}R$`)
} //condicional e mensagem do voo para o norte do brasil, e classe economica

else if (voo === "001" && classe === "executiva") {
    console.log (`voo escolhido: Norte do Brasil
classe escolhida: executiva
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
valor total sera: ${valortotalnex}R$`)
} //condicional e mensagem do voo para o norte do brasil, e classe executiva

//condicional dos voos para Sul do Brasil

else if (voo === "002" && classe === "econômica") {
    console.log (`voo escolhido: Sul do Brasil
classe escolhida: econômica
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
valor total sera: ${valortotalsec}R$`)
} //condicional e mensagem do voo para o sul do brasil, e classe economica

else if (voo === "002" && classe === "executiva") {
    console.log (`voo escolhido: Sul do Brasil
classe escolhida: executiva
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
valor total sera: ${valortotalsex}R$`)
} //condicional e mensagem do voo para o norte do brasil, e classe executiva

//condicional dos voos para Asia

else if (voo === "003" && classe === "econômica") {
console.log (`voo escolhido: Asia
classe escolhida: econômica
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
valor total sera: ${valortotal1}R$`)
} //condicional e mensagem do voo para a asia, e classe economica

else if (voo === "003" && classe === "executiva") {
    console.log (`voo escolhido: Asia
classe escolhida: executiva
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
valor total sera: ${valortotal1e}R$`)
} //condicional e mensagem do voo para a asia, e classe executiva

//condicional dos voos para Europa

else if (voo === "004" && classe === "econômica") {
    console.log (`voo escolhido: Europa
classe escolhida: econômica
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
valor total sera: ${valortotal2}R$`)
} //condicional e mensagem do voo para a europa, e classe economica

else if (voo === "004" && classe === "executiva") {
    console.log (`voo escolhido: Europa
classe escolhida: executiva
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
valor total sera: ${valortotal2e}R$`)
} //condicional e mensagem do voo para a europa, e classe executiva

//condicional dos voos para Africa

else if (voo === "005" && classe === "econômica") {
    console.log (`voo escolhido: Africa
classe escolhida: econômica
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
valor total sera: ${valortotal3}R$`)
} //condicional e mensagem do voo para a africa, e classe economica

else if (voo === "005" && classe === "executiva") {
    console.log (`voo escolhido: Africa
classe escolhida: executiva
numero de passagens adultas: ${adulto}
numero de passagens infantis: ${crianca}
o valor total sera: ${valortotal3e}R$`)
} //condicional e mensagem do voo para a africa, e classe executiva

//condicional para dados invalidos

else {      
    console.log (`O codigo do voo ou a classe digitadas são invalidas`)
}