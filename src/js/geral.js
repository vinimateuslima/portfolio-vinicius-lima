let botaoTopo = document.querySelector(".voltar-ao-topo");

botaoTopo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// Aparecer ou desaparecer botão de voltar ao topo
function botaoVoltarTopo() {
  let botaoVoltarTopo = document.querySelector(".voltar-ao-topo");
  if (window.scrollY > 800) {
    botaoVoltarTopo.classList.remove("hide");
  } else {
    botaoVoltarTopo.classList.add("hide");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const botaoTopo = document.querySelector(".voltar-ao-topo");

  function mudarCorBotao() {
    const alturaDaJanelaAtual = window.innerHeight;
    const rolagemAtual = window.scrollY + alturaDaJanelaAtual / 2;

    let secaoAtual = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (rolagemAtual >= sectionTop && rolagemAtual <= sectionBottom) {
        secaoAtual = section;
      }
    });

    // Mudar a cor do botão de acordo com a seção
    if (secaoAtual.id == "skills" || secaoAtual.id == "contato") {
      botaoTopo.style.border = "2px solid var(--cor-secundaria)";
    } else {
      botaoTopo.style.border = "none";
    }
  }

  window.addEventListener("scroll", botaoVoltarTopo);
  window.addEventListener("scroll", mudarCorBotao);
});
