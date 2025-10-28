let fondoBtn = document.getElementById("btnF")
let caja = document.getElementById("caja");
let letras = document.getElementById("letras");
fondoBtn.addEventListener("touchstart", ()=>{
    let hexa = (Math.floor(Math.random() * (5000 - 0 + 1)) + 0).toString();
    caja.style.backgroundColor = "#" + hexa 
})
letras.addEventListener("touchstart", ()=>{
    if (caja.style.color == "white") {
        caja.style.color = "black";    
    } else {
        caja.style.color = "white";    
    }
})

let send = document.getElementById("send");

let res1 = document.getElementById("pregunta1")
let res2 = document.getElementById("pregunta2")
let res3 = document.getElementById("pregunta3")
let res4 = document.getElementById("pregunta4")

let msjR = document.getElementById("msjR")
let puntacion = 0

send.addEventListener("touchstart", ()=>{    // Reiniciamos puntaje cada vez que se hace click
    puntacion = 0;

    // Mostramos mensaje de carga
    msjR.innerHTML = `
        <p class="text-warning fw-bold text-opacity-75">Estamos analizando tu puntuación, esto no demorará mucho...</p>
    `;

    // Simulamos tiempo de "análisis" (2 segundos)
    if (res1.value != "" || res2.value !="" || res3.value != "" || res4.value != "") {
            setTimeout(() => {
        if (res1.value == "playa") {
            puntacion += 2.25;
        }
        if (res2.value == "alpes" || res2.value == "tero") {
            puntacion += 2.25;
        }
        if (res3.value == "todas") {
            puntacion += 2.25;
        }
        if (res4.value == "reputation") {
            puntacion += 2.25;
        }
        let mensj = "";
        if (puntacion >= 4) {
            mensj= "regularizaste la materia, segui esforzandote"
        } else if (puntacion >= 7) {
            mensj= "promocionate la materia, te debo un beso";
        } else {
            mensj= "sos un desastre, a rendirla libre";
        }
        // Mostramos el resultado después del delay
        msjR.innerHTML = `
            <p>Tu puntuación final es:</p>
            <p id="puntuacion" class="fw-bold">${puntacion}</p>
            <p class"fw-bold"> ${mensj} </p>
        `;
    }, 3000)
    } else {
        msjR.innerHTML = `<p class="fs-2 fw-bold"> No es tan dificil, tenes que seleccionar alguna, no las dejes vacias, dios mío Lourdes... </p>`;
    }

})

let msjFinal = document.getElementById("msjFinal");
let si = document.getElementById("si");
let no = document.getElementById("no");

no.addEventListener("touchstart", (e) => {
    e.preventDefault(); // evita que se llegue a hacer clic
    moverBoton();
});

function moverBoton() {
    // Rango de movimiento (en píxeles)
    let posTB = Math.floor(Math.random() * (500 - 0 + 1)) + 0;  // de 0 a 500 px vertical
    let posLR = Math.floor(Math.random() * (300 - 0 + 1)) + 0;  // de 0 a 300 px horizontal

    // Movimiento suave
    no.style.position = "fixed";
    no.style.transition = "top 0.3s ease, left 0.3s ease";
    no.style.top = `${posTB}px`;
    no.style.left = `${posLR}px`;
}
si.addEventListener("touchstart", ()=>{
    msjFinal.innerText = "yo te quiero más"
})