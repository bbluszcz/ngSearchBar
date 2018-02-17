
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class AppService {
    searchType = new Subject<number>();
    id: number;


    sendSearchType(id: number) {
        this.searchType.next(id);
    }

    getSearchType(): Observable<number> {
        return this.searchType.asObservable();
    }

}
