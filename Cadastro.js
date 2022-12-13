readlineSync = require('readline-sync');

var física = "1 - Pessoa Física";
var jurídica = "2 - Pessoa Jurídica";
var finalizado = "f";
var s = "1 - Sim";
var n = "2 - Não";
var verificacao = "\nVerifique se todas as informacoes estao corretas.\n";
var alteracao = "Deseja alterar algo?\n";
var endereco = "\nGentileza, preencher o seu endereco.\n";
var decisao = 1;

while (decisao == 1) {

console.log(física);
console.log(jurídica);

escolha = readlineSync.question('\nSelecione o tipo de pessoa:\n');
console.log("Pessoa selecionada: " + escolha);

if (escolha == 1) {
    nome = readlineSync.question('Nome: ');
    cpf = readlineSync.question('CPF: ');
    dtnasc = readlineSync.question('Data de nascimento: ');
} else if (escolha == 2) {
    nome = readlineSync.question('Nome: ');
    cnpj = readlineSync.question('CNPJ: ');
    razao = readlineSync.question('Razao Social: ');
}

    console.log(endereco)
    rua = readlineSync.question('Rua: ');
    numero = readlineSync.question("Numero: ");
    complemento = readlineSync.question('Complemento: ');
    cep = readlineSync.question('CEP: ');
    cidade = readlineSync.question('Cidade: ');
    uf = readlineSync.question('UF: ');

    console.log(verificacao);
    console.log(alteracao);
    console.log(s);
    console.log(n);

    decisao = readlineSync.question('\nSelecione uma opcao:\n');

    if (decisao == 2) { 
        break; 
    } 
}

finalizado = readlineSync.question('Cadastro finalizado com sucesso.')