class BotonesNavegacion extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-botonesnavegacion", this);    
     }
    }
    
     customElements.define ("tabifit-botonesnavegacion", BotonesNavegacion);