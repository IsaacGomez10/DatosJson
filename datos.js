class Busqueda {
    constructor() {
        this.personaje = [
            {"nombre": "Lisa","edad": 10,"familiar": ["Homero"," Marge"],"cabello": "Rubio","comprobado": true,"icono": "simpsonsIcons lisa","imagen": "4.png"},
            {"nombre": "Bart","edad": 9,"familiar": ["Homero"," Marge"],"cabello": "Rubio","icono": "simpsonsIcons bart","imagen": "1.png"},
            {"nombre": "Maggie","edad": 2,"familiar": ["Homero"," Marge"],"cabello": "Rubio","comprobado": true,"imagen": "5.png"},
            {"nombre": "Patty","edad": 37,"familiar": ["Jacqueline"],"cabello": "Gris","comprobado": true,"imagen": "10.png"},
            {"nombre": "Selma","edad": 38,"familiar": ["Jacqueline"],"cabello": "Gris","comprobado": false,"imagen": "12.png"},
            {"nombre": "Rod","edad": 9,"familiar": ["Ned"],"cabello": "Cafe","comprobado": true,"imagen": "11.png"},
            {"nombre": "Todd","edad": 8,"familiar": ["Ned"],"cabello": "Cafe","comprobado": true,"imagen": "13.png"},
            {"nombre": "Abe","edad": 65,"familiar": ["Root"],"cabello": "Rubio","comprobado": true,"imagen": "14.png"},
            {"nombre": "Mona","edad": 65,"familiar": ["Root"],"cabello": "Blanco","comprobado": false,"imagen": "8.png"},
            {"nombre": "Jacqueline","edad": 63,"familiar": ["Root"],"cabello": "Blanco","comprobado": true,"imagen": "3.png"},
            {"nombre": "Homero","edad": 42,"familiar": ["Abe"," Mona"],"cabello": "Pelon","comprobado": false,"icono": "simpsonsIcons homer","enabled": false,"imagen": "2.png"},
            {"nombre": "Marge","edad": 35,"familiar": ["Jacqueline"],"cabello": "Azul","comprobado": true,"icono": "simpsonsIcons marge","imagen": "7.png"},
            {"nombre": "Ned","edad": 40,"familiar": ["Root"],"cabello": "Cafe","comprobado": true,"imagen": "9.png"},
            {"nombre": "Apu","edad": 40,"familiar": ["Root"],"cabello": "Negro","comprobado": true,"imagen": "15.png"},
            {"nombre": "Manjula","edad": 40,"familiar": ["Apu"],"cabello": "Marron","comprobado": false,"imagen": "6.png"}];
        this.personajesSP = this.personaje;
        this.onInit();
        this.onInitC();
        this.onInitF();
        console.log(this.personaje);

    }
    onInit() {
        let cuerpo = document.getElementById("cuerpo");
        while (cuerpo.rows.length > 0) {
            cuerpo.deleteRow(0);
        }
        this.personaje.forEach(personajes => {
            let fila = cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML = personajes.nombre;
            fila.insertCell(1).innerHTML = personajes.edad;
            fila.insertCell(2).innerHTML = personajes.cabello;
            fila.insertCell(3).innerHTML = personajes.comprobado;
        });
    }

    onInitC() {
        let cuerpo = document.getElementById("cuerpo2");
        while (cuerpo.rows.length > 0) {
            cuerpo.deleteRow(0);
        }
        this.personaje.forEach(personajes => {
            let fila = cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML = personajes.cabello;
            fila.insertCell(1).innerHTML = personajes.nombre;
        });
    }

    onInitF() {
        let cuerpo = document.getElementById("cuerpo3");
        while (cuerpo.rows.length > 0) {
            cuerpo.deleteRow(0);
        }
        this.personaje.forEach(personajes => {
            let fila = cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML = personajes.nombre;
            fila.insertCell(1).innerHTML = personajes.familiar.length;
        });
    }

    buscar(id) {
        let busqueda = document.getElementById(id).value;
        this.personaje = this.personajesSP;
        this.personaje = this.personaje.filter(personajes =>{
            return personajes.nombre.toLowerCase().indexOf(busqueda) > -1;        
        });
        this.onInit();
    }
    buscarCabello(id) {
        let busqueda = document.getElementById(id).value;
        this.personaje = this.personajesSP;
        this.personaje = this.personaje.filter(personajes =>{
            return personajes.cabello.toLowerCase().indexOf(busqueda) > -1;        
        });
        this.onInitC();
    }
}
let busqueda = new Busqueda();
let busquedaCabello = new Busqueda();

let form = document.getElementById('busquedaForm');
form.addEventListener('submit',()=>{
    busqueda.buscar('valor');
});

let forma = document.getElementById('busquedaForm2');
forma.addEventListener('submit',()=>{
    busquedaCabello.buscarCabello('valor2');
});
