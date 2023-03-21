export class Telefono {
    private _numero: number;
    private _tipo?: string;
  
    constructor
    (numero: number, tipo?: string) {
      this._numero = numero;
      this._tipo = tipo;
    }
  
    // Métodos getter y setter
  
    get numero(): number {
      return this._numero;
    }
  
    set numero(numero: number) {
      this._numero = numero;
    }
  
    get tipo(): string | undefined {
      return this._tipo;
    }
  
    set tipo(tipo: string | undefined) {
      this._tipo = tipo;
    }
  }
  