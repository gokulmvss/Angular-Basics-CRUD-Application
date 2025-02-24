import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../entity/product';

@Pipe({
  name: 'searchPipe',
  standalone:true,
})
export class SearchPipePipe implements PipeTransform {

  transform(items: any[], searchelement: string): any[] {
    if (!items) return [];
    if (!searchelement) return items;

    searchelement = searchelement.toLowerCase();
    return items.filter(item => {
      // const it = JSON.stringify(item)
      // return it.toLowerCase().includes(searchelement);
      return JSON.stringify(item).toLowerCase().includes(searchelement);
    }); // for generic searches

    // return items.filter(item => {
    //   return item.name.toLowerCase().includes(searchelement);
    // }); // for specific column

    // The filter method creates a new array with all elements that pass the test implemented by the provided function.
    // Item is predicate 
    // The filter method will iterate over each item in the items array.

    // For each item, it will check if the lowercase name property includes the searchelement.

    // If the condition is true (i.e., item.name contains searchelement), the item is included in the new array. Otherwise, it is excluded.

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
