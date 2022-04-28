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
    saldo: 100,
    depositar: function (valor) { //utilizamos funções para dar comportamento aos objetos
        this.saldo += valor //uso this para me referir a um elemento já utilizado anteriormente
    }
}
//Object.Keys cria uma array com todos as chaves do objeto. O parametro é o próprio objeto
//const propsClientes = Object.keys(cliente);

//console.log(propsClientes);

function oferecerSeguro(obj) { //como parametro foi utilizado obj (podia ser qualquer nome) para dizer que este parametro vai ser o utilizado como base da função. Aqui ele não tem valor nenhum e quando rodar a função ele será substituído pelo parametro correto
    const propsClientes = Object.keys(obj); //propsClientes é uma array
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente));//Object.values retorna os valores das chaves
console.log(Object.entries(cliente)) //Object.entries retorna as chaves e os valores
oferecerSeguro(cliente); //ao rodar a função fornece-se parametro para que a função rode corretamente, que no caso é o objeto cliente. No caso, ao rodar a função ele vai substituir o parametro genérico (obj) pelo parametro dado (cliente)