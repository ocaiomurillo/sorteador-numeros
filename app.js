function sortear() {
    let qtd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de >= ate){
      alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
      return;
    }

    if(qtd > (ate - de + 1)){
      alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
      return;
    }

    let sorteados = [];
    let numero;

    for(let i=0; i < qtd; i++){
      numero = obterNumeroAleatorio(de, ate);

      while(sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de, ate);
      }

      sorteados.push(numero);
};
    let resultados = document.getElementById('resultado')
    resultados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
  let botaoSortear = document.getElementById('btn-sortear');
  let botaoReiniciar = document.getElementById('btn-reiniciar');

  if(botaoReiniciar.classList.contains('container__botao-desabilitado')){
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
  } else {
    botaoReiniciar.classList.remove('container__botao');  
    botaoReiniciar.classList.add('container__botao-desabilitado');   
  }
}

function reiniciar(){
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}