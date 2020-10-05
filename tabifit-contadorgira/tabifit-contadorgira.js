class ContadorGira extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contadorgira", this);
      const elementoPantalla = document.querySelector("#tabifit-pantalla"); 
    }
    
    connectedCallback () { 
      this.shadowRoot.querySelector("span");
      this.shadowRoot.querySelector(".cuenta-regresiva");
      let contador = parseInt(this.getAttribute("numeroinicial"));
      let cuentaRegresiva = document.querySelector(".cuenta-regresiva");
      if(contador === 0){
        return;
      }
      let ciclo = setInterval (function(){
      contador -=1;
      cuentaRegresiva.innerHTML = contador;
      if(contador === 0){
      clearInterval(ciclo);
        }
      }, 1000);
    }
}
  customElements.define ("tabifit-contadorgira", ContadorGira);