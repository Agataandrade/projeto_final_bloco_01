export class Pedido {}
const readlineSync = require('readline-sync');


main();

export function main() {
  let modelo: string = "";
  let tamanho: string = "";
  let cor: string = "";
  let estampa: string = "";
  let entrega: string = "";
  let pagamento: string = "";

  let opcao = 0;

  while (opcao !== 9) {
    console.log("\n🌴 DOCE VERÃO - MENU DE COMPRAS 🌴");
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
      case 1:
        modelo = readlineSync.question("Modelo desejado: ");
        break;
      case 2:
        tamanho = readlineSync.question("Tamanho (P/M/G/GG): ");
        break;
      case 3:
        cor = readlineSync.question("Cor desejada: ");
        break;
      case 4:
        estampa = readlineSync.question("Estampa (Liso, Floral, Listrado, etc.): ");
        break;
      case 5:
        entrega = readlineSync.question("Entrega (Correios ou Retirada): ");
        break;
      case 6:
        pagamento = readlineSync.question("Pagamento (Pix, Cartão, Boleto): ");
        break;
      case 7:
        console.log("\n🛒 RESUMO DO PEDIDO:");
        console.log(`Modelo: ${modelo}`);
        console.log(`Tamanho: ${tamanho}`);
        console.log(`Cor: ${cor}`);
        console.log(`Estampa: ${estampa}`);
        console.log(`Entrega: ${entrega}`);
        console.log(`Pagamento: ${pagamento}`);
        console.log("\n✅ Pedido finalizado com sucesso!");
        break;
      case 8:
        modelo = tamanho = cor = estampa = entrega = pagamento = "";
        console.log("Compra cancelada.");
        break;
      case 9:
        console.log("Volte sempre! 🌊");
        break;
      default:
        console.log("Opção inválida.");
    }
  }
}