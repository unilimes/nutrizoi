import {Component} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs/Rx";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";

@Component({
  selector: 'result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.sass']
})

export class ResultDetailsComponent {
  private isMobile: boolean = false;
  private appListener: Subscription;
  private appData: any ;
  private id: number;
  private paramsSub: any;


  private addIngridient: boolean = false;
  private diaryActive: boolean = false;
  private confirmedSave: boolean = false;
  private changeRecipe: boolean = false;
  private recipeName: string = 'hamburger';
  private presRecipeName: string = 'hamburger';
  private saveToDiary: Subscription;

  constructor(
      private route: ActivatedRoute,
      private listenerService: ListenerService,
      private isMobileService: IsMobileService
  ) {}

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();

    this.appData.saveFoodToDiary.state = false;
    if(this.isMobile) this.appData.searchInputVisible.state = false;

    this.listenerService.changeAppListenerSubject(this.appData);

    this.paramsSub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if(params['id'] === '0'){
        console.log(123);
      }
    });

    this.appListener = this.listenerService.appListener.subscribe((appListener: any) => {
      this.appData = appListener;

      if(this.appData.saveFoodToDiary.state){
        if(!this.isMobile) this.confirmedSave = true;
        this.diaryActive = false;
      }
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.appListener.unsubscribe();
  }

  saveChanges(){
    this.diaryActive = false;
  }

  toggleDiary(){
    this.diaryActive = !this.diaryActive;
    this.appData.saveFoodToDiary.state = false;
  }

  checkName(){
    if(this.presRecipeName !==  this.recipeName){
      this.changeRecipe = true;
    }
  }

  saveNewRecipe(){
    this.changeRecipe = false;
    this.recipeName ===  this.presRecipeName;
  }

  spin(event: any, num){
    //noinspection TypeScriptUnresolvedVariable
    event.target.parentElement.children[1].value = +event.target.parentElement.children[1].value + num;
  }

}