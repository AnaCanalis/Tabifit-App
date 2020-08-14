class TituloGrande extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-titulogrande", this);    
     }
    }
    
     customElements.define ("tabifit-titulogrande", TituloGrande);