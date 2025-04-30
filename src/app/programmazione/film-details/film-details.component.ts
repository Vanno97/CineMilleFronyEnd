import {Component, Input} from '@angular/core';
import {Film} from '../../../dto/film';
import {NgForOf, NgIf} from '@angular/common';
import {DateformatterPipe} from '../../../pipes/dateformatter.pipe';

@Component({
  selector: 'app-film-details',
  imports: [
    NgForOf,
    NgIf,
    DateformatterPipe
  ],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailsComponent {
  @Input("film-details")
  film! : Film;

  opened = false;

  open(): void {
    this.opened = !this.opened
  }
}
