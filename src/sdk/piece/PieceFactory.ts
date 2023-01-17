import { HalfOfThePiece } from "./HalfOfThePiece";
import { Piece } from "./Piece";

export class PieceFactory {
  static create(): Piece[] {
    const pieces = [];
    for (let i = 0; i < 6; i++) {
      for (let x = i; x < 6; x++) {
        const halfOne = new HalfOfThePiece(x);
        const halfTow = new HalfOfThePiece(i);

        pieces.push(new Piece(halfOne, halfTow));
      }
    }

    return pieces;
  }
}
