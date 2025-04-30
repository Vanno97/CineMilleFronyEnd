export class Sala {
  private _idSala: string;
  private _nomeSala: string;
  private _posti: number;
  private _imax: boolean;

  constructor(idSala: string, nomeSala: string, posti: number, imax: boolean) {
    this._idSala = idSala;
    this._nomeSala = nomeSala;
    this._posti = posti;
    this._imax = imax;
  }

  get idSala(): string {
    return this._idSala;
  }

  set idSala(value: string) {
    this._idSala = value;
  }

  get nomeSala(): string {
    return this._nomeSala;
  }

  set nomeSala(value: string) {
    this._nomeSala = value;
  }

  get posti(): number {
    return this._posti;
  }

  set posti(value: number) {
    this._posti = value;
  }

  get imax(): boolean {
    return this._imax;
  }

  set imax(value: boolean) {
    this._imax = value;
  }
}
