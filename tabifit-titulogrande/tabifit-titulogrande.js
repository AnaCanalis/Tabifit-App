class TituloGrande extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-titulogrande", this);
     }
    }
    
     customElements.define ("tabifit-titulogrande", TituloGrande);

     
 /* class TituloGrande extends HTMLElement {
  constructor(){
    super();
    cargarTemplate("#tabifit-titulogrande", this); 
    this.tipoTituloGrande = this.getAttribute("tipo");   
  }
  connectedCallback(){
    const elementoTituloGrande = this.shadowRoot.querySelector("h1");
    elementoTituloGrande.className = this.tipoTituloGrande;
  }
  }
  
  customElements.define ("tabifit-titulogrande", TituloGrande);
  
       