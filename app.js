function criaCartao(categoria, pergunta, resposta) {
let container = document.getElementById('container')
  let cartao = document.createElement('article')
  cartao.className = 'cartao'

  cartao.innerHTML = `
    <div class="cartao_conteudo">
                    <h3>filmes</h3>
                    <div class="cartao_conteudo_pergunta">
                        <p>quais são os filme que mais ganhou premios no mundo?</p>

                    </div>
                    <div class="cartao_conteudo_resposta">
                        <p>Ben-Hur, Titanic, O Senhor dos Anéis: O Retorno do Rei todos detem 11 estatuetas cada!</p>
                    </div>
                </div>
                `
}
