import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'familyToString'
})
export class FamilyToStringPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let name : string;
    switch (value) {
      case 1:
        name = 'MERCANTILISTES';
        break;
        
      case 2:
        name = 'PHYSIOCRATES';
        break;
    
      case 3:
        name = 'CLASSIQUES';
        break;
    
      case 4:
        name = 'KEYNESIENS';
        break;
    }
    return name;
  }

}
