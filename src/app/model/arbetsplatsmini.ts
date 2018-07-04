export class ArbetsplatsMini {
  private _kundnr: number;
  private _namn; string;

  get kundnr(): number {
    return this._kundnr;
  }

  set kundnr(kundnr: number) {
    this._kundnr = kundnr;
  }

  get namn(): string {
    return this._namn;
  }

  set namn(namn: string) {
    this._namn = namn;
  }
}
