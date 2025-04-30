import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformatter'
})
export class DateformatterPipe implements PipeTransform {

  transform(value: string): string {
    let date = new Date(value);
    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1): date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

}
