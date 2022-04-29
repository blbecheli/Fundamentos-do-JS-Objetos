function Cliente(nome, cpf, email, saldo) //Foi dado como parametro os valores que se quer que sejam criados junto ao novo objeto, ou seja, quando se for criar um novo objeto (andre, como no exemplo), basta substituir estes parametros por valores reais
{
    this.nome = nome, //this.nome é utilizado para criar-se uam variável chamada nome e que ela (this) deverá ser usada, e não qualquer outra atribuida no JS
        this.cpf = cpf,
        this.email = email,
        this.saldo = saldo
    this.depositar = function (valor) { //a function tem como parametro valor, que será fornecido posteriormente e será utilizado na soma
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo) //call é utizado para chamar as chaves e valores atribuidos a outro cliente. No caso será chamado os parametros this, nome, cpf, email e saldo do objeto cliente
    this.saldoPoup = saldoPoup //este valor difencia este construtor do construtor cliente    
}

const ju = new ClientePoupanca('Ju', '987452135411', 'ju@email.com', 100, 200)

console.log(ju);

//Criando um novo método a um objeto. Utilizado em construtores e é atribuído a todas as instâncias e não somente ao objeto original
ClientePoupanca.prototype.depositarPoup = function(valor){ 
    this.saldoPoup += valor
}

ju.depositarPoup(30)
console.log(ju);
console.log(ju.saldoPoup);