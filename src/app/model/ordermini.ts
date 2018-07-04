export class OrderMini {
  private _id: number;
  private _rubrik: string;
  private _yrke: string;
  private _beskrivning;
  private _sistaPubliceringsdatum: Date;

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter rubrik
   * @return {string}
   */
  public get rubrik(): string {
    return this._rubrik;
  }

  /**
   * Getter yrke
   * @return {string}
   */
  public get yrke(): string {
    return this._yrke;
  }

  /**
   * Getter sistaPubliceringsdatum
   * @return {Date}
   */
  public get sistaPubliceringsdatum(): Date {
    return this._sistaPubliceringsdatum;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter rubrik
   * @param {string} value
   */
  public set rubrik(value: string) {
    this._rubrik = value;
  }

  /**
   * Setter yrke
   * @param {string} value
   */
  public set yrke(value: string) {
    this._yrke = value;
  }

  /**
   * Setter sistaPubliceringsdatum
   * @param {Date} value
   */
  public set sistaPubliceringsdatum(value: Date) {
    this._sistaPubliceringsdatum = value;
  }
}
