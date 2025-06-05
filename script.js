// Seleziono gli elementi che mi servono tramite il metodo .getElementById e li salvo in una costante

const lampadinaOff = document.getElementById("lampOff");
const lampadinaOn = document.getElementById("lampOn")
const button = document.getElementById("button");
console.log(lampadinaOff.src);
console.log(button.innerHTML);

// Quando avviene un certo evento (in questo caso il click sul bottone) devo far eseguire una funzione 

button.addEventListener("click", function () {
    button.innerHTML = "Spegni la lampadina";
    lampadinaOff.className = "d-none";
    lampadinaOn.className = "d-block";
})
