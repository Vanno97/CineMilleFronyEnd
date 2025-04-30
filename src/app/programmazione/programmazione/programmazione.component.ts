import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../../service/film.service';
import {Film} from '../../../dto/film';
import {NgForOf, NgIf} from '@angular/common';
import {FilmDetailsComponent} from '../film-details/film-details.component';
import {Sala} from '../../../dto/sala';
import {SaleService} from '../../../service/sale.service';
import {FormsModule} from '@angular/forms';
import {AlertComponent} from '../../../common-component/alert/alert.component';
import {DateInterval} from '../../../dto/date-interval';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-programmazione',
  imports: [
    NgForOf,
    FilmDetailsComponent,
    NgIf,
    FormsModule,
    AlertComponent
  ],
  templateUrl: './programmazione.component.html',
  styleUrl: './programmazione.component.css'
})
export class ProgrammazioneComponent implements OnInit {
  showAlert = false;
  alertMessage = "";
  isErrorAlert = false;

  allFilm: Film[] = [];
  allSale: Sala[] = []

  filmName = "";
  fromDate = "";
  toDate = "";
  sala = "";
  imax = false;
  constructor(private filmService: FilmService, private saleService: SaleService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.authService.validate(localStorage.getItem("token")!).subscribe({
        error: error => {
          this.router.navigate(['/']);
          localStorage.removeItem("token");
          return;
        }
      });
    } else {
      this.router.navigate(['/']);
      return;
    }
    this.saleService.getAllSale().subscribe(sale => this.allSale = sale);
    this.getAll();
  }

  getAll() {
    this.filmService.getStoricoFilmFromToday().subscribe(film => this.allFilm = film);

  }

  loadHistory() {
    this.filmService.getStoricoFilm().subscribe(film => this.allFilm = film);
    this.filmName = "";
    this.fromDate = "";
    this.toDate = "";
    this.imax = false;
  }

  search(): void {
    if (this.fromDate == "" && this.toDate == "" && this.sala == "" && !this.imax && this.filmName == "") {
      this.getAll();
      return;
    }
    if (this.fromDate != "" && this.toDate == "") {
      this.showErrorAlert("INSERIRIRE TUTTE E DUE LE DATE");
      return;
    }
    if (this.fromDate == "" && this.toDate == "" && this.sala == "" && !this.imax && this.filmName != "") { //se solo nome
      this.filmService.getProgrammazioneByName(this.filmName).subscribe({
        next: data => {
          this.allFilm = [];
          this.allFilm.push(data);
        },
        error: err => {this.showErrorAlert(err)}
      });
    } else if (this.fromDate == "" && this.toDate == "" && this.sala == "" && this.imax && this.filmName != "") { //se imax e nome
      this.filmService.getProgrammazioneByNameAndImax(this.filmName, this.imax).subscribe({
        next: data => {
          this.allFilm = [];
          this.allFilm.push(data);
        },
        error: err => {this.showErrorAlert(err)}
      })
    } else if (this.fromDate == "" && this.toDate == "" && this.imax && this.filmName == "") { //se solo imax
      this.filmService.getStoricoFilmFromTodayAndImax(this.imax).subscribe({
        next: data => {
          this.allFilm = data;
        },
        error: err => {this.showErrorAlert(err)}
      })
    } else if (this.filmName == "" && this.fromDate != "" && this.toDate != "" && this.sala == "" && !this.imax) { //solo l'intervallo di date
      let dateInterval = new DateInterval(this.fromDate, this.toDate);
      this.filmService.getProgrammazioneInInterval(dateInterval).subscribe({
        next: data => {
          this.allFilm = data;
        },
        error: err => {this.showErrorAlert(err)}
      });
    } else if (this.filmName == "" && this.fromDate != "" && this.imax && this.toDate != "" && this.sala == "") { //solo l'intervallo di date e imax
      let dateInterval = new DateInterval(this.fromDate, this.toDate);
      this.filmService.getProgrammazioneInIntervalAndImax(dateInterval, true).subscribe({
        next: data => {
          this.allFilm = data;
        },
        error: err => {this.showErrorAlert(err)}
      });
    } else if (this.filmName != "" && this.fromDate != "" && this.toDate != "" && this.sala == "" && !this.imax) { //solo nome e data
      let dateInterval = new DateInterval(this.fromDate, this.toDate);
      this.filmService.getProgrammazioneInIntervalAndName(dateInterval, this.filmName).subscribe({
        next: data => {
          this.allFilm = [];
          this.allFilm.push(data);
        },
        error: err => {this.showErrorAlert(err)}
      });
    } else if (this.filmName != "" && this.fromDate != "" && this.toDate != "" && this.sala == "" && this.imax) { //solo nome e data e imax
      let dateInterval = new DateInterval(this.fromDate, this.toDate);
      this.filmService.getProgrammazioneInIntervalAndNameAndImax(dateInterval, this.filmName, true).subscribe({
        next: data => {
          this.allFilm = [];
          this.allFilm.push(data);
        },
        error: err => {this.showErrorAlert(err)}
      });
    }
  }

  showErrorAlert(err: any) {
    this.allFilm = [];
    this.showAlert = true;
    if (typeof err == "string") {
      this.alertMessage = err;
    } else {
    this.alertMessage = err.error.errorMessage;
    }
    this.isErrorAlert = true;
    setTimeout(() => {
      this.showAlert = false;
      this.alertMessage = "";
      this.isErrorAlert = false;
    }, 1000);
  }
}
