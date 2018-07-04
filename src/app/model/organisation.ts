import {ArbetsplatsMini} from './arbetsplatsmini';

export class Organisation {
  private _kundnr: number;
  private _orgnr: string;
  private _orgnamn: string;
  private _orgtyp: string;
  private _duns: number;
  private _utdelningsadress: string;
  private _postnr: string;
  private _postort: string;
  private _kommun: string;
  private _lan: string;
  private _juridiskForm: string;
  private _antalAnstallda: number;
  private _omsattning: number;
  private _telefon: string;
  private _epost: string;
  private _webbplats: string;
  private _logotype: string;
  private _agKontroll: Date;
  private _arbetsplatserMini: Array<ArbetsplatsMini>;

  get kundnr(): number {
    return this._kundnr;
  }

  set kundnr(kundnr: number) {
    this._kundnr = kundnr;
  }

  get orgnr(): string {
    return this._orgnr;
  }

  set orgnr(orgnr: string) {
    this._orgnr = orgnr;
  }

  get orgnamn(): string {
    return this._orgnamn;
  }

  set orgnamn(orgnamn: string) {
    this._orgnamn = orgnamn;
  }

  get orgtyp(): string {
    return this._orgtyp;
  }

  set orgtyp(orgtyp: string) {
    this._orgtyp = orgtyp;
  }

  get duns(): number {
    return this._duns;
  }

  set duns(duns: number) {
    this._duns = duns;
  }

  get utdelningsadress(): string {
    return this._utdelningsadress;
  }

  set utdelningsadress(utdelningsadress: string) {
    this._utdelningsadress = utdelningsadress;
  }

  get postnr(): string {
    return this._postnr;
  }

  set postnr(postnr: string) {
    this._postnr = postnr;
  }

  get postort(): string {
    return this._postort;
  }

  set postort(postort: string) {
    this._postort = postort;
  }

  get kommun(): string {
    return this._kommun;
  }

  set kommun(kommun: string) {
    this._kommun = kommun;
  }

  get lan(): string {
    return this._lan;
  }

  set lan(lan: string) {
    this._lan = lan;
  }

  get juridiskForm() {
    return this._juridiskForm;
  }

  set juridiskForm(juridiskForm: string) {
    this._juridiskForm = juridiskForm;
  }

  get antalAnstallda(): number {
    return this._antalAnstallda;
  }

  set antalAnstallda(antalAnstallda: number) {
    this._antalAnstallda = antalAnstallda;
  }

  get omsattning(): number {
    return this._omsattning;
  }

  set omsattning(omsattning: number) {
    this._omsattning = omsattning;
  }

  get telefon(): string {
    return this._telefon;
  }

  set telefon(telefon: string) {
    this._telefon = telefon;
  }

  get epost(): string {
    return this._epost;
  }

  set epost(epost: string) {
    this._epost = epost;
  }

  get webbplats(): string {
    return this._webbplats;
  }

  set webbplats(webbplats: string) {
    this._webbplats = webbplats;
  }

  get logotype(): string {
    return this._logotype;
  }

  set logotype(logotype: string) {
    this._logotype = logotype;
  }

  get agKontroll(): Date {
    return this._agKontroll;
  }

  set agKontroll(agKontroll: Date) {
    this._agKontroll = agKontroll;
  }

  get arbetsplatserMini(): Array<ArbetsplatsMini> {
    return this._arbetsplatserMini;
  }

  set arbetsplatserMini(arbetsplatserMini: Array<ArbetsplatsMini>) {
    this._arbetsplatserMini = arbetsplatserMini;
  }
}
