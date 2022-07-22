import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Adobong Manok',
      'A famous manok',
      'https://panlasangpinoy.com/wp-content/uploads/2020/04/adobong-manok-sa-buko.jpg'
    ),
    new Recipe(
      'Kare-kareng Baboy',
      'A Filipino dish made with rice, meat, and vegetables',
      'https://panlasangpinoy.com/wp-content/uploads/2018/08/pork-kare-kare-500x479.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
