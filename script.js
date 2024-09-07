document.addEventListener("DOMContentLoaded", function () {
    function multiplicarApuesta(multiplicador) {
        const apuestaInput = document.getElementById('card-description');
        const apuesta = parseFloat(apuestaInput.value);

        if (isNaN(apuesta) || apuesta < 0) {
            alert('Por favor, introduce una apuesta válida.');
            return;
        }

        const resultado = apuesta * multiplicador;
        apuestaInput.value = Math.round(resultado);
    }

    document.getElementById('card-multiply-X2').addEventListener('click', function () {
        multiplicarApuesta(2);
    });

    document.getElementById('card-multiply-X3').addEventListener('click', function () {
        multiplicarApuesta(3);
    });

    document.getElementById('card-multiply-X4').addEventListener('click', function () {
        multiplicarApuesta(4);
    });

    document.getElementById("card-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("card-sport").value;
        const tipodeapuesta = document.getElementById("card-bet").value;
        const description = document.getElementById("card-description").value;
        const bgColor = document.getElementById("card-bg-color").value;
        const borderColor = document.getElementById("card-border-color").value;

        console.log({
            title: title,
            tipodeapuesta: tipodeapuesta,
            description: description,
            bgColor: bgColor,
            borderColor: borderColor
        });

        const cardContainer = document.getElementById("cards-container");
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.backgroundColor = bgColor;
        newCard.style.borderColor = borderColor;

        newCard.innerHTML = `
            <div class="card-content">
                <h3>${title}</h3>
                <h3>${tipodeapuesta}</h3>
                <h3>${description}</h3>
            </div>
        `;

        cardContainer.appendChild(newCard);

        document.getElementById("card-form").reset();
    });
});