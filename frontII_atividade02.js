// 1) Crie uma função que receba três argumentos e realize a soma deles.

function soma(a,b,c){
  return a + b + c;
}

// 2) Crie uma função que receba uma quantidade indeterminada de números e informe o maior e menor número recebido.

function maior_e_menor(){
  let i = 0, j = 0; a = 0;
  const lista = [];
  i = parseInt(prompt("Quantos números você irá informar? "));

  while(j < i){
    a = parseInt(prompt('Digite um número inteiro: '));
    lista.push(a);
    j += 1;    
  }

  var maior = 0;
  for (var n = 0; n < lista.length; n++) {
    if ( lista[n] > maior ){
      maior = lista[n];
    }
  }

  var menor = maior;
  for (var m = 0; m < lista.length; m++) {
    if ( lista[m] < menor ){
      menor = lista[m];
    }
  }

  console.log('Maior número da lista: ' + maior)
  console.log('Menor número da lista: ' + menor)
}


// 3) Crie uma função que solicite 5 números ao usuário, coloque em um array, depois exiba tal array.

function array_com_cinco(){
  const n = [];
  for(var i = 0; i < 5; i++){
    y = parseInt(prompt("Informe um número: "));
    n.push(y);
  }
  console.log("Array = " + n);
}

// 4) Crie uma função que solicite 5 números ao usuário, coloque em um array,  depois exiba a sequência de números ao contrário.
// Exemplo: digitou: 1,2,3, Vai aparecer: 3,2,1.

function contrario(){
  const n = [];
  for(var i = 0; i < 5; i++){
    w = parseInt(prompt("Informe um número: "));
    n.push(w);
  }
  console.log("Os números invertidos ficaram assim: " + n.reverse());
}


/* 5) A empresa X resolveu dar um aumento de salário aos seus
# colaboradores e lhe contrataram para desenvolver o programa que calculará os
# reajustes. Faça um programa que recebe o salário de um colaborador e calcule
# reajuste segundo o seguinte critério, baseado no salário atual: 
#   - Salários até R$ 280,00 : aumento de 20% 
#   - Salários entre R$ 280,00 e R$ 700,00: aumento de 15% 
#   - Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
#   - Salários de R$ 1500,00 em diante: aumento de 5% 

# Após o aumento ser calculado, deverá ser informado: o salário antes do
# reajuste; o percentual de aumento aplicado; o valor do aumento; o novo
# salário, após o aumento.
*/

function salario() {
  var sal = parseFloat(prompt("Informe o seu salário: R$"));
  let aumento_perc = 0, aumento = 0, novo_sal = 0;
  if(sal < 280){
        aumento_perc = 20;
        aumento = sal * (aumento_perc/100);
        novo_sal = sal + aumento;
        console.log("Salário anterior: " + sal);
        console.log("Aumento (%): " + aumento_perc);
        console.log("Valor do aumento: R$" + aumento);
        console.log("Novo salário: R$" + novo_sal);
  }

  else if(sal >= 280 && sal < 700){
        aumento_perc = 15;
        aumento = sal * (aumento_perc/100);
        novo_sal = sal + aumento;
        console.log("Salário anterior: " + sal);
        console.log("Aumento (%): " + aumento_perc);
        console.log("Valor do aumento: R$" + aumento);
        console.log("Novo salário: R$" + novo_sal);
  }
    
  else if(sal >= 700 && sal < 1500){
        aumento_perc = 10;
        aumento = sal * (aumento_perc/100);
        novo_sal = sal + aumento;
        console.log("Salário anterior: " + sal);
        console.log("Aumento (%): " + aumento_perc);
        console.log("Valor do aumento: R$" + aumento);
        console.log("Novo salário: R$" + novo_sal);
  }
    
  else {
        aumento_perc = 5;
        aumento = sal * (aumento_perc/100);
        novo_sal = sal + aumento;
        console.log("Salário anterior: " + sal);
        console.log("Aumento (%): " + aumento_perc);
        console.log("Valor do aumento: R$" + aumento);
        console.log("Novo salário: R$" + novo_sal);
  }
  
}
