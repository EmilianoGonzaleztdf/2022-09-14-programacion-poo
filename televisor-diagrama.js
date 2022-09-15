"use strict";
exports.__esModule = true;
var decodificador = /** @class */ (function () {
    function decodificador(paramMarca, paramModelo) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }
    return decodificador;
}());
var televisor = /** @class */ (function () {
    function televisor(paramDecodificador, paramEstaPrendido, paramVolumen) {
        this.decodificador = paramDecodificador;
        this.estaPrendido = paramEstaPrendido;
        this.volumenActual = paramVolumen;
    }
    ;
    televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    televisor.prototype.obtenerVolumen = function () {
        return this.volumenActual;
    };
    televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    televisor.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual--;
    };
    return televisor;
}());
var decodificador1 = new decodificador("sarasa", "sarasaV1.0");
var televisor1 = new televisor(decodificador1, true, 25);
console.log(televisor1);
