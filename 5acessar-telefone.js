const cliente = {
    nome: 'Bruno',
    idade: 38,
    cpf: "123456789",
    email: 'blbecheli@gmail.com',
    fones:["55921354786", '5511958741235'] //posso também adiconar uma array dentro de um objeto
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'Filha',
    dataNacimento: '20/03/2011'
}

//cliente.fones.forEach(fone => console.log(fone))

console.log(cliente);

cliente.dependentes.nome = 'Sara Silva'
console.log(cliente);
