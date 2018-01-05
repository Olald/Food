import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FoodService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.punkapi.com/v2/beers');
  }
  getDataName(name) {
    return this.http.get('https://api.punkapi.com/v2/beers?beer_name='+ name);
  }
  getDataRandom() {
    return this.http.get('https://api.punkapi.com/v2/beers/random');
  }
  getGuild() {
    return this.http.get('https://eu.api.battle.net/wow/guild/Howling%20Fjord/Название%20утеряно?fields=members&locale=en_GB&apikey=em4gpwhktyuvhz2szq3bc8jqhd59qbmq');
  }
}
