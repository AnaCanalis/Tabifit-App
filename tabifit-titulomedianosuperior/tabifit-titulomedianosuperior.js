class TituloMedianoSuperior extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-titulomedianosuperior", this);    
     }
    }
    
     customElements.define ("tabifit-titulomedianosuperior", TituloMedianoSuperior);