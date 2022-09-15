export{}
class decodificador {
    private marca: string;
    private modelo: string;

    constructor(paramMarca: string, paramModelo: string) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }
}


class televisor {
    private decodificador: decodificador;
    private estaPrendido: boolean;
    public volumenActual: number;

    constructor(paramDecodificador: decodificador, paramEstaPrendido: boolean, paramVolumen: number) {
        this.decodificador = paramDecodificador;
        this.estaPrendido = paramEstaPrendido;
        this.volumenActual = paramVolumen;

    };

    prenderApagar(): void {
        if (this.estaPrendido === true) {
            this.estaPrendido = false
        } else {
            this.estaPrendido = true;
        }
    }
    obtenerVolumen(): number {
        return this.volumenActual;
    }
    subirVolumen(): void {
        this.volumenActual = this.volumenActual++;
    }

    bajarVolumen(): void {
        this.volumenActual = this.volumenActual--;
    }
}

let decodificador1 = new decodificador("sarasa","sarasaV1.0")
let televisor1 = new televisor(decodificador1, true,25)

console.log(televisor1)



