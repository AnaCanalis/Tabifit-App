class Contador extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contador", this);    
     }
    }
    
     customElements.define ("tabifit-contador", Contador);

     
    
    const botonAgregarSerieVuelta = document.querySelector(".sumar");
    const botonQuitarSerieVuelta = document.querySelector(".restar");

    botonAgregarSerieVuelta.addEventListener("click", agregarSerieVuelta);
    botonQuitarSerieVuelta.addEventListener("click", quitarSerieVuelta);