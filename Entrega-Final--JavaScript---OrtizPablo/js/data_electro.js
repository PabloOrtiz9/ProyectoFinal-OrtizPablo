let ArrayElectro = [];

class objetoElectro {
    constructor(clase, nombre, kwh, horas,j) {
        this.clase = clase;
        this.nombre = nombre;
        this.kwh = kwh;   
        this.hora = horas;
        this.id = j;     
    }
}


ArrayElectro.push (new objetoElectro ("Refrigeracion", "Freezer", 0.05));
ArrayElectro.push (new objetoElectro ("Refrigeracion", "Heladera sin Freezer", 0.03));
ArrayElectro.push (new objetoElectro ("Refrigeracion", "Heladera con Freezer", 0.08));
ArrayElectro.push (new objetoElectro ("Linea Blanca", "Lavarropa Automático", 0.05));
ArrayElectro.push (new objetoElectro ("Linea Blanca", "Aspiradora", 0.02));
ArrayElectro.push (new objetoElectro ("Linea Blanca", "Plancha", 0.10));
ArrayElectro.push (new objetoElectro ("Linea Blanca", "Estractor de Aire", 0.04));
ArrayElectro.push (new objetoElectro ("Audio y Video", "TV 32 LED", 0.18));
ArrayElectro.push (new objetoElectro ("Audio y Video", "Notebook", 0.2));

