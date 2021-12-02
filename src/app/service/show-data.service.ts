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
    this.transform(this.shows);
    }
  saveEditShow(show: Show){
    //this.shows.filter()
    this.transform(this.shows);
  }
  deleteShow(show: Show) {
    this.shows = this.shows.filter(s => s !== show);
    this.transform(this.shows);
  }
  transform(shows: Show[]): Show[] { shows.sort((a: Show, b: Show) => { if (a.id < b.id) { return -1; } else if (a.id > b.id) { return 1; } else { return 0; } }); return shows; }
}
