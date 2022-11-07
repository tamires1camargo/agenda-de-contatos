const form = document.getElementById('form-contatos');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaSomaFinal();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-completo');
    const inputNumTelefone = document.getElementById('numero-telefone');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(inputNumTelefone.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumTelefone.value}</td>`;
        linha += '</td>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaSomaFinal() {
    const somaFinal = calculaSomaFinal();

    document.getElementById('soma-final-valor').innerHTML = somaFinal

}

function calculaSomaFinal() {
    let somaDosTelefones = 0;

    for (let i = 0; i < telefones.length; i++) {
        somaDosTelefones += telefones[i];
    }

    return somaDosTelefones

}

