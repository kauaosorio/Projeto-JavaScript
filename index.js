//
//let frase = prompt("escreva uma frase")

//console.log(frase.toUpperCase())
//console.log(frase.replaceAll("o, i"))
//console.log(frase.length)

//let cachorros = [" golden " , " pastor alemão " ,  " buldogue" ,  " poodle " , "chihuahua"]
//let numeros = Number (prompt (" insira um numero de 1 a 4 "))
//console.log(" seu cachorro é " + cachorros[numeros])

//let numero = [1 , 2 , 3 , 4 , 5 , 6]
//console.log(numero.length)
//numero.push(7)
//console.log(numero)
//numero.splice(3, 2)
//console.log(numero)
//console.log(numero.length)

//let nome = prompt(" insira seu nome ")
//let gmai = prompt(" insira seu gmail "
//console.log(" o e-mail " + gmai + " foi cadastrado com sucesso. Seja bem-vinda(o)," + nome + "!")

//let comida = [" x-tudo " , " hamburguer " , " fejão " , " arroz " , " batata ", ]
//console.log(comida)
//let favorita = prompt(" escreva qual é sua comida favorita")
//comida[1] = [favorita]
//
//console.log(" essas são as minhas comidas favortas " ,)
//console.log(comida[0])
//console.log(comida[1])
//console.log(comida[2])
//console.log(comida[3])
//console.log(comida[4])

//let listaDeTarefas = []
//let tarefas = prompt(" escreva a primeira tarefa do dia ")
//let tarefaDois = prompt(" escreva a segunda tarefa do dia ")
//let tarefaTres = prompt(" escreva terceira tarefa do dia ")
//console.log(" Então você tem ") + listaDeTarefas[0]
//let realizada = Number (prompt(" escreva qual tarefa já realizou"))
//listaDeTarefas.splice(realizada, 1)

//listaDeTarefas [0] = tarefas
//listaDeTarefas [1] = tarefaDois
//listaDeTarefas [2] = tarefaTres
 
//console.log(listaDeTarefas)

//fraseLonga = function () {
//console.log(" olá mundo")
//}
//fraseLonga()    

//function listinha(nome, nomeDois, nomeTres) {
///console.log(`Olá ${nome}, ${nomeDois}, ${nomeTres} `)
//}
//listinha(" kaua ", "lucas", " deivid ")

///const tamanhoArea = (largura, tamanho) => {
//return largura + tamanho
//}

//let tamanhinho = tamanhoArea(3, 3)
//console.log(tamanhinho)

//let precoDoAmanha = {
//nome: " Preço do Amanhã ",
//lançamento: " 20 de outubro de 2011 ",
//elenco: ["Justin Timberlake", "Amanda Seyfried", "Cillian Murphy"],
//asistiOFilme: true,
//}
//p/recoDoAmanha.elenco[0] = "xuxa"
//precoDoAmanha.personagens = [" Will Salas" , "Sylvia Weis", "Leonardo ",]

//console.log(precoDoAmanha.nome)
//console.log(" o lançamento do filme foi em: " + precoDoAmanha.lançamento)
//console.log(" esse é o elenco do filme Preço do amanhã " + precoDoAmanha['elenco'][0] + "/" + precoDoAmanha['personagens'][0] + "/" + precoDoAmanha['elenco'][1] + "/" + precoDoAmanha['personagens'][1] + "/" + precoDoAmanha['elenco'][2] + "/" + precoDoAmanha['personagens'][2])
//console.log(" eu asistir ao filme Preço do amanhã? " + precoDoAmanha['asistiOFilme'] )

//console.log(precoDoAmanha.nome + precoDoAmanha.lançamento +  precoDoAmanha['elenco'][0] + "/" + precoDoAmanha['personagens'][0] + "/" + precoDoAmanha['elenco'][1] + "/" + precoDoAmanha['personagens'][1] + "/" + precoDoAmanha['elenco'][2] + "/" + precoDoAmanha['personagens'][2] + precoDoAmanha.asistiOFilme)

