import { Piece } from "../piece/Piece";
import { PieceFactory } from "../piece/PieceFactory";
import { InsuficientPlayersException } from "../player/InsuficientPlayersException";
import { Player } from "../player/Player";
import { Table } from "../table/Table";

export class Game {
  private table: Table;
  private players: Player[];
  private pieces: Piece[];
  private playerPos = 0;

  constructor() {
    this.table = new Table();
    this.pieces = PieceFactory.create();
    this.players = [];
  }

  nextStep() {
    return this.playerPos < this.players.length
      ? this.players[++this.playerPos]
      : 0;
  }

  play() {
    if (this.players.length < 2) {
      throw new InsuficientPlayersException();
    }

    this.distributePieces();
  }

  distributePieces() {
    while (this.pieces.length) {
      for (let i = 0; i < 7; i++) {
        for (let x = 0; x < this.players.length; ) {
          const randomPost = Math.round(Math.random() * this.pieces.length);
          const piece = this.pieces.splice(randomPost, 1)[0];
          if (!piece) {
            continue;
          }
          this.players[x].addPiece(piece);
          x++;
        }
      }

      break;
    }

    while (this.pieces.length) {
      const piece = this.pieces.pop();
      if (piece) {
        this.table.addHiddedPiece(piece);
      }
    }
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  getTable() {
    return this.table;
  }
}
