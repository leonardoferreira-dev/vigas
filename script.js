document.getElementById("gerarEstrutura").addEventListener("click", () => {
  const numVaos = parseInt(document.getElementById("numVaos").value);
  const apoioInicio = document.getElementById("apoioInicio").value;
  const apoioFinal = document.getElementById("apoioFinal").value;

  const estruturaDiv = document.getElementById("estrutura");
  estruturaDiv.innerHTML = ""; // Limpa a estrutura anterior

  // Adiciona apoio inicial
  const imgInicio = document.createElement("img");
  imgInicio.src = `imagens/${apoioInicio}.png`;
  estruturaDiv.appendChild(imgInicio);

  // Adiciona os meios dos vãos
  for (let i = 0; i < numVaos - 1; i++) {
    const imgMeio = document.createElement("img");
    imgMeio.src = `imagens/meio_vao.png`;
    estruturaDiv.appendChild(imgMeio);
  }

  // Adiciona apoio final
  const imgFinal = document.createElement("img");
  imgFinal.src = `imagens/${apoioFinal}.png`;
  estruturaDiv.appendChild(imgFinal);
});
