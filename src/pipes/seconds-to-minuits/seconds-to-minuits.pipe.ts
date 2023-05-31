import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinuits'
})
export class SecondsToMinuitsPipe implements PipeTransform {

  transform(value: number, args?: any): number {
    return Math.ceil (value/60);
  }

}
