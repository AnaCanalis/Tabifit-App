class ContadorGira extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contadorgira", this);    
    }
    /*  this.numeroInicial = parseInt(this.getAttribute("numeroInicial"));
     }

    connectedCallback () { 
      this.shadowRoot.querySelector("p").addEventListener("loadstart", function())
    }*/
  }
    
     customElements.define ("tabifit-contadorgira", ContadorGira);


    
   /* // Resultado esperado:
    // Escribimos cómo queremos que se vea la solución.
    const componente = document.querySelector("tabifit-cuentaregresiva");
    
    componente.iniciarCuenta(50);
    setTimeout(function() {
      componente.reiniciarCuenta();
    }, 11000);
    // componente.pausarCuenta();
    // componente.reanudarCuenta();
    // componente.reiniciarCuenta();
  


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
     
       
       