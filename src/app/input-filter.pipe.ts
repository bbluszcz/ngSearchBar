import { AppService } from './app.service';
import { Pipe, PipeTransform, OnDestroy } from '@angular/core';

import { MovieModel } from './movie.model';
import { Subscription } from 'rxjs/Subscription';

@Pipe({
    name: 'InputFilter'
})

export class InputFilterPipe implements PipeTransform, OnDestroy {

    searchType: number;
    private subscription: Subscription;

    constructor(private service: AppService) {
        this.service.getSearchType().subscribe(
            id => this.searchType = id
        );
    }

    transform(value: any[], filter: string): any[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter(
            (enteredText) =>
                this.selectInputFilter(enteredText, filter)
        ) : value;
    }


    selectInputFilter(enteredText, filter) {
        if (this.searchType === 3) {
            return (enteredText.actor.toLocaleLowerCase().indexOf(filter) !== -1);
        } else if (this.searchType === 2) {
            return (enteredText.director.toLocaleLowerCase().indexOf(filter) !== -1);
        } else if (this.searchType === 1) {
            return (enteredText.movie.toLocaleLowerCase().indexOf(filter) !== -1);
        } else {
            return (enteredText.actor.toLocaleLowerCase().indexOf(filter) !== -1) ||
                (enteredText.director.toLocaleLowerCase().indexOf(filter) !== -1) ||
                (enteredText.movie.toLocaleLowerCase().indexOf(filter) !== -1);

        }
    }








    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}


