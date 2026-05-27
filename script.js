function responder() {

    let pergunta = document.getElementById("pergunta").value.toLowerCase();

    let resposta = document.getElementById("resposta");

    if(pergunta.includes("drone")) {

        resposta.innerHTML =
        "🚁 Drones agrícolas conseguem monitorar plantações e reduzir o uso de pesticidas.";

    }

    else if(pergunta.includes("água")) {

        resposta.innerHTML =
        "💧 Sensores inteligentes ajudam a economizar milhares de litros de água.";

    }

    else if(pergunta.includes("ia")) {

        resposta.innerHTML =
        "🤖 A Inteligência Artificial pode prever pragas e melhorar a produtividade.";

    }

    else {

        resposta.innerHTML =
        "🌱 A tecnologia no agro ajuda a produzir alimentos com sustentabilidade.";

    }
}
