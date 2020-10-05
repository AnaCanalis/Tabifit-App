class ContadorTitila extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contadortitila", this);   
      const elementoPantalla = document.querySelector("#tabifit-pantalla");  
     }
     connectedCallback(){
      this.shadowRoot.querySelector("span");
      this.shadowRoot.querySelector(".contador-titila");
      let numero = parseInt(this.getAttribute("numeroinicial"));
      let cuentaAtras = document.querySelector('.contador-titila');
      let periodo = setInterval (function(){
      numero -=1;
      cuentaAtras.innerHTML = numero;
      if(numero === 4){
      clearInterval(periodo);
      }
    }, 1000);
  }  
}
  
     customElements.define ("tabifit-contadortitila", ContadorTitila);