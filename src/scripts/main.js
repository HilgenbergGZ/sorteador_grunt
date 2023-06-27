document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numeroMaximo').value;
        numeroMaximo = parseInt(numeroMaximo);
    
        let numAleatorio = Math.random() * numeroMaximo;
        numAleatorio = Math.floor(numAleatorio + 1);

        document.getElementById('resultadoValor').innerText = numAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})