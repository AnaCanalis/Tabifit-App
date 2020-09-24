class BotonFuncional extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-botonfuncional", this);    
      this.tipoBoton= this.getAttribute("tipo");
     }
     
     connectedCallback() {
      const elementoBoton = this.shadowRoot.querySelector("button");
      elementoBoton.className = this.tipoBoton;
      this.comportamientoCambiarPantalla();
    }   
    comportamientoCambiarPantalla() {
      const component = this.shadowRoot;
      component.querySelector("button").addEventListener("click", () => this.pantallaSiguienteAnterior());
     }
    
     pantallaSiguienteAnterior () {
       const component = this.shadowRoot;
       const contenido = component.querySelector("#pantalla-series");
       if(contenido.this.style.display === "none") {
         contenido.style.display = "flex";
       } else {
         contenido.style.display = "none";
       }
  }
}
        
     customElements.define ("tabifit-botonfuncional", BotonFuncional);