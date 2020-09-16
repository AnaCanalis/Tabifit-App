class TituloMedianoSuperior extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-titulomedianosuperior", this);  
      this.tipoTituloMedianoSuperior = this.getAttribute("tipo");  
     }
     connectedCallback(){
       const elementoTituloMedianoSuperior = this.shadowRoot.querySelector("h2");
       elementoTituloMedianoSuperior.className = this.tipoTituloMedianoSuperior;
     }
    }
    
     customElements.define ("tabifit-titulomedianosuperior", TituloMedianoSuperior);
    
    
    
     