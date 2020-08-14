class ContadorGira extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contadorgira", this);    
     }
    }
    
     customElements.define ("tabifit-contadorgira", ContadorGira);