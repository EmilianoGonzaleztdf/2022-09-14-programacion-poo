class auto {
    private modelo: string;
    private marca: string;
    private anio: number;

    constructor(paramModelo: string, paramMarca?: string, paramAnio?: number) {
        this.modelo = paramModelo;

        if(paramMarca === undefined){
            this.marca = "marca generica"
        }else{
            this.marca = paramMarca;
        }
        

        if (paramAnio === undefined) {
            this.anio = -1;
        } else {
            this.anio = paramAnio
        }
    }

    setAnio(paramAnio:number): void{
        this.anio=paramAnio;
    }
    getAnio():number{
        return this.anio
    }

}

let autoDeGuido = new auto ("vw","gol",)
let autoDeJoaquin = new auto ("sarasa",)

console.log(autoDeJoaquin)
console.log(autoDeGuido)