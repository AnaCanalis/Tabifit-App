class ContadorGira extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contadorgira", this);    
     }
    }
    
     customElements.define ("tabifit-contadorgira", ContadorGira);


     /*let contador= 10;
     let cuentaRegresiva = document.querySelector('.cuenta-regresiva');
     let ciclo = setInterval (function(){  
       contador -=1;
       cuentaRegresiva.innerHTML = contador;
       if(contador === 0) {
         clearInterval(ciclo);
       }
     }, 1000);
     */
     
       
       