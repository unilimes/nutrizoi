import {Component} from "@angular/core";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";

@Component({
  selector: 'search-diary',
  templateUrl: './search-diary.component.html',
  styleUrls: ['./search-diary.component.sass']
})

export class SearchDiaryComponent{
  private isMobile: boolean = false;
  private appData: any ;
  private diaryArr: any ;

  private selectedDiary: any;
  private selectedDate: any = {
    month: {
      number: 2
    },
    day: {
      number: 0
    },
    year: {
      number: 2017
    }
  };
  private selectedTime: string = 'breakfast';
  private monthes: any = [ 'January', 'February',  'March',  'April',  'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  private daysInMonth:number = 30;

  constructor (
      private listenerService: ListenerService,
      private isMobileService: IsMobileService
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.diaryArr = this.listenerService.getDiaries();
    this.appData = this.listenerService.getAppListenerObject();
    this.selectedDiary = this.diaryArr[0];
  }

  selectDiary(diary: any){
    this.selectedDiary = diary;
  }

  selectTime(val: string){
    this.selectedTime = val;
  }

  spin(num: number, obj: any, arrLength: number){
    if(arrLength){
      obj.number += num;
      if(obj.number < 0){
        obj.number = arrLength - 1;
      } else if(obj.number > arrLength - 1){
        obj.number = 0;
      }
    } else {
      obj.number += num;
    }

    this.daysInMonth = new Date(this.selectedDate.year.number, this.selectedDate.month.number+1, 0).getDate();
  }

  cancel(){
    this.selectedDiary = this.diaryArr[0];
    this.selectedTime = 'breakfast';
    this.selectedDate = {
      month: {
        number: 2
      },
      day: {
        number: 0
      },
      year: {
        number: 2017
      }
    };
  }

  confirm(){
    let savedData = {
      diary: this.selectedDiary,
      date: this.selectedDate,
      time: this.selectedTime,
      confirmed: true
    };

    this.appData.saveFoodToDiary.state = true;
    this.listenerService.changeAppListenerSubject(this.appData);
  }

}