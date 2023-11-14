let botonSonido = new Audio("/sounds/botonbailar.mp3");
let botonAudio = new Audio("/sounds/sisa.mp3");
let boton1 = document.querySelector(".play");
let boton2 = document.querySelector(".pause");
let sonido = "play";

function obtenerTiempoFaltante(fechaLimite)
{
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

// console.log(obtenerTiempo('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaregresiva(tiempoFaltante, reloj)
{
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval(() =>
    {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML = `<div class="contador-js">
                            <div class="contado">
                                <H2>${t.diasFaltantes}</H2>
                                <H3>D</H3>
                            </div>
                            <div class="contado">
                                <H2>${t.horasFaltantes}</H2>
                                <H3>H</H3>
                            </div>
                            <div class="contado">
                                <H2>${t.minutosFaltantes}</H2>
                                <H3>M</H3>
                            </div>
                            <div class="contado">
                                <H2>${t.segundosFaltantes}</H2>
                                <H3>S</H3>
                            </div>
                        </div>`;

        if (t.tiempoFaltante < 1)
        {
            clearInterval(tiempoActual);
            const texto = document.querySelector("h1").innerHTML = ("¡Feliz Navidad!");
            let botones = document.querySelector(".botones").classList.add("on");
            let gif = document.querySelector("body").classList.add("on");

            if (sonido == "play")
            {
                sonido = "pausa"
                boton1.addEventListener('click', () =>
                {
                    botonAudio.play();
                })
            }

            if (sonido == "pausa")
            {
                sonido = "play";
                boton2.addEventListener('click', () =>
                {
                    botonAudio.pause();
                })
            }




            e.innerHTML = `<div class="contador-js">
                            <div class="contado">
                                <H2>00</H2>
                                <H3>D</H3>
                            </div>
                            <div class="contado">
                                <H2>00</H2>
                                <H3>H</H3>
                            </div>
                            <div class="contado">
                                <H2>00</H2>
                                <H3>M</H3>
                            </div>
                            <div class="contado">
                                <H2>00</H2>
                                <H3>S</H3>
                            </div>
                        </div>`;

        }


    }, 1000)
};


cuentaregresiva('Nov 14 2023 11:54:00 GMT-0500', 'cuentaRegresiva', '¡Feliz Navidad!');