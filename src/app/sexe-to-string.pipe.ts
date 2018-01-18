import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexeToString'
})
export class SexeToStringPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let name : string;
    switch (value) {
      case 'M':
        name = 'Homme';
        break;
        
      case 'F':
        name = 'Femme';
        break;
    }
    
    return name;
  }

}
