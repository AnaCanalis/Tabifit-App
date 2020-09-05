class BotonFuncional extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-botonfuncional", this);    
     }
     
     connectedCallback() {
      const elementoBoton = this.shadowRoot.querySelector("button");
    }    
  }


        
     customElements.define ("tabifit-botonfuncional", BotonFuncional);

   
