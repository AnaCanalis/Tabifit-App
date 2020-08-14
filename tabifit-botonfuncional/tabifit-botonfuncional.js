class BotonFuncional extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-botonfuncional", this);    
     }
    }
    
     customElements.define ("tabifit-botonfuncional", BotonFuncional);
