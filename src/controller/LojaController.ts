import { Pedido } from "../model/Pedido";

export class Loja {
  private pedidos: Pedido[] = [];

  public cadastrar(pedido: Pedido): void {
    this.pedidos.push(pedido);
    console.log("✅ Pedido cadastrado com sucesso!");
  }

  public listar(): void {
    if (this.pedidos.length === 0) {
      console.log("❗ Nenhum pedido encontrado.");
      return;
    }

    this.pedidos.forEach((pedido, i) => {
      console.log(`\n🔢 Pedido ${i + 1}`);
      pedido.visualizar();
    });
  }

  public atualizar(posicao: number, novoPedido: Pedido): void {
    try {
      if (posicao < 0 || posicao >= this.pedidos.length) {
        throw new Error("Número de pedido inválido.");
      }

      this.pedidos[posicao] = novoPedido;
      console.log("✅ Pedido atualizado com sucesso!");
    } catch (error: any) {
      console.log("🚨 Erro ao atualizar:", error.message);
    }
  }

  public deletar(posicao: number): void {
    try {
      if (posicao < 0 || posicao >= this.pedidos.length) {
        throw new Error("Número de pedido inválido.");
      }

      this.pedidos.splice(posicao, 1);
      console.log("🗑️ Pedido deletado com sucesso!");
    } catch (error: any) {
      console.log("🚨 Erro ao deletar:", error.message);
    }
  }
}
