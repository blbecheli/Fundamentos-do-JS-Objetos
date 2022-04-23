const cliente = {
    nome: 'Bruno',
    idade: 38,
    cpf: "123456789",
    email: 'blbecheli@gmail.com'
}

console.log(cliente);

//para adicionar um novo campo para o objeto, caso ele não exista
cliente.fone = '987654321'

console.log(cliente);

//caso a chave já exista ele atualiza o valor
cliente.fone = '8795462138'

console.log(cliente);

//------------------------------------------------------
//deletar um campo

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

//apaga um campo do objeto
delete objPersonagem.aliado

//pode se apagar tamb ém utilizando-se colchetes
delete objPersonagem["status"]

console.log(objPersonagem);
