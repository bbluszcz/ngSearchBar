import { Pipe, PipeTransform, Input } from '@angular/core';
import { MovieModel } from './movie.model';

@Pipe({
    name: 'DropdownFilter'
})

export class DropdownFilterPipe implements PipeTransform {
    transform(value: any[], filter: string): any[] {
        return filter ? value.filter((product: any) =>
            product.genre.indexOf(filter) !== -1) : value;
    }
}
