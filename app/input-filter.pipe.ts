import { ServiceService } from './service.service';
import { Pipe, PipeTransform, OnDestroy } from '@angular/core';

import { IProduct } from './product';
import { Subscription } from 'rxjs/Subscription';

@Pipe({
    name: 'InputProductFilter'
})

export class InputFilterPipe implements PipeTransform, OnDestroy {

searchType: number;
private subscription: Subscription;

constructor(private service: ServiceService) {
    this.service.getSearchType().subscribe(
        (id) => (this.searchType = id)
    );
}

    transform(value: any[], filter: string): any[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter(
                (product) =>
                // this.searchType === 0 ?
                //     (product.prodName.toLocaleLowerCase().indexOf(filter) !== -1) :
                //         (product.prodCategory.toLocaleLowerCase().indexOf(filter) !== -1)
                    this.auxiliaryFunction(product, filter)
            ) : value;
    }

    auxiliaryFunction(product, filter) {
        if (this.searchType === 2) {
            return (product.actor.toLocaleLowerCase().indexOf(filter) !== -1)
        } else if (this.searchType === 1) {
            return (product.director.toLocaleLowerCase().indexOf(filter) !== -1)
        }  else {
            return (product.movie.toLocaleLowerCase().indexOf(filter) !== -1)

        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}


