const cliente = {
    nome: 'Bruno',
    idade: 38,
    cpf: "123456789",
    email: 'blbecheli@gmail.com'
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos. Meu e-mail é ${cliente.email}. CPF cadastrado é ${cliente.cpf.substring(0,3)}.***.***-**`);//para acessar eu uso o nome da const e depois ponto e nome do elemenento (const.nome)
console.log(cliente.cpf.substring(0,3));//substring permite que se mostre apenas uma parte da string. Como parametro coloco onde se inicia e onde se termina