import {Component, ViewChild, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

import {SliderService} from "../../service/slider.service";
import {ListenerService} from "../../service/listener.service";
import {IsMobileService} from "../../service/is-mobile.service";
import {AuthService} from "../../service/auth.service";
import {UserDataService} from "../../service/user-data.service";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent{
  @ViewChild('navig') navig: ElementRef;
  @ViewChild('infos') infos: ElementRef;

  public isMobile: boolean = false;
  private appData: any ;

  loginForm : FormGroup;

  public params = {
    navEl: {},
    elementsArr: [],
    navLeftRight: [],
    pos: null,
    height: 1,
    redraw: false
  };

  constructor (
      private sliderService: SliderService,
      private router: Router,
      private location: Location,
      private listenerService: ListenerService,
      private isMobileService: IsMobileService,
      private authService: AuthService,
      private userDataService: UserDataService,
      private storageService: StorageService
  ){
    this.loginForm = new FormGroup({
      "email": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();

    this.appData.sliderPosition.state = this.isMobile ? '-5%' : '0%';
    this.appData.presentState.state = 'login';
    this.listenerService.changeAppListenerSubject(this.appData);

    this.getItemsArr();
  }

  getItemsArr(): void{
    this.params.elementsArr = [];
    this.params.elementsArr.push(this.infos.nativeElement);
    this.params.navEl = this.navig.nativeElement;

    this.sliderService.sliderStart(this.params);
    this.sliderService.redrawSlider(true);
  }

  logIn(){
    this.authService.post('/auth/login', this.loginForm.value).subscribe((response: any) => {

      let res = JSON.parse(response._body);

      if(res.status) {
        this.storageService.set('token', res.res.token);

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

  moveBack() {
    this.location.back();
  }
  
  onResize(event) {
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