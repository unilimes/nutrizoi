import { Injectable } from '@angular/core';

@Injectable()
export class SearchDataService {

  public searchRes: any = [];
  public selectedRecipe: any = {};

  setSearchRes(result: any){
    this.searchRes = result;
    return this.searchRes;
  }

  getSearchRes(){
    return this.searchRes;
  }

  setSelectedRecipe(recipe: any){
    this.selectedRecipe = Object.assign({}, recipe);
    return this.selectedRecipe;
  }

  getSelectedRecipe(){
    return this.selectedRecipe;
  }
  
}
