import {Component, ViewChild, ElementRef} from "@angular/core";
import {Subscription} from "rxjs/Rx";
import {Router} from "@angular/router";
import {Location} from '@angular/common';

import {StorageService} from "../../service/storage.service";
import {UserDataService} from "../../service/user-data.service";
import {AuthService} from "../../service/auth.service";
import {IsMobileService} from "../../service/is-mobile.service";
import {ListenerService} from "../../service/listener.service";
import {ChangeInfoService} from "../../service/change-info.service";
import {SliderService} from "../../service/slider.service";

@Component({
  selector: 'Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.sass']
})

export class SignupComponent{
  @ViewChild('navig') navig: ElementRef;

  @ViewChild('infos') infos: ElementRef;
  @ViewChild('photo') photo: ElementRef;
  @ViewChild('gender') gender: ElementRef;
  @ViewChild('height') height: ElementRef;
  @ViewChild('weight') weight: ElementRef;
  @ViewChild('age') age: ElementRef;
  @ViewChild('activity') activity: ElementRef;
  @ViewChild('calories') calories: ElementRef;

  @ViewChild('signupForm') signupForm: ElementRef;

  private moveFinishListener: Subscription;
  private selectedElement: any;
  public isMobile: boolean = false;
  private appData: any ;

  private newAccount: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  private newDiary: any;

  private diaryInf: any = {
    img: './assets/resources/images/diary/add-photo.png',
    firstName: '',
    lastName: '',
    gender: 'male',
    height: '5ft 9in / 175cm',
    weight: '154 pd / 70 kg',
    date: {
      month: 3,
      day: 15,
      year: 1990
    },
    activity: 'normal',
    calories: 2700
  };

  private heightInput: boolean = false;


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
      private sliderService: SliderService,
      private changeInfoService: ChangeInfoService,
      private location: Location,
      private router: Router,
      private listenerService: ListenerService,
      private isMobileService: IsMobileService,
      private authService: AuthService,
      private userDataService: UserDataService,
      private storageService: StorageService
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();
    this.appData.sliderPosition.state = this.isMobile ? '-5%' : '0%';
    this.appData.presentState.state = 'signup';
    this.listenerService.changeAppListenerSubject(this.appData);

    this.changeInfoService.resetDiary();

    this.getItemsArr();

    this.moveFinishListener = this.sliderService.changedMoveFinish.subscribe((item: any) => {
      if(item && item.parentElement.getAttribute("data-num")){
        this.selectedElement = item.parentElement;
      } else {
        this.selectedElement = this.infos.nativeElement;
        this.infos.nativeElement.activated = true;
      }
    });
  }

  getItemsArr(): void{
    this.params.elementsArr = [];
    this.params.elementsArr.push(this.infos.nativeElement);
    this.params.elementsArr.push(this.photo.nativeElement);
    this.params.elementsArr.push(this.gender.nativeElement);
    this.params.elementsArr.push(this.height.nativeElement);
    this.params.elementsArr.push(this.weight.nativeElement);
    this.params.elementsArr.push(this.age.nativeElement);
    this.params.elementsArr.push(this.activity.nativeElement);
    this.params.elementsArr.push(this.calories.nativeElement);
    this.params.pos = this.isMobile ? 1 : 3;
    this.params.itemsOnLine = this.isMobile ? 2 : 6;
    this.params.navLeftRight = this.isMobile ? [] : [0.02];
    this.params.navEl = this.navig.nativeElement;

    this.sliderService.sliderStart(this.params);
    this.sliderService.redrawSlider(true);
  }

  goToElement(element: any, prevEl: any){
    if(element == this.selectedElement) return;

    if (element.confirmed || (prevEl && prevEl.activated)) {
      if(prevEl) prevEl.confirmed = true;
      element.activated = true;
      this.selectedElement = null;
      this.sliderService.slideElements(element.children[0]);
    }
  }

  loadPhoto($event){
    this.changeInfoService.loadPhoto($event.target.files[0],  (res)=>{
      this.diaryInf.img = res;
    });

  }

  finishReg(){
    this.authService.post('/auth/signup', this.signupForm['value']).subscribe((response: any) => {
      let res = JSON.parse(response._body);
      if(res.status) {
        this.storageService.set('token', res.res.token);
        let newDiary =  this.changeInfoService.getNewDiary();
        this.authService.post('/private/diaries/create', newDiary).subscribe((response: any) => {
          let res = JSON.parse(response._body);

          if(res.status) {
            this.authService.get('/private/users').subscribe((response: any) => {
              let res = JSON.parse(response._body);
              if(res.status) {
                this.userDataService.setUser(res.res);
                this.router.navigate(['/profile']);
              }
            }, (error) => {});
          }

        }, (error) => {});

      }
    }, (error) => {});
  }


  changeInputHeight(string: string){
    let koefH = parseFloat((<HTMLInputElement>document.querySelector('input[name="koefH"]:checked')).value);
    if(string){
      this.diaryInf.height = this.changeInfoService.recountHeight(parseFloat(string), koefH);
      this.heightInput = false;
    }
  }

  ngOnDestroy(){
    this.moveFinishListener.unsubscribe();
  }

  onResize(event) {
    this.params.redraw = true;
    this.sliderService.sliderStart(this.params);

    if(this.isMobile){
      if(this.isMobileService.getGlobalHeight() > window.innerHeight){
        document.documentElement.style.top = '-30%';
        document.documentElement.style.position = 'absolute';
      } else {
        document.documentElement.style.position = 'initial';
      }
    }
  }
}