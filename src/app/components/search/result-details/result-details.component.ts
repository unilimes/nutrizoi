import {Component} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from "rxjs/Rx";
import {ListenerService} from "../../../service/listener.service";
import {IsMobileService} from "../../../service/is-mobile.service";
import {AuthService} from "../../../service/auth.service";
import {SearchDataService} from "../../../service/search-data.service";
import {Helper} from "../../../class/helper";
import {UserDataService} from "../../../service/user-data.service";

@Component({
  selector: 'result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.sass']
})

export class ResultDetailsComponent {
  private helper = new Helper();
  private isMobile: boolean = false;
  private userListener: Subscription;
  private auth: boolean = false;
  private appListener: Subscription;
  private appData: any ;
  private id: number;
  private paramsSub: any;
  private nullRecipe: any = {
    title: '',
    ingridients: [],
    images: []
  };
  private recipe: any;
  private newRecipe: any;

  private diaryActive: boolean = false;
  private recipeEdited: boolean = false;
  private alertUniqTitle: boolean = false;
  private alertSaveRecipe: boolean = false;
  private addIngridient: boolean = false;


  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private location: Location,
      private listenerService: ListenerService,
      private isMobileService: IsMobileService,
      private authService: AuthService,
      private searchDataService: SearchDataService,
      private userDataService: UserDataService
  ) {}

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();
    this.recipe = this.searchDataService.setSelectedRecipe(this.nullRecipe);
    this.newRecipe = Object.assign({}, this.recipe);

    this.appData.saveFoodToDiary.state = '';
    if(this.isMobile) this.appData.searchInputVisible.state = false;
    this.listenerService.changeAppListenerSubject(this.appData);

    this.paramsSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        this.authService.get('/public/recipes/'+ this.id).subscribe((response: any) => {
          let res = JSON.parse(response._body);
          if(res.status) {
            this.recipe = this.searchDataService.setSelectedRecipe(res.res);
          } else {
            this.recipe = this.searchDataService.setSelectedRecipe(this.nullRecipe);
          }
          this.newRecipe = Object.assign({}, this.recipe);
        }, (error) => {});
      }
      
    });
    
    this.appListener = this.listenerService.appListener.subscribe((appListener: any) => {
      this.appData = appListener;
      if(appListener.saveFoodToDiary.state){
        this.diaryActive = false;
      }
    });

    this.userListener = this.userDataService.authListener.subscribe((auth: boolean) => {
      this.auth = auth;
    });
  }

  checkRecipeEdited(){
    if(!this.newRecipe._id){
      this.recipeEdited = true;
      return;
    }
    this.recipeEdited = this.helper.equals(this.newRecipe, this.recipe) ? false : true;
  }

  moveBack() {
    this.location.back();
  }

  toggleDiaryActivity(){
    this.alertUniqTitle = false;

    if(this.recipeEdited){
      this.alertSaveRecipe = true;
    } else {
      this.diaryActive = !this.diaryActive;
    }

    this.appData.saveFoodToDiary.state = '';
  }
  
  resetRecipe(){
    this.recipeEdited = false;
    this.newRecipe = Object.assign({}, this.recipe);
  }

  saveNewRecipe(){
    this.alertSaveRecipe = false;
    this.authService.post('/public/recipes/save', this.newRecipe).subscribe((response: any) => {
      let res = JSON.parse(response._body);
      if(res.status) {
        this.recipe = this.searchDataService.setSelectedRecipe(res.res);
        this.newRecipe = Object.assign({}, this.recipe);
        this.recipeEdited = false;
        this.alertUniqTitle = false;
      } else {
        this.alertUniqTitle = true;
      }
    }, (error) => {});
  }

  spin(event: any, num){
    //noinspection TypeScriptUnresolvedVariable
    event.target.parentElement.children[1].value = +event.target.parentElement.children[1].value + num;
  }

  movetoLogin(){
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.appListener.unsubscribe();
    this.userListener.unsubscribe();
  }
}