export class Mail {
    private _direccion: string;
    private _tipo?: string;
    
    constructor(direccion: string ,tipo?: string) {
    this._direccion = direccion;
    this._tipo = tipo;
    }
    
    // métodos getter y setter
    get direccion(): string {
    return this._direccion;
    }
    
    set direccion(direccion: string) {
    this._direccion = direccion;
    
    }
    get tipo(): string | undefined {
        return this._tipo;
      }
    
      set tipo(tipo: string | undefined) {
        this._tipo = tipo;
    }
}