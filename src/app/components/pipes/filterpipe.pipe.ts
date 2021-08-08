import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
})
export class FilterpipePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultCountry = [];
    const regionSelect = [];
    
    for (const countries of value) {
      if (countries.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCountry.push(countries);
        // console.table( "nuevo"+ JSON.stringify(resultCountry) );
      }      
    }
    return resultCountry;

   
  }
}
