class Contador extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contador", this);    
     }
    }
    
     customElements.define ("tabifit-contador", Contador);

  