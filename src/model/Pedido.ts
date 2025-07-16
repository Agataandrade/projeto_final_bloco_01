import { Cliente } from "./Cliente";

export class Pedido {
  private _cliente: Cliente;
  private _modelo: string = "";
  private _tamanho: string = "";
  private _cor: string = "";
  private _estampa: string = "";
  private _entrega: string = "";
  private _pagamento: string = "";

  constructor(cliente: Cliente) {
    this._cliente = cliente;
  }

 
  public get cliente(): Cliente {
    return this._cliente;
  }

  public get modelo(): string {
    return this._modelo;
  }

  public set modelo(value: string) {
    this._modelo = value;
  }

  public get tamanho(): string {
    return this._tamanho;
  }

  public set tamanho(value: string) {
    this._tamanho = value;
  }

  public get cor(): string {
    return this._cor;
  }

  public set cor(value: string) {
    this._cor = value;
  }

  public get estampa(): string {
    return this._estampa;
  }

  public set estampa(value: string) {
    this._estampa = value;
  }

  public get entrega(): string {
    return this._entrega;
  }

  public set entrega(value: string) {
    this._entrega = value;
  }

  public get pagamento(): string {
    return this._pagamento;
  }

  public set pagamento(value: string) {
    this._pagamento = value;
  }

  public visualizar(): void {
    console.log("\n🛍️  RESUMO DO PEDIDO:");
    console.log(`Cliente: ${this._cliente.nome} (${this._cliente.dataNascimento})`);
    console.log(`Modelo: ${this._modelo}`);
    console.log(`Tamanho: ${this._tamanho}`);
    console.log(`Cor: ${this._cor}`);
    console.log(`Estampa: ${this._estampa}`);
    console.log(`Entrega: ${this._entrega}`);
    console.log(`Pagamento: ${this._pagamento}`);
  }
}
