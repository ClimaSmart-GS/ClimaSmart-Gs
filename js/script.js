function showInfo(region) {
    const infos = document.querySelectorAll('.info');
    infos.forEach(info => info.style.display = 'none');
    document.getElementById('info-' + region).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("climaForm");
    const resposta = document.getElementById("resposta");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const regiao = document.getElementById("regiao").value;
      const clima = document.getElementById("clima").value.toLowerCase();
      const alertas = document.querySelector('input[name="alertas"]:checked').value;
      const infra = document.getElementById("infra").value;
      const preparado = document.querySelector('input[name="preparado"]:checked').value;
  
      let mensagem = `<h3>🔍 Análise da sua situação:</h3>`;
      mensagem += `<p> Região: <strong>${regiao}</strong></p>`;
      mensagem += `<p> Clima atual: <strong>${clima}</strong></p>`;
      mensagem += `<p> Você conhece alertas: <strong>${alertas}</strong></p>`;
      mensagem += `<p> Área de risco: <strong>${infra}</strong></p>`;
      mensagem += `<p> Preparado para evacuação: <strong>${preparado}</strong></p>`;
  
      // Análise com base nas respostas
      mensagem += `<hr><h4>🧠 Recomendação personalizada:</h4>`;
  
      if (alertas === "Não") {
        mensagem += `<p>⚠️ Recomendamos acessar a aba <strong>Alertas</strong> para verificar riscos atualizados em sua região.</p>`;
      }
  
      if (infra === "Sim") {
        mensagem += `<p>🚨 Sua moradia está em área de risco. Mantenha seus documentos prontos e tenha uma rota de evacuação.</p>`;
      } else if (infra === "Não sei") {
        mensagem += `<p>🔍 Sugestão: consulte a Defesa Civil local ou nosso <a href="./global.html">mapa global</a> para verificar zonas de risco.</p>`;
      }
  
      if (clima.includes("chuva") || clima.includes("tempestade") || clima.includes("alagamento")) {
        mensagem += `<p>🌧️ Alerta: condições de chuva podem indicar enchentes ou deslizamentos. Evite áreas baixas e encostas.</p>`;
      }
  
      if (clima.includes("calor") || clima.includes("seca") || clima.includes("quente")) {
        mensagem += `<p>🔥 Mantenha-se hidratado e em local fresco. Verifique também alertas de queimadas.</p>`;
      }
  
      if (preparado === "Não") {
        mensagem += `<p>🧭 Você pode encontrar orientações na aba <strong>Formulário</strong> e <strong>Alertas</strong> para se preparar melhor.</p>`;
      } else {
        mensagem += `<p>✅ Ótimo! Saber o que fazer em emergências salva vidas.</p>`;
      }
  
      resposta.innerHTML = mensagem;
    });
  });

      //Alertas
      const alertasSimulados = {
        "Nacional": [
        { tipo: "Enchente", local: "RS", risco: "Alto", orgao: "Defesa Civil" },
        { tipo: "Incêndio Florestal", local: "AM", risco: "Crítico", orgao: "INPE" }
      ],
        "Sul": [
        { tipo: "Enchente", local: "Porto Alegre", risco: "Alto", orgao: "Defesa Civil" }
      ],
        "Sudeste": [
        { tipo: "Deslizamento", local: "Serra do Mar", risco: "Moderado", orgao: "CEMADEN" }
      ],
        "Centro-Oeste": [
        { tipo: "Queimada", local: "Pantanal", risco: "Crítico", orgao: "INPE" }
      ],
        "Nordeste": [
        { tipo: "Seca", local: "Bahia", risco: "Alto", orgao: "ANA" }
      ],
        "Norte": [
        { tipo: "Incêndio", local: "Amazônia", risco: "Extremo", orgao: "INPE" }
      ]
    };
    function carregarAlertas() {
      const regiao = document.getElementById("regiao").value;
      const alertas = alertasSimulados[regiao] || [];
      const container = document.getElementById("area-alertas");

      if (alertas.length === 0) {
        container.innerHTML = "<p>✅ Nenhum alerta crítico no momento.</p>";
        return;
      }

      let html = `
        <h3>📢 Alertas Atuais</h3>
        <table class="alerta-tabela">
        <tr><th>Tipo</th><th>Local</th><th>Risco</th><th>Órgão Responsável</th></tr>
    `;
      alertas.forEach(a => {
        html += `<tr>
        <td>${a.tipo}</td>
        <td>${a.local}</td>
        <td>${a.risco}</td>
        <td>${a.orgao}</td>
      </tr>`;
    });
    html += "</table>";
    container.innerHTML = html;
  }
  function ativarNotificacoes() {
    alert("🔔 Notificações ativadas! Você será avisado sobre novos alertas na sua região.");
  }


  