function canDrive() {
        let beer = document.getElementById("agenew").value; 
          
        if(beer === '') {
            alert('Error por favor ingresa el numero de cervezas que bebiste');
        }
        else if (beer < 1 ) {
            alert ('Estas en condiciones de manejar');
        }else{
            alert ('No puedes manejar');
        }
    }

const boton = document.querySelector("#boton");
boton.addEventListener("click", function(evento){
	
    canDrive()
});



