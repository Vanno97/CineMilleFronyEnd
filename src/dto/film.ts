import {Programmazione} from './programmazione';

export class Film {
  private _idFilm: string;
  private _nomeFilm: string;
  private _dataUscita: string;
  private _programmazioni: Programmazione[];

  constructor(idFilm: string, nomeFilm: string, dataUscita: string, programmazioni: Programmazione[]) {
    this._idFilm = idFilm;
    this._nomeFilm = nomeFilm;
    this._dataUscita = dataUscita;
    this._programmazioni = programmazioni;
  }

  get idFilm(): string {
    return this._idFilm;
  }

  set idFilm(value: string) {
    this._idFilm = value;
  }

  get nomeFilm(): string {
    return this._nomeFilm;
  }

  set nomeFilm(value: string) {
    this._nomeFilm = value;
  }

  get dataUscita(): string {
    return this._dataUscita;
  }

  set dataUscita(value: string) {
    this._dataUscita = value;
  }

  get programmazioni(): Programmazione[] {
    return this._programmazioni;
  }

  set programmazioni(value: Programmazione[]) {
    this._programmazioni = value;
  }
}
