function selecionarTexto(input) {
  let textos = document.querySelectorAll("[data-radio]");

  // Percorrendo todos os textos
  textos.forEach(function (item) {
    item.classList.add("hide");
  });

  // Deixando visível apenas o texto que irá aparecer
  let textoParaAparecer = document.querySelector(`[data-radio=${input.id}]`);

  textoParaAparecer.classList.remove("hide");
}
