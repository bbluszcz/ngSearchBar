  import { Pipe, PipeTransform, Input } from '@angular/core';
  import { IProduct } from './product';

  @Pipe({
      name: 'DropdownProductFilter'
  })

  export class DropdownFilterPipe implements PipeTransform {
      // Dropdown Filter
      transform(value: IProduct[], filter: string): IProduct[] {
          return filter ? value.filter((product: IProduct) =>
              product.genre.indexOf(filter) !== -1) : value;
      }
  }
