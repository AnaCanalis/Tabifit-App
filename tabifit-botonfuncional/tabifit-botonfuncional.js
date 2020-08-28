class BotonFuncional extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-botonfuncional", this);    
      this.tipoBoton = this.getAttribute("tipo")
     }
     
     connectedCallback() {
      const elementoBoton = this.shadowRoot.querySelector("button");
      elementoBoton.className = this.tipoBoton;
    }    
  }


        
     customElements.define ("tabifit-botonfuncional", BotonFuncional);

   
