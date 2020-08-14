class TituloMedianoInferior extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-titulomedianoinferior", this);    
     }
    }
    
     customElements.define ("tabifit-titulomedianoinferior", TituloMedianoInferior);