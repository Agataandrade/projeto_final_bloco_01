import { Pedido } from './src/model/Pedido';
import { Cliente } from './src/model/Cliente';


const readlineSync = require('readline-sync');
const pedidos: Pedido[] = [];

main();

export function main() {
  console.log("\n👙 Olá, seja bem-vinda à Doce Verão! Vamos montar seu pedido! 👙\n");
  let nome = readlineSync.question("Digite seu nome: ");
  let dataNascimento = readlineSync.question("Digite sua data de nascimento (dd/mm/aaaa): ");
  let cliente = new Cliente(nome, dataNascimento);
  let pedidoAtual = new Pedido(cliente);
  let opcao = 0;

  while (opcao !== 9) {
    console.log("\n🌴 DOCE VERÃO - MENU DE COMPRAS 🌴");
    console.log("0 - Alterar nome e data de nascimento");
    console.log("1 - Escolher modelo");
    console.log("2 - Escolher tamanho");
    console.log("3 - Escolher cor");
    console.log("4 - Escolher estampa");
    console.log("5 - Escolher forma de entrega");
    console.log("6 - Escolher forma de pagamento");
    console.log("7 - Finalizar pedido");
    console.log("8 - Cancelar compra");
    console.log("9 - Sair");

    opcao = parseInt(readlineSync.question("Escolha uma opção: "));

    switch (opcao) {
      case 0:
        nome = readlineSync.question("Novo nome: ");
        dataNascimento = readlineSync.question("Nova data de nascimento: ");
        cliente = new Cliente(nome, dataNascimento);
        pedidoAtual = new Pedido(cliente); 
        console.log("✅ Dados atualizados!");
        break;
      case 1:
        pedidoAtual.modelo = readlineSync.question("Modelo desejado: ");
        break;
      case 2:
        pedidoAtual.tamanho = readlineSync.question("Tamanho (P/M/G/GG): ");
        break;
      case 3:
        pedidoAtual.cor = readlineSync.question("Cor desejada: ");
        break;
      case 4:
        pedidoAtual.estampa = readlineSync.question("Estampa (Liso, Floral, listra, etc.):  ");
        break;
      case 5:
        pedidoAtual.entrega = readlineSync.question("Forma de entrega (Correios ou Retirada):  ");
        break;
      case 6:
        pedidoAtual.pagamento = readlineSync.question("Forma de pagamento (Pix, Cartão, Boleto): ");
        break;
      case 7:
        try {
          pedidos.push(pedidoAtual);
          pedidoAtual.visualizar();
          console.log("✅ Pedido finalizado com sucesso!");
          pedidoAtual = new Pedido(cliente); 
        } catch (error: any) {
          console.log("🚨 Erro ao finalizar pedido:", error.message);
        }
        break;
      case 8:
        pedidoAtual = new Pedido(cliente); 
        console.log("❌ Pedido cancelado.");
        break;
      case 9:
        console.log("\n🧾 Pedidos realizados:");
        pedidos.forEach((p, index) => {
          console.log(`\n📦 Pedido ${index + 1}`);
          p.visualizar();
        });
        console.log("🌊 Volte sempre!");
        break;
      default:
        console.log("⚠️ Opção inválida.");
    }
  }
}
