import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squr'
})
export class SqurPipe implements PipeTransform {

  transform(value: any): unknown {
    
    return value * value;
  }

}
