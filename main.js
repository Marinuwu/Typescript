"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var Persona_1 = require("./Persona");
//crear registro de persona1
var direccion = new Direccion_1.Direccion('Mariano Padilla', 2, '30003', 'Murcia', 'Murcia', 4, 'Izquierda');
var telefono = new Telefono_1.Telefono(653245436, "Móvil");
var mail = new Mail_1.Mail("emaildejemplo1@gmail.com");
var persona = new Persona_1.Persona("Laura", "Lopez", 45, "73649574B", "01-01-1999", "Azul", "Mujer", [direccion], [telefono], [mail], "Nota numero 1");
//crea un registro de una persona2
var direccion2 = new Direccion_1.Direccion('Ramon Gallud', 109, '03182', 'Torrevieja', 'Alicante', 4, 'A');
var telefono2 = new Telefono_1.Telefono(682736155, "Móvil");
var mail2 = new Mail_1.Mail("emaildejemplo2@gmail.com");
var persona2 = new Persona_1.Persona("Maria", "Garcia", 25, "12345678A", "17-04-1997", "Verde", "Mujer", [direccion], [telefono], [mail], "Nota numero 2");
//crea un registro de una persona3
var direccion3 = new Direccion_1.Direccion('Gregorio Marañon', 115, '73984', 'Carabanchel', 'Madrid', 2, 'B');
var telefono3 = new Telefono_1.Telefono(682736155, "Móvil");
var mail3 = new Mail_1.Mail("emailejemplo3#gmail.com");
var persona3 = new Persona_1.Persona("Marina", "Lorente", 21, "48829273C", "04-01-2002", "Rojo", "Mujer", [direccion], [telefono], [mail], "Nota numero 3");
console.log(persona);
console.log(persona2);
console.log(persona3);
//Modificar uno de los registros de persona añadidos, realizando la búsqueda por DNI y añadiendo una nueva dirección, un nuevo mail y un nuevo teléfono
var buscarDNI = "12345678A";
var nuevadireccion = new Direccion_1.Direccion('Juan Aparicio', 5, '76543', 'Orihuela', 'Alicante', 3, 'C');
var nuevotelefono = new Telefono_1.Telefono(098765432, "Móvil");
var nuevomail = new Mail_1.Mail("mailnuevo@gmail.com");
//añadir nuevos elementos 
persona2.direcciones.push(nuevadireccion);
persona2.telefonos.push(nuevotelefono);
persona2.mails.push(nuevomail);
//mostrar los nuevos elementos
console.log(persona2);
