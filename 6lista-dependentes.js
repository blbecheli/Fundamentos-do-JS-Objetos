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
    }] //transformou este elemento em uma array
}

cliente.dependentes.push({ //como foi transformado em uma array pode se usar os métodos da array, como o push que coloca um elemento na última posição
    nome: "Samia Maria",
    parentesco: "filha",
    dataNacimento: "04/01/2014"
})

//console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNacimento ==="04/01/2014") //filter sempre retorna uma array, mesmo que vazia. NO caso no objeto cliente e no elemento dependentes será aplicado um filtro. O filtro tem como parametro dependente que indica os elementos dentro de cada elemento (pode ser qualquer nome). A arrow funtion vai fazer que dentro de cada elemento seja procurada a dataNascimento o valor 04/01/2014. O resultado será salvo na constante filhaMaisNova em forma de array, onde cada item do elemento (nome, parentesco e data Nascimento) é transformado em um item da array

console.log(filhaMaisNova[0]);//neste console, como cada elemento do objeto se tornou um item da array, precisa-se determinar em qual posição ele se encontra. No caso só se tem uma posição (posição 0) e dentro desta posição eu quero o elemento nome

cliente.dependentes.forEach(i => console.log(i.nome))