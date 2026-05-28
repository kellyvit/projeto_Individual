const acoes = [
  { icone: '🏭', texto: 'Implementar sensores IIoT para monitorar e reduzir o consumo de água nos processos industriais.' },
  { icone: '⚡', texto: 'Utilizar Inteligência Artificial para otimizar o consumo de energia nas fábricas.' },
  { icone: '🔄', texto: 'Automatizar sistemas de triagem para reciclar materiais e reduzir desperdícios.' },
  { icone: '☀️', texto: 'Migrar matrizes energéticas industriais para fontes renováveis e limpas.' },
  { icone: '💻', texto: 'Utilizar Gêmeos Digitais para simular processos e evitar o descarte de matéria-prima.' },
  { icone: '🛡️', texto: 'Aplicar cibersegurança (IT/OT) para proteger sistemas de controle ambiental contra ataques.' }
];

const container = document.querySelector('#container-acoes');

for (let i = 0; i < acoes.length; i++) {
    const item = acoes[i];
    const div = document.createElement('div');
    div.className = "acao-icone";
    div.innerHTML = `<div class="icone">${item.icone}</div><p class="acoes-texto">${item.texto}</p>`;
    
    container.appendChild(div);
}

const nav = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        nav.style.opacity = '0.5';
    } else {
        nav.style.opacity = '1';
    }
});


let indiceAtual = 0;

function mostrarProximacao() {
    const paragrafo = document.getElementById('mostraAcao');
    
    const acao = acoes[indiceAtual];

    paragrafo.innerHTML = `${acao.icone} ${acao.texto}`;
    
    indiceAtual++;
    
    if (indiceAtual >= acoes.length) {
        indiceAtual = 0;
    }
}
// Faz a imagem sem fundo girar assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
    const imagemSustentavel = document.querySelector('.img\\.acoes img');
    if (imagemSustentavel) {
        imagemSustentavel.classList.add('imagem-rodando');
    }
});;