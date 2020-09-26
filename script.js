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
  "pantalla-repetirsesion": ["pantalla-resumensesionarepetir"],
  "pantalla-resumensesionarepetir": ["pantalla-repetirsesion", "pantalla-cuentaregresivainicial"],
  "pantalla-finejercicioactual": ["pantalla-inicial"]

});

const comenzar = document.querySelector(".boton-comenzar");
const anterior = document.querySelector(".botonizquierdo");
const siguiente = document.querySelector(".botonderecho");
 /* document.querySelector("#pantalla-series tabifit-botonesnavegacion")
 botonesNavegacionPantallaSeries.onAnteriorClicked = () => navegacion.irAPantalla...

*/
comenzar.addEventListener("click", function () {
  navegacion.irAPantalla("pantalla-series");
});

anterior.addEventListener("click", function () {
  navegacion.irAPantalla("pantalla-inicial");
});

siguiente.addEventListener("click", function () {
  navegacion.irAPantalla("pantalla-vueltas");
});

