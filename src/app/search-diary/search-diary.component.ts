import {Component} from "@angular/core";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";
import {Subscription} from "rxjs/Rx";
import {UserDataService} from "../service/user-data.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'search-diary',
  templateUrl: './search-diary.component.html',
  styleUrls: ['./search-diary.component.sass']
})

export class SearchDiaryComponent{
  private isMobile: boolean = false;
  private appData: any ;
  private diaryArr: any =[] ;
  private userListener: Subscription;
  private isAuth: boolean = false;

  private selectedDiary: any;
  private selectedDate: any = {
    month: {
      number: new Date().getMonth() + 1
    },
    day: {
      number: new Date().getDate()
    },
    year: {
      number: new Date().getFullYear()
    }
  };
  private selectedTime: string = 'breakfast';
  private monthes: any = [ 'January', 'February',  'March',  'April',  'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  private daysInMonth: number;

  constructor (
    private listenerService: ListenerService,
    private isMobileService: IsMobileService,
    private userDataService: UserDataService,
    private authService: AuthService
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();
    this.daysInMonth = new Date(this.selectedDate.year.number, this.selectedDate.month.number+1, 0).getDate();

    this.userListener = this.userDataService.authListener.subscribe((auth: boolean) => {
      this.isAuth = auth;
      if(auth){
        this.diaryArr = this.userDataService.getDiaries();
        this.selectedDiary = this.diaryArr[0];
      }
    });
  }

  selectDiary(diary: any){
    this.selectedDiary = diary;
  }

  selectTime(val: string){
    this.selectedTime = val;
  }

  spin(num: number, obj: any, arrLength?: number){
    
    if(arrLength){
      obj.number += num;
      if(obj.number < 1){
        obj.number = arrLength;
      } else if(obj.number > arrLength){
        obj.number = 1;
      }
    } else {
      obj.number += num;
    }

    this.daysInMonth = new Date(this.selectedDate.year.number, this.selectedDate.month.number, 0).getDate();
    (this.selectedDate.day.number > this.daysInMonth) ? this.selectedDate.day.number = this.daysInMonth : this.selectedDate.day.number;

  }

  cancel(){
    this.appData.saveFoodToDiary.state = 'canceled';
    this.listenerService.changeAppListenerSubject(this.appData);
  }

  confirm(){
    let savedData = {
      diary: this.selectedDiary,
      date: this.selectedDate,
      time: this.selectedTime,
      confirmed: true
    };

    this.appData.saveFoodToDiary.state = 'added';
    this.listenerService.changeAppListenerSubject(this.appData);
  }

  ngOnDestroy() {
    this.userListener.unsubscribe();
  }
}