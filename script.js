class Navegacion {
  constructor(pantallaInicial, rutas) {
    this.pantallaActual = pantallaInicial;
    this.rutas = rutas;
    
    const elementoPantalla = document.querySelector("tabifit-pantalla#" + this.pantallaActual);
    elementoPantalla.style.display = "flex";
  }

  irAPantalla(pantallaDestino) {
    if (this.rutas[this.pantallaActual].includes(pantallaDestino)) {
      this.pantallaActual = pantallaDestino;

      const pantallas = document.querySelectorAll("tabifit-pantalla");
      
      for (let indice = 0; indice < pantallas.length; indice += 1) {
        pantallas[indice].style.display = "none";
      }

      const elementoPantalla = document.querySelector("tabifit-pantalla#" + this.pantallaActual);
      elementoPantalla.style.display = "flex";
    }
  }
}

const navegacion = new Navegacion("pantalla-inicial", {
  "pantalla-inicial": ["pantalla-series", "pantalla-repetirsesion"],
  "pantalla-series": ["pantalla-inicial", "pantalla-vueltas"],
  "pantalla-vueltas": ["pantalla-series", "pantalla-ejercicios"],
  "pantalla-ejercicios": ["pantalla-vueltas", "pantalla-cuentaregresivainicial"],
  "pantalla-cuentaregresivainicial": ["pantalla-vamos"],
  "pantalla-vamos": ["pantalla-resumen"],
  "pantalla-resumen": ["pantalla-contadorrelax", "pantalla-finejercicioactual"],
  "pantalla-contadorrelax": ["pantalla-preparate"],
  "pantalla-preparate": ["pantalla-vamos"],
  "pantalla-repetirsesion": ["pantalla-inicial", "pantalla-resumensesionrepetir"],
  "pantalla-resumensesionrepetir": ["pantalla-repetirsesion", "pantalla-cuentaregresivainicial"],
  "pantalla-finejercicioactual": ["pantalla-inicial"]

});

const comenzar = document.querySelector(".boton-comenzar");
let onAnteriorClicked = document.querySelector(".botonizquierdo");
let onSiguienteClicked = document.querySelector(".botonderecho");
const repetirsesion = document.querySelector(".boton-repetirsesion");
const guardaractividad = document.querySelector(".boton-guardaractividad");
const salir = document.querySelector(".boton-salir");
const abrirdesdearchivo = document.querySelector(".boton-abrirdesdearchivo");

comenzar.addEventListener("click", function () {
  navegacion.irAPantalla("pantalla-series");
});
repetirsesion.addEventListener("click", function () {
  navegacion.irAPantalla("pantalla-repetirsesion");
});
/*guardaractividad.addEventListener("click", function () {
  navegacion.irAPantalla()VA AL BACKEND;
});*/
salir.addEventListener("click", function () {
  navegacion.irAPantalla("pantalla-inicial");
});
/*abrirdesdearchivo.addEventListener("click", function () {
  navegacion.irAPantalla() VA AL BACKEND Y SI ES EXITOSO PANTALLA 11 PREGUNTARLE A JOEL;
});*/

let pantallaAutomaticaComienzaEn = document.querySelector("#pantalla-cuentaregresivainicial");
pantallaAutomaticaComienzaEn = () => navegacion.irAPantalla("pantalla-vamos");
setTimeout(pantallaAutomaticaComienzaEn, 10000);

let pantallaAutomaticaVamos = document.querySelector("#pantalla-vamos");
pantallaAutomaticaVamos = () => navegacion.irAPantalla("pantalla-resumen");
setTimeout(pantallaAutomaticaVamos, 1000);

let pantallaAutomaticaResumen = document.querySelector("#pantalla-resumen");
pantallaAutomaticaResumen = () => navegacion.irAPantalla("pantalla-contadorrelax");
setTimeout(pantallaAutomaticaResumen, 20000);

let pantallaAutomaticaContadorRelax = document.querySelector("#pantalla-contadorrelax");
pantallaAutomaticaContadorRelax = () => navegacion.irAPantalla("pantalla-preparate");
setTimeout(pantallaAutomaticaContadorRelax, 11000);

let pantallaAutomaticaPreparate = document.querySelector("#pantalla-preparate");
pantallaAutomaticaPreparate = () => navegacion.irAPantalla("pantalla-vamos");
setTimeout(pantallaAutomaticaPreparate, 3000);

 const botonesNavegacionPantallaSeries = document.querySelector("#pantalla-series tabifit-botonesnavegacion");
 botonesNavegacionPantallaSeries.onAnteriorClicked = () => navegacion.irAPantalla("pantalla-inicial");
 botonesNavegacionPantallaSeries.onSiguienteClicked = () =>navegacion.irAPantalla("pantalla-vueltas");

 const botonesNavegacionPantallaVueltas = document.querySelector("#pantalla-vueltas tabifit-botonesnavegacion");
 botonesNavegacionPantallaVueltas.onAnteriorClicked = () => navegacion.irAPantalla("pantalla-series");
 botonesNavegacionPantallaVueltas.onSiguienteClicked = () => navegacion.irAPantalla("pantalla-ejercicios");

 const botonesNavegacionPantallaEjercicios = document.querySelector("#pantalla-ejercicios tabifit-botonesnavegacion");
 botonesNavegacionPantallaEjercicios.onAnteriorClicked = () => navegacion.irAPantalla("pantalla-vueltas");
 botonesNavegacionPantallaEjercicios.onSiguienteClicked = () => navegacion.irAPantalla("pantalla-cuentaregresivainicial");

 const botonesNavegacionPantallaRepetirSesion = document.querySelector("#pantalla-repetirsesion tabifit-botonesnavegacion");
 botonesNavegacionPantallaRepetirSesion.onAnteriorClicked = () => navegacion.irAPantalla("pantalla-inicial");
 botonesNavegacionPantallaRepetirSesion.onSiguienteClicked = () => navegacion.irAPantalla("pantalla-resumensesionrepetir");

 const botonesNavegacionPantallaResumenSesionRepetir = document.querySelector("#pantalla-resumensesionrepetir tabifit-botonesnavegacion");
 botonesNavegacionPantallaResumenSesionRepetir.onAnteriorClicked = () => navegacion.irAPantalla("pantalla-repetirsesion");
 botonesNavegacionPantallaResumenSesionRepetir.onSiguienteClicked = () => navegacion.irAPantalla("pantalla-cuentaregresivainicial");


