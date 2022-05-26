import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
	  // check if search term is undefined
	  if(value === undefined) return value;
	  //return updated value array
	  return value.filter(function(v){
		  // check if the item contains the search term
		  return v.name.toLowerCase().includes(args.toLowerCase());
	  });
  }

}
