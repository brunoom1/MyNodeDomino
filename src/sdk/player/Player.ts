import { Piece } from "../piece/Piece";

export class Player {
  private pieces: Piece[];

  constructor() {
    this.pieces = [];
  }

  addPiece(piece: Piece) {
    this.pieces.push(piece);
  }

  getPieces(): Piece[] {
    return this.pieces;
  }
}
