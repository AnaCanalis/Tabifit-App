class ContadorSeriesYVueltas extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contadorseriesyvueltas", this);    
     }

     connectedCallback(){
       let numeroDeSeries = this.shadowRoot.querySelector(".contadorSeries");
       const contador = this.shadowRoot.querySelector("tabifit-contador");
       numeroDeSeries.addEventListener("numeroDeSeriesChanged", (event) => {
         contador.setSeriesTotales(event.detail.numeroDeSeries);

      let numeroDeVueltas = this.shadowRoot.querySelector(".contadorVueltas");
      const contador2 = this. shadowRoot.querySelector("tabifit-contador");
      numeroDeVueltas.addEventListener("numeroDeVueltasChanged", (event) => {
        contador2.setVueltasTotales(event.detail.numeroDeVueltas);
      });

       });

     }
     setSeriesTotales(inputSeries){
       const inputSeriesTotales = this.shadowRoot.querySelector(".seriesTotales");
       inputSeriesTotales.innerHTML = inputSeries;
     }
     setVueltasTotales(inputVueltas){
       const inputVueltasTotales = this.shadowRoot.querySelector(".vueltasTotales");
       inputVueltasTotales.innerHTML = inputVueltas;
     }
  
     }
    
     customElements.define ("tabifit-contadorseriesyvueltas", ContadorSeriesYVueltas);