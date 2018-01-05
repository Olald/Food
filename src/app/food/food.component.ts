import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private httpService: FoodService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe((data: any) => {
        this.recipes = data;
        this.done = true;
      });
    this.httpService.getGuild()
      .subscribe((data: any) => {
        this.members = data.members;
        this.done = true;
      });
  }
  members: any;
  toggle: boolean = false;
  recipes: any;
  done: boolean = false;
  done_1: boolean = false;

  submit() {
    this.httpService.getData()
      .subscribe((data: any) => {
        this.recipes = data;
        this.done = true;
      });
  }


  sub_name(name) {
    this.httpService.getDataName(name)
      .subscribe((data: any) => {

        this.recipes = data;
        this.done_1 = true;
        this.done = false;

      });
  }

  toggleEvent(recipe) {

    recipe.open = !recipe.open;
  }

  sub_random() {
    this.httpService.getDataRandom().subscribe((data: any) => {

      this.recipes = data;
      this.done_1 = true;
      this.done = false;

    });
  }


}
