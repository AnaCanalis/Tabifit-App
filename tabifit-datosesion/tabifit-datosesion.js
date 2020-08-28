class DatoSesion extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-datosesion", this);    
     }
    }
    
     customElements.define ("tabifit-datosesion", DatoSesion);
