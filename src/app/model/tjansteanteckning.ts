export class Tjansteanteckning {
  private _handelseLopnummer: number;
  private _handelseDatum: Date;
  private _typ: string;
  private _rubrik: string;
  private _text: string;

  /**
   * Getter handelseLopnummer
   * @return {number}
   */
  public get handelseLopnummer(): number {
    return this._handelseLopnummer;
  }

  /**
   * Getter handelseDatum
   * @return {Date}
   */
  public get handelseDatum(): Date {
    return this._handelseDatum;
  }

  /**
   * Getter typ
   * @return {string}
   */
  public get typ(): string {
    return this._typ;
  }

  /**
   * Getter rubrik
   * @return {string}
   */
  public get rubrik(): string {
    return this._rubrik;
  }

  /**
   * Getter text
   * @return {string}
   */
  public get text(): string {
    return this._text;
  }

  /**
   * Setter handelseLopnummer
   * @param {number} value
   */
  public set handelseLopnummer(value: number) {
    this._handelseLopnummer = value;
  }

  /**
   * Setter handelseDatum
   * @param {Date} value
   */
  public set handelseDatum(value: Date) {
    this._handelseDatum = value;
  }

  /**
   * Setter typ
   * @param {string} value
   */
  public set typ(value: string) {
    this._typ = value;
  }

  /**
   * Setter rubrik
   * @param {string} value
   */
  public set rubrik(value: string) {
    this._rubrik = value;
  }

  /**
   * Setter text
   * @param {string} value
   */
  public set text(value: string) {
    this._text = value;
  }
}
