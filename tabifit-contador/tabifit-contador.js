class Contador extends HTMLElement {
  constructor(){
    super();
    cargarTemplate("#tabifit-contador", this);    
   }
   connectedCallback(){
    this.agregarComportamientoSumarRestar();
    this.sumar();
    this.restar();
  }

  agregarComportamientoSumarRestar(){
    const component = this.shadowRoot;
    component.querySelector(".sumar").addEventListener("click",() => this.sumar());
    component.querySelector(".restar").addEventListener("click", () => this.restar());
  }


  sumar() {
    const component = this.shadowRoot;
    const suma = component.querySelector(".sumar");
    let valorInput = parseInt(component.querySelector("[valorInput]").value);
    if(suma) {
        valorInput += 1;
      }
      component.querySelector("[valorInput]").value = valorInput;
    }
  
  restar() {
    const component = this.shadowRoot;
    const resta = component.querySelector(".restar");
    let valorInput = parseInt(component.querySelector("[valorInput]").value);
    if (resta) {
      valorInput -=1;
    }
    component.querySelector("[valorInput]").value = valorInput;
  }
  numeroDeSeries(){
    const component = this.shadowRoot;
    const numeroDeSeries = component.querySelector(".contadorSeries input");
    numeroDeSeries.addEventListener("onchange", (event) => {
     const numeroDeSeriesChanged = new CustomEvent("numeroDeSeriesChanged", {
       detail: {
         seriesElegidas: numeroDeSeries.value,
       }
     });
     this.dispatchEvent(numeroDeSeriesChanged);
    });

  }

  numeroDeVueltas(){
    const component = this.shadowRoot;
    const numeroDeVueltas = component.querySelector(".contadorVueltas input");
    numeroDeVueltas.addEventListener("onchange", (event) => {
      const numeroDeVueltasChanged = new CustomEvent("numeroDeVueltasChanged", {
        detail: {
          vueltasElegidas: numeroDeVueltas.value,
        }
      });
      this.dispatchEvent(numeroDeVueltasChanged)
    });
  }
}

customElements.define ("tabifit-contador", Contador);