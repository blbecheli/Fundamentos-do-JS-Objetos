const cliente = {
    nome: 'Bruno',
    idade: 38,
    cpf: "123456789",
    email: 'blbecheli@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']
//esta é uma forma de acessar os dados dentro do objeto. No caso foi criado uma array como os mesmos campos do objeto e no cosole.log foi acessado o objeto cliente, entre colchetes (array) coloca-se o nome da const onde está a array e entre colchetes (indice) coloca-se o indice onde está informação desejada. Como o nome do indice é o mesmo do primeiro elemento do objeto o JS interpreta que é o mesmo e atribui o valor para ele (no caso: Bruno)
console.log(cliente[chaves[0]]);

//for each é um método de array
//No caso info é um nome de um parametro dado (pode ser qualquer nome) que se refere a cada elemento da array chaves. Quando é feito o console.log e se passa como parametro o objeto cliente e para ele o parametro info, quer dizer que dentro de cliente eu procuro a info (elemento da array que tem o mesmo nome que os elementos do objeto) e manda iterar cada elemento até o fim da array
chaves.forEach(info =>console.log([cliente[info]]))

console.log(cliente['nome']);