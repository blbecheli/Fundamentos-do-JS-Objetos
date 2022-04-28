const clientes = [
    {
        nome: 'Bruno',
        idade: 38,
        cpf: "123456789",
        email: 'blbecheli@gmail.com',
        fones: ["55921354786", '5511958741235'], //posso também adiconar uma array dentro de um objeto
        dependentes: [{
            nome: 'Sara Silva',
            parentesco: 'Filha',
            dataNasc: '20/03/2011'
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }],
    },
    {
        nome: 'Juliana',
        cpf: '21458795421',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '30/08/2020'
        }],
    }
]


//Spread operator (...). Este operador "espalha" os valores das chaves em uma array
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]; //No caso ... espalha os valores do objeto cliente, na posição 0, os dependentes. Fez o mesmo na posição 1

console.log(listaDependentes);
console.table(listaDependentes) //console.table imprime os valores em formato de tabela