function cargarBotones (url){
    let botonesClase = document.getElementById("botones_clase")
    fetch (url)
        .then((response) => {
            return response.json();
        }).then ((datos) => {
            for (let i=0; i<datos.length; i++){
                caja = document.createElement ("div")
                let titulo = document.createElement ("p")
                let icon = document.createElement ("img") 
                caja.setAttribute ("id", datos[i].clase)
                caja.setAttribute ("class", "botones")
                caja.setAttribute ("role", "button")
                caja.setAttribute ("onClick", "clikeando(this.id)")
                titulo.innerText = datos[i].clase
                icon.src = datos[i].img;
                caja.appendChild(icon);
                caja.appendChild(titulo);
                botonesClase.appendChild(caja)
            }
        })
}

function tomarItemsCargados(){
    let jlista = JSON.parse(localStorage.getItem(key_lista))
    console.log (jlista)
    if(jlista !== null){
        for (let i = 0; i<jlista.length; i++){
            let electroLista = document.createElement("li");
            electroLista.innerText = jlista[i].nombre;
            sel.appendChild(electroLista);
        }
    }  
}

function cargarLocalStorage (){
    for(let i= 0; i<electroStorage.length; i++){
            ArraySeleccion.push (new objetoElectro(electroStorage[i].clase, electroStorage[i].nombre, electroStorage[i].kwh, electroStorage[i].hora, electroStorage[i].id)); 
        }
}

function resumen(){
    total.innerText = " ";
    let res = document.getElementById("resumen");
    let consumo = 0;
    let consumoAcumulado = 0;
    for (let i= 0; i<ArraySeleccion.length; i++){
        consumo = ArraySeleccion[i].hora * ArraySeleccion[i].kwh;
        consumoAcumulado += consumo;   
    }
    let cant = ArraySeleccion.length;
    total = document.createElement("h5");
    total.innerText = "Electrodomésticos cargados: " + cant + "\nSu consumo total en 24hs es: " + parseFloat(consumoAcumulado).toFixed (2) + "kwh\nSu consumo total en un mes es: " + parseFloat(consumoAcumulado*30).toFixed (2) + "kwh";
    res.appendChild(total);
    
}



function crearModal (){
    let modal = document.getElementById("modalAdd");
    let contenedorModal = document.createElement("div");
    let close = document.createElement("div");
    let tituloModal  = document.createElement("h2");
    let subtModal1 = document.createElement("h4");
    let subtModal2 = document.createElement("h4");
    seleccionElectro = document.createElement("select");
    let inputHoras = document.createElement("input");
    error = document.createElement("p")
    let botonAgregar = document.createElement("button");
    //Dar atributos a los elemntos del modal
    contenedorModal.setAttribute ("id", "modal_contenedor");
    contenedorModal.setAttribute ("class", "modal_contenedor");
    close.setAttribute ("id", "close_modal");
    close.setAttribute ("class", "close_modal");
    seleccionElectro.setAttribute ("id", "seleccion_electro");
    inputHoras.setAttribute ("id", "horas_uso");
    inputHoras.setAttribute ("autocomplete", "off");
    botonAgregar.setAttribute ("id", "boton_carga");
    error.setAttribute ("id", "error");
    error.setAttribute ("class", "error")
    tituloModal.innerText = "Carga de Electrodomesticos";
    subtModal1.innerText = "Electrodoméstico";
    subtModal2.innerText = "Horas de Uso";
    botonAgregar.innerText = "Agregar";
    close.innerText = "X";
    inputHoras.placeholder = "1 a 24";
    contenedorModal.appendChild(tituloModal)
    contenedorModal.appendChild(close)
    contenedorModal.appendChild(subtModal1) 
    contenedorModal.appendChild( seleccionElectro)
    contenedorModal.appendChild( subtModal2)
    contenedorModal.appendChild( inputHoras)
    contenedorModal.appendChild(error);
    contenedorModal.appendChild( botonAgregar);
    modal.appendChild(contenedorModal);  
}

function clikeando(clicked_id){
    let bandera =clicked_id;
    modalAdd.style.display = "flex";
    crearSeleccion(bandera);
}

function resetSelect () {
    if (seleccionElectro != " "){
        seleccionElectro.innerText = " "
    }
}

function crearSeleccion (bandera) {
    resetSelect()
    let optionNula = document.createElement("option");
    optionNula.innerText = "Selecciona un electrodomestico";
    optionNula.value =" ";
    seleccionElectro.append(optionNula);
    ArrayElectro.forEach((objetoElectro)=>{
        let opcionElectro = document.createElement("option");
        if (objetoElectro.clase === bandera){
            Clase = ArrayElectro.filter ((objetoElectro)=>objetoElectro.clase.includes(bandera));
            opcionElectro.innerText = objetoElectro.nombre;
            console.log(opcionElectro)
            seleccionElectro.appendChild(opcionElectro);
        }  
    })
}



function verificarHoras(horas){
    error.innerText ="";
    while (horas != isNaN  && horas != null){
        if (isNaN(horas)){
            error.innerText = "Ingresá un número válido";
            return false;
        }
        else if ((horas < 1) || (horas > 24)){
            error.innerText = "Ingresá un número entre 1 y 24";
            return false;
        }
        return true;
    }

}




















































































