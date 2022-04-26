const cliente = {
    nome: 'Bruno',
    idade: 38,
    cpf: "123456789",
    email: 'blbecheli@gmail.com',
    fones: ["55921354786", '5511958741235'], //posso também adiconar uma array dentro de um objeto
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNacimento: '20/03/2011'
    },
    {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNacimento: "04/01/2014"
    }
    ],
    saldo:100,
    depositar: function(valor){ //utilizamos funções para dar comportamento aos objetos
        this.saldo += valor //uso this para me referir a um elemento já utilizado anteriormente
    }
}

console.log(cliente.saldo);
cliente.depositar(30)
console.log(cliente.saldo);