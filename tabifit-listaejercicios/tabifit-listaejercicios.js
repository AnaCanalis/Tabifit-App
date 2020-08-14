class ListaEjercicios extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-listaejercicios", this);    
     }
    }
    
     customElements.define ("tabifit-listaejercicios", ListaEjercicios);  
