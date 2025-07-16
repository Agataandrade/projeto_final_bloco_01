import { Compra } from './Compra';
import { IResumo } from './IResumo';

export class Pedido extends Compra implements IResumo {

    private _estampa: string;
    private _entrega: string;
    private _pagamento: string;

    constructor(modelo: string, tamanho: string, cor: string, estampa: string, entrega: string, pagamento: string) {
        super(modelo, tamanho, cor); // Chama o construtor da classe Compra
        this._estampa = estampa;
        this._entrega = entrega;
        this._pagamento = pagamento;
    }

    public get estampa(): string {
        return this._estampa;
    }

    public set estampa(estampa: string) {
        this._estampa = estampa;
    }

    public get entrega(): string {
        return this._entrega;
    }

    public set entrega(entrega: string) {
        this._entrega = entrega;
    }

    public get pagamento(): string {
        return this._pagamento;
    }

    public set pagamento(pagamento: string) {
        this._pagamento = pagamento;
    }

    public visualizar(): void {
        console.log("\n🛍️ RESUMO DO PEDIDO:");
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Tamanho: ${this._tamanho}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Estampa: ${this._estampa}`);
        console.log(`Entrega: ${this._entrega}`);
        console.log(`Pagamento: ${this._pagamento}`);
    }
}
