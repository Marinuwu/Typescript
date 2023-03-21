import { Direccion, } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";
import { Persona } from "./Persona";

//crear registro de persona1

const direccion = new Direccion('Mariano Padilla', 2, '30003', 'Murcia', 'Murcia',4,'Izquierda');
const telefono = new Telefono(653245436, "Móvil");
const mail = new Mail("emaildejemplo1@gmail.com");
const persona = new Persona(
  "Laura",
  "Lopez",
  45,
  "73649574B",
  "01-01-1999",
  "Azul",
  "Mujer",
  [direccion],
  [telefono],
  [mail],
  "Nota numero 1"
);


//crea un registro de una persona2
const direccion2 = new Direccion('Ramon Gallud', 109, '03182', 'Torrevieja', 'Alicante',4,'A');
const telefono2 = new Telefono(682736155, "Móvil");
const mail2 = new Mail("emaildejemplo2@gmail.com");
const persona2 = new Persona(
  "Maria",  
  "Garcia", 
  25, 
  "12345678A", 
  "17-04-1997",
  "Verde",
  "Mujer",
  [direccion],
  [telefono],
  [mail],
  "Nota numero 2"
);


//crea un registro de una persona3
const direccion3 = new Direccion('Gregorio Marañon', 115, '73984', 'Carabanchel', 'Madrid',2,'B');
const telefono3 = new Telefono(682736155, "Móvil");
const mail3 = new Mail("emailejemplo3#gmail.com");
const persona3 = new Persona(
  "Marina",
  "Lorente",
  21,      
  "48829273C",  
  "04-01-2002",
  "Rojo",
  "Mujer",
  [direccion],
  [telefono],
  [mail],
  "Nota numero 3"
);

console.log(persona);
console.log(persona2);
console.log(persona3);

//Modificar uno de los registros de persona añadidos, realizando la búsqueda por DNI y añadiendo una nueva dirección, un nuevo mail y un nuevo teléfono
const buscarDNI = "12345678A";
const nuevadireccion = new Direccion('Juan Aparicio', 5, '76543', 'Orihuela', 'Alicante',3,'C');
const nuevotelefono = new Telefono(098765432, "Móvil");
const nuevomail = new Mail("mailnuevo@gmail.com");
//añadir nuevos elementos 
persona2.direcciones.push(nuevadireccion);
persona2.telefonos.push(nuevotelefono);
persona2.mails.push(nuevomail);
//mostrar los nuevos elementos
console.log(persona2);


