// Seleziono gli elementi che mi servono tramite il metodo .getElementById e li salvo in una costante

const lampadinaOff = document.getElementById("lampOff");
const lampadinaOn = document.getElementById("lampOn");
const button = document.getElementById("button");
console.log(lampadinaOff.src);
console.log(button.innerHTML);

// Quando avviene un certo evento (in questo caso il click sul bottone) devo far eseguire una funzione 

button.addEventListener("click", function () {

    if (button.innerText === "Accendi la lampadina"
        && lampadinaOff.style.display === "block"
        && lampadinaOn.style.display === "none"
    ) {
        button.innerText = "Spegni la lampadina";
        lampadinaOff.style.display = "none";
        lampadinaOn.style.display = "block";
    } else {
        button.innerText = "Accendi la lampadina";
        lampadinaOn.style.display = "none";
        lampadinaOff.style.display = "block";
    }
})


// if (lampadinaOn.className === "d-none") {
//     lampadinaOn.className = "d-block";
//     lampadinaOff.className = "d-none"
// } else {
//     lampadinaOn.className = "d-none";
//     lampadinaOff.className = "d-block";
// }