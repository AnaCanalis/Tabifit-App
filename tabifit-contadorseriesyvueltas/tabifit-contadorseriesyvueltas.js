class ContadorSeriesYVueltas extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contadorseriesyvueltas", this);    
     }
    }
    
     customElements.define ("tabifit-contadorseriesyvueltas", ContadorSeriesYVueltas);