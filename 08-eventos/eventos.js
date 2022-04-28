const pagina = document.querySelector('body');
const titulo = pagina.querySelector('h1');
const msg = pagina.querySelector('#mensagem');
const sub01 = pagina.querySelector('#subtitulo-exemplo01');


sub01.addEventListener('mouseover',function(){
    msg.textContent = "Olá! você passou o mouse em cima...";
});

sub01.addEventListener('mouseout', function(){
    msg.textContent = ""
});

// exemplo 02
const botao = pagina.querySelector('#noturno');
botao.addEventListener('click', function() {
    pagina.classList.toggle('modo-noturno');
    if ( botao.textContent == 'Ativar' ){
        botao.textContent = 'Desativar';
    } else {
        botao.textContent = 'Ativar';
    }
});

/* Exemplo 3: formulário */
const formulario = pagina.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const campoNota1 = formulario.querySelector('#nota1'); 
const campoNota2 = formulario.querySelector('#nota2'); 
const corpoTabela = pagina.querySelector('tbody');

formulario.addEventListener('submit',function(event){
    // previne o comportamento padrão do formulário
    event.preventDefault();

    /* Capturando os dados digitados */
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    /* Calculando a média */
    let media = calculaMedia(nota1,nota2);

    /* Verificando a sitação */
    let situacao = verificaSituacao(media);

    /* Montagemdo resumo do aluno */
    montaResumo(nome , media , situacao);

    // Resetando o formulário
    formulario.reset();

    // levando o foco para o campo nome
    nome.focus();
});

function calculaMedia(nota1,nota2) {
    return (nota1 + nota2)/2
};

function verificaSituacao(media) {
    if (media>=7) { 
       return "aprovado";
    } else {
        return "reprovado";
        }
};

function montaResumo(nome , media , situacao) {
    // 1) Criar o elemento dinamicamente
    let linha = document.createElement('tr');

    // 2) Montar o conteúdo do elemento criado
    linha.innerHTML = `<td> ${nome} </td>
                        <td> ${media} </td>
                        <td> ${situacao} </td>`;

    // 3) Adicionar o elemento ao DOM (corpoTabela)
    corpoTabela.appendChild(linha);
};

















//const botao = pagina.querySelector('#noturno');
//botao.addEventListener('mouseout', function() {
   // pagina.classList.toggle('modo-noturno');
//});
























































































//function clique() {
  //  let nome = document.getElementById("nome").value;
    //let resultado = document.getElementById("resultado");
    //resultado.textContent = nome.value;
//}

/* Escopo local e global
for(let i = 0; i < 100; i++){
    console.log(i);
}

document.write(i);
*/


