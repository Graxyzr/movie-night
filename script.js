function mostrarNome () {

    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerHTML = "Nome do Filme: " + nome;

}

function filmeDuracao () {

    var tempo = document.getElementById("tempo").value;
    var h = tempo / 60;
    var m = h * 60;
    var tempo = h + " horas " + m + " minutos";
    document.getElementById("resposta2").innerHTML = "Duração: " + tempo;

}

var converter = document.getElementById("converter");
converter.addEventListener("click", mostrarNome);
converter.addEventListener("click", filmeDuracao);
