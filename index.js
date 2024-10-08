const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Richard da silva gonçalves";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 18;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade atual é "  + idade + " e sou nascido no ano " + anoNascimento );

anoAtual = anoAtual + 1;
idade = idade +1;

console.log (`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} e estamos no ano ${anoAtual} e minha idade é ${idade}`);

const loginCerto = "admin";
const senhaCerta = "1234";
console.log(" ");
console.log("AGENCIAS DE VIAGENS");
console.log(" ");
console.log("Faça seu login");

var login = entrada("Digite seu login: ");
var senha = entrada("digite sua senha: ");

while(login != loginCerto){
  console.log ("login incorreto");
  login = entrada("digite seu login novamente: ");
}

while(senha != senhaCerta){
  console.log ("senha incorreta");
  senha = entrada("digite sua senha novamente: ");
}



const listaDeViagens = new Array(
'Japão',
'Londres',
'paris',
'Inglaterra',
) ;

console.log(listaDeViagens) ;

console.log(listaDeViagens[4]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(3,1);

var nomeComprador = entrada("Qual seu nome? ");
var idadeComprador = entrada("Qual sua idade? ");

if (idadeComprador<18){

console.log(`Olá senhor(a) ${nomeComprador} infelizmente você não poderá viajar conosco`);
  console.log(`Já que sua idade é ${idadeComprador}`)
};
if (idadeComprador>=18){
  
  console.log(`Párabens senhor(a) ${nomeComprador} ,você é apto à viajar,para onde deseja ir? Os destinos são ${listaDeViagens}`);
}