//construtor. Utiliza-se para criar objetos utilizando um protótipo

function Cliente (nome, cpf,email,saldo) //Foi dado como parametro os valores que se quer que sejam criados junto ao novo objeto, ou seja, quando se for criar um novo objeto (andre, como no exemplo), basta substituir estes parametros por valores reais
{
    this.nome = nome, //this.nome é utilizado para criar-se uam variável chamada nome e que ela (this) deverá ser usada, e não qualquer outra atribuida no JS
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo
    this.depositar = function(valor){ //a function tem como parametro valor, que será fornecido posteriormente e será utilizado na soma
        this.saldo +=valor
    }
}

const andre = new Cliente('Andre', '12345678910', 'andre@uol.com', 100) //new é uma palavra reservada e não pode ser usada para criar variáveis. Uso para criar um novo objeto, ou seja uma nova instância. 

console.log(andre);

andre.depositar(100) //Chamando o objeto andre e a função depositar que tem como parametro o valor 100, a função é rodada e o valor somado
console.log(andre);
