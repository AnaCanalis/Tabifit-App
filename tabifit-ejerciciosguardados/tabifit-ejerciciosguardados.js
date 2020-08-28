class EjerciciosGuardados extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-ejerciciosguardados", this);    
     }
    }
    
     customElements.define ("tabifit-ejerciciosguardados", EjerciciosGuardados);