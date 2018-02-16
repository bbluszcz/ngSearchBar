import { ServiceService } from './service.service';
import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

import { IProduct } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnChanges {
  @ViewChild('searchType') select: ElementRef;
  searchType: number;
  // searchType = this.select.nativeElement.options.selectedIndex;

  message: string;

  listFilter = '';
  ddlistFilter = '';
  _products: IProduct[];

  genres = [
    { id: 0, name: '' },
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Thriller' },
    { id: 3, name: 'Comedy' },
    { id: 4, name: 'Adventure' },
    { id: 5, name: 'Sci-fi' }
  ];

  productsArray = [
    {
      'id': 1,
      'movie': 'Django',
      'director': 'Quentin Tarantino',
      'actor': 'Jamie Foxxn',
      'genre': 'Western',
    },
    {
      'id': 2,
      'movie': 'Clockwise Orange',
      'director': 'Christopher Nolan',
      'actor': 'Bridget Jones',
      'genre': 'Adventure',

    },
    {
      'id': 3,
      'movie': 'Batman',
      'director': 'Christopher Nolan',
      'actor': 'Christian Bale',
      'genre': 'Adventure',

    },
    {
      'id': 4,
      'movie': 'Nad niemnem',
      'director': 'Joel Coen',
      'actor': 'Eliza Orzeszkowa',
      'genre': 'Comedy',

    },
    {
      'id': 5,
      'movie': 'Babel',
      'director': 'Joel Coen',
      'actor': 'Brad Pitt',
      'genre': 'Drama'

    },
    {
      'id': 6,
      'movie': 'Pianista',
      'director': 'Roman Polanski',
      'actor': 'Stephen Curry',
      'genre': 'War',

    }

  ];

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.searchType = this.select.nativeElement.options.selectedIndex;
    this.service.sendSearchType(this.searchType);
    console.log('searchType', this.searchType);
  }

  ngOnChanges(searchType: SimpleChanges) {
      this.searchType = this.select.nativeElement.options.selectedIndex;
      this.service.sendSearchType(this.searchType);
  }


  testFn() {
    this.searchType = this.select.nativeElement.options.selectedIndex;
    console.log('searchType', this.searchType);
    this.service.sendSearchType(this.searchType);
  }

  showSelected() {
    const ddlistFilter = this.ddlistFilter;
  }

}

