import { Piece } from "../piece/Piece";
import { Player } from "../player/Player";

export class Table {
  static MAX_CHAIRS = 4;
  private chairs: Player[];

  private viewedPieces: Piece[];
  private hiddedPieces: Piece[];

  constructor() {
    this.viewedPieces = [];
    this.hiddedPieces = [];
    this.chairs = [];
  }

  addPlayer(player: Player) {
    if (this.chairs.length < Table.MAX_CHAIRS) {
      this.chairs.push(player);
    }
  }

  addViewedPiece(piece: Piece) {
    this.viewedPieces.push(piece);
  }

  addHiddedPiece(piece: Piece) {
    this.hiddedPieces.push(piece);
  }

  retriveHiddedPiece() {
    if (this.hiddedPieces.length > 0) {
      return this.hiddedPieces.pop();
    }
  }
}
