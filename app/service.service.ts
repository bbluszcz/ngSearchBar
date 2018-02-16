import { Subject} from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable';

export class ServiceService {

     // tslint:disable-next-line:member-ordering
     public searchType = new Subject<number>();

     public sendSearchType(id: number) {
         this.searchType.next(id);
     }

     public getSearchType(): Observable<number> {
         return this.searchType.asObservable();
     }


}