//let primeiraPessoa = {
//nome: " Roberto ",
//idade: " 27 ",
//generoMusical: " Gospel ",
//}


//console.log(" O nome da pessoa é " + primeiraPessoa.nome + "," + " ela tem " + primeiraPessoa.idade + " anos, e gosta muito de" + primeiraPessoa.generoMusical) 

//let b = Number (prompt(" insira um numero "))
//let c = Number (prompt(" insira um numero "))

//function numeroCinco(num1, num2) {
//if (num1 === num2) {
//console.log(" sucesso ")
//}/ 
//else if (num1 > num2) { 

    //console.log(" maior")

//}

//else {

  //  console.log(" menor ")
//}



//}

//numeroCinco(b, c)

//let pokemon = prompt(" escreva o pokemon que deseja! bulbassauro, charmander ou squirtle. ")

//switch (pokemon) {
  //  case 'bulbassauro':
      //  console.log( " seu pokemon é o bulbassauro tipo (planta e venenoso) ")
    //    break;
    //case 'charmander':   
     //   console.log( " seu pokemon é o charmander tipo (fogo) ")
      //  break
    //case 'squirtle':
      //  console.log( " seu pokemon é o squirtle tipo (água) ")
     ///   break
    
   /// default:
     //   console.log(" seu pokemon não foi identificado ")
      //  break;
//}

//let idade = prompt(" escreva qual é sua idade")
//let ensinoMedioConcluido = prompt(" escreva ")

//function estudante() {

//}


















//sonic ()
//let numerosLista = (11, 15, 18, 14, 12, 13)
 //resumo = function(array) {
    //let maior = 0
  //  for
   
// }
let lista = []

function abrigao ()  {
const cadastrao = {
        nome: prompt(" escreva qual o nome do abrigo "),
        emdereco: prompt(" escreva qual é o endereço do abrigo "),
        telefone: prompt(" escreva o telefone do abrigo "),
        capacidade: prompt(" escreva qual a capacidade de lotação do abrigo "),
        cidade: prompt(" escreva a cidade onde se encontra o abrigo "),
      
}
    lista.push(cadastrao)
}

function listagem(array) {

if (array.length === 0) {
    alert(" nem um abrigo foi encontrado ")
}
else {
for (let i = 0; i < array.length; i++) {
  const b = array[i];
  alert(`====== Lista de abrigos ======\n codigo ${i + 1}\nnome ${b.nome}\nendereço ${b.emdereco}\ntelefone ${b.telefone}\ncapacidade ${b.capacidade}\ncidade ${b.cidade} `)
  
}

}


}

function buscarAbrigos() {
let procurarAbrigos = prompt(" escreva qual a cidade que dejesa procurar ").toLowerCase()
if (procurarAbrigos.length === 0) {
  alert(" nem um abrigo foi encontrado ")

}
else { 
for (let i = 0; i < lista.length; i++) {
if (lista[i].cidade === procurarAbrigos) 
alert(`====== Lista de abrigos ======\n codigo ${i + 1}\nnome ${lista[i].nome}\nendereço ${lista[i].emdereco}\ntelefone ${lista[i].telefone}\ncapacidade ${lista[i].capacidade}\ncidade ${lista[i].cidade} `)

  
}
}
}
let menu = 0
while (menu != 4) {
menu = prompt("===== ABRIGOS TEMPORÁRIOS =====\n1. Cadastrar abrigo\n2. Listar abrigos\n3. Procurar abrigo\n4. Sai\nEscolha uma opção: ")
switch (menu) {
    case '1':
        abrigao()
    break
    case '2':
        listagem(lista)
    break
    case '3': 
        buscarAbrigos()
    break
    case '4':
        alert("Saindo")       
    break
    default:
        alert("Alternativa Incorreta")
    break;
    }
}
