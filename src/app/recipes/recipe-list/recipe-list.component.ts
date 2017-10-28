import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Description 1', 'https://trangquynh.files.wordpress.com/2011/02/gc3a0-xc3a9-phay-1.jpg'),
    new Recipe('Recipe 2', 'Description 2', 'http://mangdoisong.com/Images/Upload/2016/8/Images/' +
      'cach-nau-chao-long-heo-ngon-de-ban-theo-cach-truyen-thong-cua-nguoi-ha-noi-phan-5.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit() {
  }

}
