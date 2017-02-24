import {Component} from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs/Rx";
import {Location} from '@angular/common';
import {ChangeInfoService} from "../service/change-info.service";
import {IsMobileService} from "../service/is-mobile.service";
import {UserDataService} from "../service/user-data.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'selected-diary',
  templateUrl: './selected-diary.component.html',
  styleUrls: ['./selected-diary.component.sass']
})

export class SelectedDiaryComponent {
  private id: string;
  private paramsSub: any;
  public isMobile: boolean = false;
  private userListener: Subscription;

  private heightInput: boolean = false;
  private diaryArr: any;

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

  private elements: any = [
    {
      id: 0,
      active: true,
      confirmed: true
    },
    {
      id: 1,
      active: false,
      confirmed: true
    },
    {
      id: 2,
      active: false,
      confirmed: true
    },
    {
      id: 3,
      active: false,
      confirmed: true
    },
    {
      id: 4,
      active: false,
      confirmed: true
    },
    {
      id: 5,
      active: false,
      confirmed: true
    },
    {
      id: 6,
    }
  ];

  private presentElement: any = this.elements[0];


  constructor(
      private route: ActivatedRoute,
      private changeInfoService: ChangeInfoService,
      private location: Location,
      private isMobileService: IsMobileService,
      private userDataService: UserDataService,
      private authService: AuthService
  ) {}

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.changeInfoService.resetDiary();


    this.paramsSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.userListener = this.userDataService.authListener.subscribe((auth: boolean) => {
      if(auth){
        this.diaryArr = this.userDataService.getDiaries();
        if(this.id === 'create'){
          for(let i = 0; i < this.elements.length; i++){
            this.elements[i].confirmed = false;
          }
        } else {
          for(let i = 0; i < this.diaryArr.length; i++){
            if(this.diaryArr[i]._id == this.id){
              this.changeInfoService.setNewDiary(this.diaryArr[i]);
              this.diaryInf.img = this.diaryArr[i].img;
              this.diaryInf.firstName = this.diaryArr[i].firstName;
              this.diaryInf.lastName = this.diaryArr[i].lastName;
              this.diaryInf.gender = this.diaryArr[i].gender;
              this.diaryInf.date = {
                month: this.diaryArr[i].month,
                day: this.diaryArr[i].day,
                year: this.diaryArr[i].year
              };
              this.diaryInf.activity = this.diaryArr[i].activity;
              this.diaryInf.calories = this.diaryArr[i].calories;
              this.diaryInf.height = this.changeInfoService.recountHeight(this.diaryArr[i].height, 1);
              this.diaryInf.weight = this.changeInfoService.recountWeight(this.diaryArr[i].weight);
              break;
            }
          }
        }
      }
    });
  }

  goToElement(element: any, prevEl: any){
    if(element.confirmed || (prevEl && prevEl.active)) {
      element.active = true;
      if(prevEl) prevEl.confirmed = true;
      this.presentElement = element;
    }
  }

  loadPhoto($event){
    this.changeInfoService.loadPhoto($event.target.files[0],  (res)=>{
      this.diaryInf.img = res;
    });

  }

  changeInputHeight(string: string){
    let koefH = parseFloat((<HTMLInputElement>document.querySelector('input[name="koefH"]:checked')).value);
    if(string){
      this.diaryInf.height = this.changeInfoService.recountHeight(parseFloat(string), koefH);
      this.heightInput = false;
    }
  }



  saveDiary(save:boolean){
    if(save){

      let diary = this.changeInfoService.getNewDiary();
      let id = '/' + this.id;

      this.authService.post('/private/diaries' + id, diary).subscribe((response: any) => {
        let res = JSON.parse(response._body);
        if(res.status) {
          this.userDataService.saveDiary(res.res);
          this.location.back();
        }
      }, (error) => {});

    } else {
      this.location.back();
    }
  }

  onResize(event) {
    if(this.isMobile){
      if(this.isMobileService.getGlobalHeight() > window.innerHeight){
        document.documentElement.style.top = '-50%';
        document.documentElement.style.position = 'absolute';
      } else {
        document.documentElement.style.position = 'initial';
      }
    }
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.userListener.unsubscribe();
  }
}