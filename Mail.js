"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(direccion, tipo) {
        this._direccion = direccion;
        this._tipo = tipo;
    }
    Object.defineProperty(Mail.prototype, "direccion", {
        // métodos getter y setter
        get: function () {
            return this._direccion;
        },
        set: function (direccion) {
            this._direccion = direccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
