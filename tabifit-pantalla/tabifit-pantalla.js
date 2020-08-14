class Pantalla extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-pantalla", this);    
     }
    }
    
     customElements.define ("tabifit-pantalla", Pantalla);