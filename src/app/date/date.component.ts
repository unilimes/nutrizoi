import {Component, ViewChild, ElementRef} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from "rxjs/Rx";
import {Location} from '@angular/common';
import { DomSanitizer} from '@angular/platform-browser';
import {SliderService} from "../service/slider.service";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";
import {GreenScaleService} from "../service/green-scale.service";
import {UserDataService} from "../service/user-data.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass']
})

export class DateComponent {
  @ViewChild('navig') navig: ElementRef;
  @ViewChild('diary1') diary1: ElementRef;
  @ViewChild('diary2') diary2: ElementRef;
  @ViewChild('diary3') diary3: ElementRef;
  @ViewChild('diary4') diary4: ElementRef;
  @ViewChild('diary5') diary5: ElementRef;

  private isMobile: boolean = false;
  private id: number;
  private paramsSub: any;
  private moveFinishListener: Subscription;
  private appListener: Subscription;
  private appData: any ;
  private userListener: Subscription;
  private isAuth: boolean = false;

  private nullDiary: any = {
    img: './assets/resources/images/search/add.png',
    greenline: {
      total: 0,
      calories: 0,
      micro: 0,
      macro: 0
    }
  };
  private diaryArr: any = [];
  private selectedElement: any;


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
      micro: 65,
      LineCalories: '',
      LineMacro: '',
      LineMicro: ''
    }
  ];



  private monthFilter: boolean = false;
  private weekFilter: boolean = false;

  private pointsTimeItems: any = {
    selectedTime: 0,
    breakfast: {
      point: {},
      id: 1
    },
    dinner: {
      point: {},
      id: 2
    },
    lunch: {
      point: {},
      id: 3
    },
    snack: {
      point: {},
      id: 4
    },
    desktopArr: [[-250, 50], [-125, 125], [25, 125], [150, 50], [-200, 90], [-50, 135], [100, 90], [-50, 275]]
  };


  public params = {
    navEl: {},
    elementsArr: [],
    navLeftRight: [],
    pos: null,
    height: 1,
    redraw: false,
    itemsOnLine: 6
  };

  constructor (
      private route: ActivatedRoute,
      private sliderService: SliderService,
      private listenerService: ListenerService,
      private isMobileService: IsMobileService,
      private greenScaleService: GreenScaleService,
      private location: Location,
      private router: Router,
      private sanitizer: DomSanitizer,
      private userDataService: UserDataService,
      private authService: AuthService
  ){}

  ngOnInit() {
    this.setDefaultId();
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();

    this.sanitizePoints();
    this.getItemsArr();
    this.getDiaries(this.diaryArr);

    this.appData.sliderPosition.state = '';
    this.appData.sliderVisible.state = true;
    this.appData.footerHeaderVisible.state = true;
    this.listenerService.changeAppListenerSubject(this.appData);

    this.appListener = this.listenerService.appListener.subscribe((appListener: any) => {
      this.appData = appListener;
    });

    this.paramsSub = this.route.params.subscribe(params => {
      if(params['id'])this.id = params['id'];
    });

    this.userListener = this.userDataService.authListener.subscribe((auth: boolean) => {
      this.isAuth = auth;
      if(auth){
        this.diaryArr = this.getDiaries(this.userDataService.getDiaries());
        this.getDataForDiaries();
      }
    });

    this.moveFinishListener = this.sliderService.changedMoveFinish.subscribe((item: any) => {
      if(item){
        this.selectedElement = item;
      }
    });

  }

  ngAfterContentInit() {
    this.selectedElement = this.diary1.nativeElement;
  }

  setDefaultId(){
    let day = new Date().getDate();
    let year = new Date().getMonth();
    let month = new Date().getFullYear();
    this.id = new Date(year, month, day).getTime();
  }

  sanitizePoints(){
    for( var i = 0; i < this.pointsTimeItems.desktopArr.length; i++ ){
      let string = this.sanitizer.bypassSecurityTrustStyle("translate("+this.pointsTimeItems.desktopArr[i][0]+"%," + this.pointsTimeItems.desktopArr[i][1] + "%)");
      this.pointsTimeItems.desktopArr[i] = string;
    }
  }

  getDiaries(diaries){
    for(let i = 0; i < 5 ; i++){
      diaries[i] = diaries[i] ? diaries[i] : this.nullDiary;
    }
    return diaries;
  }

  getDataForDiaries(){
    if(!this.isAuth)return;
    this.authService.get('/private/days/'+this.id).subscribe((response: any) => {
      let res = JSON.parse(response._body);
      this.addGreenLineToDiary(this.days);
      if(res.status) {

      }
    }, (error) => {});
  }

  addGreenLineToDiary(days: any){
    this.days[0].LineCalories = this.greenScaleService.drawScale(2,this.days[0].calories);
    this.days[0].LineMicro = this.greenScaleService.drawScale(2,this.days[0].micro);
    this.days[0].LineMacro = this.greenScaleService.drawScale(2,this.days[0].macro);
  }

  getItemsArr(): void{
    this.params.elementsArr.push(this.diary4.nativeElement);
    this.params.elementsArr.push(this.diary3.nativeElement);
    this.params.elementsArr.push(this.diary1.nativeElement);
    this.params.elementsArr.push(this.diary2.nativeElement);
    this.params.elementsArr.push(this.diary5.nativeElement);
    this.params.navEl = this.navig.nativeElement;
    this.params.itemsOnLine = this.isMobile ? 2 : 6;
    this.params.pos = this.isMobile ? -1 : null;
    this.params.navLeftRight = this.isMobile ? [] : [0.02, 0.98];
    this.sliderService.sliderStart(this.params);
    this.sliderService.redrawSlider(true);
  }

  moveItems(item: any){
    if(this.selectedElement !== item){
      this.selectedElement = null;
      this.sliderService.slideElements(item);
    }
  }

  selectTime(id: number){
    if(this.isMobile){
      this.router.navigate(['/food']);
      return;
    }

    this.pointsTimeItems.selectedTime = id;
    switch(this.pointsTimeItems.selectedTime){
      case 1:
        this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[7];
        this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[4];
        this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[5];
        this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[6];
        break;
      case 2:
        this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[4];
        this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[7];
        this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[5];
        this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[6];
        break;
      case 3:
        this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[4];
        this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[5];
        this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[7];
        this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[6];
        break;
      case 4:
        this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[4];
        this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[5];
        this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[6];
        this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[7];
        break;
      default:
        this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[0];
        this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[1];
        this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[2];
        this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[3];
        break;
    }

    this.appData.selectedFoodTime.state = id;
    this.listenerService.changeAppListenerSubject(this.appData);
  }

  moveBack() {
    this.location.back();
  }

  changeTime(val: string){

  }

  closeNutritional(){
    this.appData.nutritionalStateOpen.state = false;
    this.listenerService.changeAppListenerSubject(this.appData);
  }

  ngOnDestroy(){
    this.paramsSub.unsubscribe();
    this.moveFinishListener.unsubscribe();
    this.appListener.unsubscribe();
    this.userListener.unsubscribe();
  }

  onResize(event) {
    this.sliderService.sliderStart(this.params);
  }
}