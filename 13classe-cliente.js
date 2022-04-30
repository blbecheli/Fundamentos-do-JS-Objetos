class Client{
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

const bruno = new Client("Bruno", "blbecheli@gmail.com", "12345678910", "100")

bruno.exibirSaldo()
console.log(bruno);