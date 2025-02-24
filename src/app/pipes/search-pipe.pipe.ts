import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../entity/product';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items:any[],searchelement:string): any[] {
  if(!items) return [];
  if(!searchelement) return items;

  searchelement = searchelement.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchelement);
    });
  }

  // transform(items: any[], searchText: string): any[] {
  //   if (!items) return [];
  //   if (!searchText) return items;
    
  //   searchText = searchText.toLowerCase();
  //   return items.filter(it => {
  //     return it.name.toLowerCase().includes(searchText);
  //   });
  //   // console.log(items);
  // }
}
