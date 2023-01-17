import { HalfOfThePiece } from "./HalfOfThePiece";

export class Piece {
  private halfOfThePieceOne: HalfOfThePiece;
  private halfOfThePieceTwo: HalfOfThePiece;

  constructor(
    halfOfThePieceOne: HalfOfThePiece,
    halfOfThePieceTwo: HalfOfThePiece
  ) {
    this.halfOfThePieceOne = halfOfThePieceOne;
    this.halfOfThePieceTwo = halfOfThePieceTwo;
  }

  getHalfOfThePieceOne() {
    return this.halfOfThePieceOne;
  }

  getHalfOfThePieceTwo() {
    return this.halfOfThePieceTwo;
  }
}
