import { Game } from "./sdk/game/Game";
import { Player } from "./sdk/player/Player";

export default () => {
  const game = new Game();

  const player1 = new Player();
  const player2 = new Player();

  game.addPlayer(player1);
  game.addPlayer(player2);

  game.play();

  const player = game.nextStep(); // position 0 - firstMobiment
  // -- aguarda jogada do player inicial

  console.log(player);
  console.log(game.getTable());

  /**
  try {
    player.playPiece(0); // jogar peça id: 0
  } catch (err) {
    // pode apresentar diversos erros:
    // - peça jogada, é inválida - jogador deve pular, ou comprar peças
    if (err instanceof Error) {
      console.log("undefined error");
    }
  }

  try {
    player.jump();
  } catch (err) {
    // jogador não pode pular por algum motivo
  }

  try {
    const newPiece = game.getTable().retriveHiddedPiece();
    player.addPiece(newPiece);
  } catch (err) {
    // terminaram as peças
  }

  **/

  return game;
};
