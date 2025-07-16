export abstract class Compra {
    protected _modelo: string;
    protected _tamanho: string;
    protected _cor: string;

    constructor(modelo: string, tamanho: string, cor: string) {
        this._modelo = modelo;
        this._tamanho = tamanho;
        this._cor = cor;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(modelo: string) {
        this._modelo = modelo;
    }

    public get tamanho(): string {
        return this._tamanho;
    }

    public set tamanho(tamanho: string) {
        this._tamanho = tamanho;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(cor: string) {
        this._cor = cor;
    }

    public abstract visualizar(): void;
}
