class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome=nome,
        this.email = email,
        this.cpf = cpf,
        this.saldo = saldo
    }
    depositar (valor){
        this.saldo += valor
    
    }
    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{ //extends indica que está se herdando as informações de outra classe, que no caso seria a classe Cliente. Herda-se também os métodos (funções)
    constructor (nome,email, cpf, saldo, saldoPoupanca){
        super (nome,email,cpf,saldo) //super serve para mostrar as propriedades que se deseja herdar da classe pai
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca +=valor
    }
}

const andre = new ClientePoupanca ("Andre", "b@email.com", "2154784578", 100, 200)
console.log(andre);

andre.depositar(50)
andre.depositarPoupanca(100)

console.log(andre);
