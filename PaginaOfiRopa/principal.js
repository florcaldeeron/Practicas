var arreglo = window.document.querySelectorAll(".precios");
var manejadorDeEvento = function (objetoEvento) {
    principal.start();
};
arreglo.forEach(function (boton){
boton.addEventListener("click", manejadorDeEvento);
})
class evento{
    start(){
        console.log(2500);
    }
}
var principal = new evento();
