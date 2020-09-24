class TituloGrande extends HTMLElement {
  constructor(){
    super();
    cargarTemplate("#tabifit-titulogrande", this); 
    this.slotTituloGrande = this.getAttribute("slot");   
  }
  connectedCallback(){
    const elementoTituloGrande = this.shadowRoot.querySelector("p");
    elementoTituloGrande.className = this.slotTituloGrande;
  }
  }
  
  customElements.define ("tabifit-titulogrande", TituloGrande);
  
