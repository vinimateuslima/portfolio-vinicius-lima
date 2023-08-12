document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const pendulos = document.querySelector(".pendulos");
  const personagem = document.querySelector(".personagem");

  // Mudar letra da placa do personagem ao carregar
  let imagemDoPersonagem = Math.floor(Math.random() * 5) + 1;
  personagem.src = `src/assets/img/personagem-eu-frase-${imagemDoPersonagem}.png`;


  function passarPorSecao() {
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

    // Efeito do personagem descendo ao passar sobre a seção
    if (secaoAtual.id == "sobre") {
      pendulos.style.animation = "pendulo-descendo 1s";
      pendulos.style.marginTop = "-70px";
    } else {
      pendulos.style.animation = "pendulo-subindo 1s";
      pendulos.style.marginTop = "-450px";
    }

   
  }

  window.addEventListener("scroll", passarPorSecao);
});
