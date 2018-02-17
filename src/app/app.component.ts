import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

import { AppService } from './app.service';
import { MovieModel } from './movie.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('searchType') select: ElementRef;
  searchType: number;

  message: string;

  listFilter = '';
  ddlistFilter = '';

  genres = [
    { id: 0, name: '' },
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Thriller' },
    { id: 3, name: 'Comedy' },
    { id: 4, name: 'Adventure' },
    { id: 5, name: 'War' },
    { id: 6, name: 'Western' },

  ];

  movies: MovieModel[] = [
    {
      'id': 1,
      'movie': 'Django',
      'director': 'Quentin Tarantino',
      'actor': 'Jamie Foxx',
      'genre': 'Western',

    },
    {
      'id': 2,
      'movie': 'Clockwise Orange',
      'director': 'Stanley Kubric',
      'actor': 'Kim Kardashian',
      'genre': 'Thriller',

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
      'movie': 'Big Lebowski',
      'director': 'Joel Coen',
      'actor': 'Jeff Bridges',
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
      'movie': 'The Pianist',
      'director': 'Roman Polanski',
      'actor': 'Arien Brody',
      'genre': 'Drama',
    }

  ];

  constructor(private service: AppService) { }

  ngOnInit() {
    const $searchType = Observable.fromEvent(this.select.nativeElement, 'change');
    $searchType.subscribe(() => {
      this.searchType = this.select.nativeElement.options.selectedIndex;
      this.service.sendSearchType(this.searchType);
    });
  }

  showSelected() {
    const ddlistFilter = this.ddlistFilter;
  }

}
