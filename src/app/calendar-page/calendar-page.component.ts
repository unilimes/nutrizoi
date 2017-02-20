import {Component} from "@angular/core";
import {Location} from '@angular/common';
import {Subscription} from "rxjs/Rx";
import {GreenScaleService} from "../service/green-scale.service";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";
import {UserDataService} from "../service/user-data.service";
import {AuthService} from "../service/auth.service";


@Component({
  selector: 'calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.sass']
})

export class CalendarPageComponent{
  private isMobile: boolean = false;
  private appData: any ;
  private diaryArr: any = [];
  public monthArr: any = [];
  public days: any = [
    {
      user: '23d553w3456f353',
      diary: '58a489167a0d260dfc78ebdf',
      timestamp: 1485727200000,
      breakfast: [  ],
      lunch: [  ],
      dinner: [  ],
      snack: [  ],
      calories: 86,
      macro: 25,
      micro: 65
    },
    {
      user: '23d553w3456f353',
      diary: '58a496e3f8da0a0f50498962',
      timestamp: 1486072800000,
      breakfast: [  ],
      lunch: [  ],
      dinner: [  ],
      snack: [  ],
      calories: 86,
      macro: 25,
      micro: 65
    },
    {
      user: '23d553w3456f353',
      diary: '58a496e3f8da0a0f50498962',
      timestamp: 1487023200000,
      breakfast: [  ],
      lunch: [  ],
      dinner: [  ],
      snack: [  ],
      calories: 86,
      macro: 25,
      micro: 65
    },
    {
      user: '23d553w3456f353',
      diary: '58a496e3f8da0a0f50498962',
      timestamp: 1485727200000,
      breakfast: [  ],
      lunch: [  ],
      dinner: [  ],
      snack: [  ],
      calories: 86,
      macro: 25,
      micro: 65
    }
  ];
  private userListener: Subscription;
  private isAuth: boolean = false;

  public daysOfWeek :any = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public months:any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public month: number = new Date().getMonth();
  public year: number = new Date().getFullYear();
  public lastDateOfMonth: number;

  private selectedDay: any;

  private monthFilter: boolean = false;
  private weekFilter: boolean = false;



  public itemWidth: number = 0.018*window.innerWidth;

  constructor(
      private greenScaleService: GreenScaleService,
      private location: Location,
      private listenerService: ListenerService,
      private isMobileService: IsMobileService,
      private userDataService: UserDataService,
      private authService: AuthService
  ){}


  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();

    this.appData.sliderVisible.state = false;
    this.appData.footerHeaderVisible.state = true;
    this.listenerService.changeAppListenerSubject(this.appData);

    this.calendarGenerating();

    this.userListener = this.userDataService.authListener.subscribe((auth: boolean) => {
      this.isAuth = auth;
      if(auth){
        this.diaryArr = this.userDataService.getDiaries();
        this.calendarGenerating();
      }
    });
  }

  calendarGenerating():void{
    let firstDayOfMonth = new Date(this.year, this.month, 1).getDay();
    let lastDateOfMonth =  new Date(this.year, this.month+1, 0).getDate();
    let lastDayOfLastMonth = this.month == 0 ? new Date(this.year-1, 11, 0).getDate() : new Date(this.year, this.month, 0).getDate();
    this.lastDateOfMonth = lastDateOfMonth;

    let i=1;
    this.monthArr = [];

    do{
      let date = new Date(this.year, this.month, i);
      let dayName = date.getDay();
      let timeStamp = date.getTime();
      let day = {
        day: dayName,
        date: i,
        month: this.month,
        year: this.year,
        timeStamp: timeStamp
      };

      if ( i == 1 ) {
        let tempD = firstDayOfMonth, k;

        if(firstDayOfMonth == 0){
          k = lastDayOfLastMonth - 4;
          tempD = 7;
        } else {
          k = lastDayOfLastMonth - firstDayOfMonth+2;
        }

        for(let j=1; j < tempD; j++) {
          let month = this.month-1 < 0 ? 11 : this.month-1;
          let year = this.month-1 < 0 ? this.year - 1 : this.year;
          let dayName = new Date(year, month, k).getDay();
          let timeStamp = new Date(year, month, k).getTime();
          let day = {
            day: dayName,
            date: k,
            month: month,
            year: year,
            timeStamp: timeStamp
          };
          this.monthArr.push(day);
          k++;
        }

      } else if ( i == lastDateOfMonth ) {
        this.monthArr.push(day);

        if(dayName == 0){
          break;
        }

        let date = 1;
        let tempmonth = this.month+1 > 11 ? 0 : this.month+1;
        let year = this.month+1 > 11 ? this.year + 1 : this.year;

        for(dayName+=1; dayName <= 7; dayName++) {
          let timeStamp = new Date(year, tempmonth, date).getTime();
          let tempday = {
            day: dayName,
            date: date,
            month: tempmonth,
            year: year,
            timeStamp: timeStamp
          };

          if(dayName == 7){
            tempday.day = 0;
            this.monthArr.push(tempday);
            break;
          }

          this.monthArr.push(tempday);
          date++;
        }

        break;
      }

      this.monthArr.push(day);
      i++;
    } while (i <= lastDateOfMonth);

    this.selectedDay = this.monthArr[0];

    if(this.isAuth){
      this.addDiariesToCalendDays();

      let reqObj = {
        firstDay: this.monthArr[0].timeStamp,
        lastDay: this.monthArr[this.monthArr.length - 1].timeStamp
      };

      this.authService.post('/private/days', reqObj).subscribe((response: any) => {
        let res = JSON.parse(response._body);
        this.addGreenLineToCalendDays(this.days);
        if(res.status) {
          // this.addGreenLineToCalendDays(res);
        }
      }, (error) => {});
    }

  }

  addDiariesToCalendDays():void{
    for(let i = 0; i < this.monthArr.length; i++){
      for(let j = 0; j < this.diaryArr.length; j++){
        this.monthArr[i][this.diaryArr[j]._id] = '';
      }
    }
  }

  addGreenLineToCalendDays(arr: any):void{
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < this.monthArr.length; j++){
        if(this.monthArr[j].timeStamp == arr[i].timestamp){
          this.monthArr[j][arr[i].diary] = this.greenScaleService.drawScale(4, arr[i].calories*36);
          continue;
        }
      }
    }
  }

  changeMonth(numb){
    if (this.month + numb > 11) {
      this.month = 0;
      this.year = this.year + 1;
    } else if (this.month + numb < 0){
      this.month = 11;
      this.year = this.year - 1;
    } else {
      this.month += numb;
    }
    this.calendarGenerating();
  }

  changeYear(numb){
    this.year += numb;
    this.calendarGenerating();
  }

  selectDay(day:any){
    this.selectedDay = day;
  }

  moveBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.userListener.unsubscribe();
  }
}