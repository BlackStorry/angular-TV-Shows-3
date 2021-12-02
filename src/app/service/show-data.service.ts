import { Injectable } from '@angular/core';
import { Show } from '../model/show';
@Injectable()
export class ShowDataService {
  shows: Show[] = [];
  constructor() {
    this.shows.push(new Show(1, 'Paw Patrol'));
    this.shows.push(new Show(2, 'Navy Cis'));
    this.shows.push(new Show(3, 'Naruto'));
    this.shows.push(new Show(4, 'Hinata'));
  }
  saveShow(show: Show) {
    this.shows.push(show);
    }
  saveEditShow(show: Show){
    //this.shows.filter()
  }
}
