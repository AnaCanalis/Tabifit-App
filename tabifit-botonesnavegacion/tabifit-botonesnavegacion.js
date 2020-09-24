class BotonesNavegacion extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-botonesnavegacion", this);    
     }
    }
     
     customElements.define ("tabifit-botonesnavegacion", BotonesNavegacion);

    /* connectedCallback() {
      this.agregarComportamientoOcultarMostrar();
    }
    agregarComportamientoOcultarMostrar() {
      const component = this.shadowRoot;  
      component.querySelector("button").addEventListener("click", () => this.ocultarMostrar());        
    }
    ocultarMostrar() {
      const component = this.shadowRoot;
      const contenido = component.querySelector("#contenido");
      const flecha = component.querySelector("#flecha");
      if (contenido.style.display === "none") {
        contenido.style.display = "block";
        flecha.innerHTML = "🔼";
      } else {
        contenido.style.display = "none";
        flecha.innerHTML = "🔽";
      }
    }
  }
  
  customElements.define("mas-informacion", MasInformacion);