import { Direccion,} from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

export class Persona {
private _nombre: string;
private _apellidos: string;
private _edad: number;
private _dni: string;
private _cumpleaños: string;
private _colorFavorito: string;
private _sexo: string;
private _direcciones: Direccion[];
private _telefonos: Telefono[];
private _mails: Mail[];
private _notas: string;

constructor(
nombre: string,
apellidos: string,
edad: number,
dni: string,
cumpleaños: string,
colorFavorito: string,
sexo: string,
direcciones: Direccion[],
telefonos: Telefono[],
mails: Mail[],
notas: string
) 
{
this._nombre = nombre;
this._apellidos = apellidos;
this._edad = edad;
this._dni = dni;
this._cumpleaños = cumpleaños;
this._colorFavorito = colorFavorito;
this._sexo = sexo;
this._direcciones = direcciones;
this._telefonos = telefonos;
this._mails = mails;
this._notas = notas;
}

// métodos getter y setter
get nombre(): string {
return this._nombre;
}

set nombre(nombre: string) {
this._nombre = nombre;
}

get apellidos(): string {
return this._apellidos;
}

set apellidos(apellidos: string) {
this._apellidos = apellidos;
}

get edad(): number {
return this._edad;
}

set edad(edad: number) {
this._edad = edad;
}

get dni(): string {
return this._dni;
}

set dni(dni: string) {
this._dni = dni;
}

get cumpleanos(): string {
return this._cumpleaños;
}

set cumpleaños(cumpleanos: string) {
this._cumpleaños = cumpleanos;
}

get colorFavorito(): string {
return this._colorFavorito;
}

set colorFavorito(colorFavorito: string) {
this._colorFavorito = colorFavorito;
}

get sexo(): string {
return this._sexo;
}

set sexo(sexo: string) {
this._sexo = sexo;
}

get direcciones(): Direccion[] {
return this._direcciones;
}

set direcciones(direcciones: Direccion[]) {
this._direcciones = direcciones;
}

get telefonos(): Telefono[] {
return this._telefonos;
}

set telefonos(telefonos: Telefono[]) {
this._telefonos = telefonos;
}

get mails(): Mail[] {
return this._mails;
}

set mails(mails: Mail[]) {
this._mails = mails;
}

get notas(): string {
return this._notas;
}

set notas(notas: string) {
this._notas = notas;
}
}