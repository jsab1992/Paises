import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultCountry = [];

    for (const countries of value) { 
      console.table('pipe' + countries.name);

      if (countries.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCountry.push(countries);
        console.log('holaaa  ' + countries);
      };
      
    };
    return resultCountry;
  }

}
