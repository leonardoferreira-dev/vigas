document.getElementById("gerarEstrutura").addEventListener("click", () => {
  const numVaos = parseInt(document.getElementById("numVaos").value);
  const apoioInicio = document
    .getElementById("apoioInicio")
    .value.replace("inicio_", "");
  const apoioFinal = document
    .getElementById("apoioFinal")
    .value.replace("final_", "");

  const estruturaDiv = document.getElementById("estrutura");
  estruturaDiv.innerHTML = ""; // Limpa a estrutura anterior

  if (numVaos === 1) {
    // Validação das 6 combinações possíveis
    const combinacoesValidas = [
      "fixo_fixo",
      "fixo_engaste",
      "engaste_engaste",
      "engaste_fixo",
      "semapoio_engaste",
      "engaste_semapoio",
    ];

    const nomeImagem = `viga_${apoioInicio}_${apoioFinal}`;
    if (combinacoesValidas.includes(nomeImagem)) {
      const imgViga = document.createElement("img");
      imgViga.src = `imagens/${nomeImagem}.png`;
      imgViga.alt = `Estrutura: ${nomeImagem}`;
      estruturaDiv.appendChild(imgViga);
    } else {
      alert("Combinação inválida para uma viga única!");
    }
  } else {
    // Montagem da estrutura para múltiplos vãos
    const imgInicio = document.createElement("img");
    imgInicio.src = `imagens/inicio_${apoioInicio}.png`;
    imgInicio.alt = "Apoio Inicial";
    estruturaDiv.appendChild(imgInicio);

    for (let i = 0; i < numVaos - 1; i++) {
      const imgMeio = document.createElement("img");
      imgMeio.src = `imagens/meio_vao.png`;
      imgMeio.alt = "Meio do Vão";
      estruturaDiv.appendChild(imgMeio);
    }

    const imgFinal = document.createElement("img");
    imgFinal.src = `imagens/final_${apoioFinal}.png`;
    imgFinal.alt = "Apoio Final";
    estruturaDiv.appendChild(imgFinal);
  }
});
