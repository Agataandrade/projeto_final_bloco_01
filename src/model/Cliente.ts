export class Cliente {
  constructor(
    private _nome: string,
    private _dataNascimento: string,

  ) {}

  public get nome(): string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }

  public get dataNascimento(): string {
    return this._dataNascimento;
  }
  public set dataNascimento(data: string) {
    this._dataNascimento = data;
  }

  }
