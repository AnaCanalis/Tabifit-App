class BotonesNavegacion extends HTMLElement {
    constructor(){
      super();
      /*this.onAnteriorClicked = null;
      this.onSiguienteClicked = null;*/
      cargarTemplate("#tabifit-botonesnavegacion", this);    
     }
     connectedCallback(){
      this.shadowRoot.querySelector(".botonizquierdo").addEventListener("click", () =>{
        this.onAnteriorClicked();
      });
      this.shadowRoot.querySelector(".botonderecho").addEventListener("click", () =>{
        this.onSiguienteClicked();
      });
     }
    }
     
    customElements.define ("tabifit-botonesnavegacion", BotonesNavegacion);