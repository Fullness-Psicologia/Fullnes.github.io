const desplegarInformacion1 = document.getElementById("desplegarInformacion1");
const desplegarInformacion2 = document.getElementById("desplegarInformacion2");
const desplegarInformacion3 = document.getElementById("desplegarInformacion3");
const desplegarInformacion4 = document.getElementById("desplegarInformacion4");
const desplegarInformacion5 = document.getElementById("desplegarInformacion5");
const desplegarInformacion6 = document.getElementById("desplegarInformacion6");

const cerrar1 = document.getElementById("cerrar1");
const cerrar2 = document.getElementById("cerrar2");
const cerrar3 = document.getElementById("cerrar3");
const cerrar4 = document.getElementById("cerrar4");
const cerrar5 = document.getElementById("cerrar5");
const cerrar6 = document.getElementById("cerrar6");


const informacion1 = document.getElementById("informacion1");
const informacion2 = document.getElementById("informacion2");
const informacion3 = document.getElementById("informacion3");
const informacion4 = document.getElementById("informacion4");
const informacion5 = document.getElementById("informacion5");
const informacion6 = document.getElementById("informacion6");

desplegarInformacion1.addEventListener("click", () => {
    informacion1.style.display = "flex";
    informacion2.style.display = "none";
    informacion3.style.display = "none";
    informacion4.style.display = "none";
    informacion5.style.display = "none";
    informacion6.style.display = "none";
    cerrar1.addEventListener("click", () => {
        informacion1.style.display = "none";
    })
})

desplegarInformacion2.addEventListener("click", () => {
    informacion2.style.display = "flex";
    informacion1.style.display = "none";
    informacion3.style.display = "none";
    informacion4.style.display = "none";
    informacion5.style.display = "none";
    informacion6.style.display = "none";
    cerrar2.addEventListener("click", () => {
        informacion2.style.display = "none";
    })
})

desplegarInformacion3.addEventListener("click", () => {
    informacion3.style.display = "flex";
    informacion1.style.display = "none";
    informacion2.style.display = "none";
    informacion4.style.display = "none";
    informacion5.style.display = "none";
    informacion6.style.display = "none";
    cerrar3.addEventListener("click", () => {
        informacion3.style.display = "none";
    })
})

desplegarInformacion4.addEventListener("click", () => {
    informacion4.style.display = "flex";
    informacion1.style.display = "none";
    informacion2.style.display = "none";
    informacion3.style.display = "none";
    informacion5.style.display = "none";
    informacion6.style.display = "none";
    cerrar4.addEventListener("click", () => {
        informacion4.style.display = "none";
    })
})

desplegarInformacion5.addEventListener("click", () => {
    informacion5.style.display = "flex";
    informacion1.style.display = "none";
    informacion2.style.display = "none";
    informacion3.style.display = "none";
    informacion4.style.display = "none";
    informacion6.style.display = "none";
    cerrar5.addEventListener("click", () => {
        informacion5.style.display = "none";
    })
})

desplegarInformacion6.addEventListener("click", () => {
    informacion6.style.display = "flex";
    informacion1.style.display = "none";
    informacion2.style.display = "none";
    informacion3.style.display = "none";
    informacion4.style.display = "none";
    informacion5.style.display = "none";
    cerrar6.addEventListener("click", () => {
        informacion6.style.display = "none";
    })
})