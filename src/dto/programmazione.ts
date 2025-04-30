import {Sala} from './sala';

export class Programmazione {
  private _idProgrammazione: string;
  private _dataOra: string;
  private _sala: Sala;

  constructor(idProgrammazione: string, dataOra: string, sala: Sala) {
    this._idProgrammazione = idProgrammazione;
    this._dataOra = dataOra;
    this._sala = sala;
  }

  get idProgrammazione(): string {
    return this._idProgrammazione;
  }

  set idProgrammazione(value: string) {
    this._idProgrammazione = value;
  }

  get dataOra(): string {
    return this._dataOra;
  }

  set dataOra(value: string) {
    this._dataOra = value;
  }

  get sala(): Sala {
    return this._sala;
  }

  set sala(value: Sala) {
    this._sala = value;
  }
}
