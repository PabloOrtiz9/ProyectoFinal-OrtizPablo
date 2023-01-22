let ArraySeleccion = Array();

const url = "./data.json";
const key_lista = "lista"
let bandera = "";
let horas;
let caja = "";
let j;
let seleccionElectro;
let total ="";
let error;


let sel = document.getElementById("storage");

cargarBotones(url)  
tomarItemsCargados ();
crearModal(); 

let electroStorage = JSON.parse(localStorage.getItem(key_lista))
if (electroStorage !== null){
    cargarLocalStorage() 
}  

let horasUso = document.getElementById("horas_uso");
horasUso.addEventListener("input", ()=>{
   horas=parseInt(horasUso.value)
    verificarHoras(horas)
})

let btnClose = document.getElementById("close_modal")
btnClose.addEventListener("click", (e) => {
    if(e.target.classList.contains("close_modal")){
        modalAdd.style.display ="none"
    }
})

let btnCarga = document.getElementById("boton_carga");
btnCarga.addEventListener("click", () =>{

    if(verificarHoras(horas)){
            for(let i=0; i<ArrayElectro.length; i++){
                if(ArrayElectro[i].nombre === seleccionElectro.value){
                    j = ArraySeleccion.length;
                    j++;
                    ArraySeleccion.push (new objetoElectro (ArrayElectro[i].clase, ArrayElectro[i].nombre, ArrayElectro[i].kwh, horas, j));
                    console.log(ArraySeleccion)
                    
                    let electroCargado = document.createElement("li");
                    electroCargado.innerText = seleccionElectro.value;
                    sel.appendChild(electroCargado);
                        
                    localStorage.setItem(key_lista,JSON.stringify(ArraySeleccion))
                    seleccionElectro.value = " ";
                    horasUso.value = " ";
                        
                    Swal.fire('Se Cargo el Electrodomestico')
                }
            }
    }else{
        Swal.fire('Intenta de nuevo');
    }
})   
  

let btnCalcular = document.getElementById("boton_calcular");
btnCalcular.addEventListener("click", () => {
    resumen(ArraySeleccion)
})


let limpiar = document.getElementById("limpiar_lista");
limpiar.addEventListener("click", () =>{
    localStorage.removeItem(key_lista);
    location.reload();
})