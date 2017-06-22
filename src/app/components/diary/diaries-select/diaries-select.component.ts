import {Component} from "@angular/core";
import {Subscription} from "rxjs/Rx";
import {UserDataService} from "../../../service/user-data.service";

@Component({
  selector: 'diaries-select',
  templateUrl: './diaries-select.component.html',
  styleUrls: ['./diaries-select.component.sass']
})

export class DiariesSelectComponent {
  private selectedDiary: any = {
    firstName: '',
    secondName: ''
  };
  private diaryArr: any = [] ;
  private userListener: Subscription;

  constructor (
      private userDataService: UserDataService
  ){ }

  ngOnInit() {
    this.userListener = this.userDataService.authListener.subscribe((auth: boolean) => {
      if(auth){
        this.diaryArr = this.userDataService.getDiaries();
        this.selectedDiary = this.diaryArr[0];
      }
    });
  }

  selectDiary(diary: any){
    this.selectedDiary = diary;
  }

  ngOnDestroy(){
    this.userListener.unsubscribe();
  }
}