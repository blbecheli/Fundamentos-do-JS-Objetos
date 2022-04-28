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

let relatorio = "";

//for...in é utilizado para percorrer um objeto
for (let info in cliente) { //for ... in percorre um objeto e retorna todos os seus elementos. Let info é uma variável criada para armazenar os elementos encontrados
    if (typeof cliente[info] === "object" || typeof cliente[info] === 'function') { //No caso como não se quer elementos que não sejam strings ou numbers, foram feitas essas condições dentro do if. Typeof indica qual é o tipo armazenado dentro da constante (info, criada dentro do for..in)
        continue //comando do js que indica que o if deve continuar e no caso, que nada deve ser feito se a condição for verdadeira
    } else { //será salva na variável relatório todos as chaves do objeto que estão dentro do objeto cliente e que atenda as condições do if acima. A template string (``) permite a quebra de linha no js. Será salva a info que é cada chave dentro do objeto (nome, idade,cpf...) e cliente.info que é o valor de cada chave
        relatorio +=`  
        ${info} - ${cliente[info]} 
        `
    }
}

console.log(relatorio);