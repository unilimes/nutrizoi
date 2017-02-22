import {Component, ElementRef, ViewChild, trigger, state, style, transition, animate} from '@angular/core';
import {Subscription} from "rxjs/Rx";
import {AppService} from "./service/app.service";
import {SliderService} from "./service/slider.service";
import {IsMobileService} from "./service/is-mobile.service";
import {ListenerService} from "./service/listener.service";
import {AuthService} from "./service/auth.service";
import {UserDataService} from "./service/user-data.service";

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  @ViewChild('slider') slider: ElementRef;

  private appListener: Subscription;
  private appData: any ;
  private isMobile: boolean = false;
  private footHeadVis: boolean = true;
  private sliderVis: boolean = true;

  constructor(
      private appService: AppService,
      private sliderService: SliderService,
      private isMobileService: IsMobileService,
      private listenerService: ListenerService,
      private authService: AuthService,
      private userDataService: UserDataService
  ){  }


  ngOnInit() {

    this.authService.get('/private/users').subscribe((response: any) => {
      let res = JSON.parse(response._body);
      if(res.status){
        this.userDataService.setUser(res.res);
      }

    }, (error) => {});

    this.appService.animate();
    this.isMobile = this.isMobileService.findIsMobile();
    this.sliderService.setIsMobile(this.isMobile);
    this.sliderService.setSliderElement(this.slider.nativeElement);
    this.appData = this.listenerService.getAppListenerObject();

    this.appListener = this.listenerService.appListener.subscribe((appListener: any) => {
      this.appData = appListener;
      this.footHeadVis = (!this.isMobile || (this.isMobile && (this.appData.presentState.state === 'home'
                                    ||  this.appData.presentState.state === 'calendar'
                                    || this.appData.presentState.state === 'date'))) ?  true : false;
      this.sliderVis = ((!this.isMobile && (this.appData.presentState.state !== 'calendar'))
                              || (this.isMobile && (this.appData.presentState.state == 'home' || this.appData.presentState.state == 'date'))) ?  true : false;
    });

    this.isMobileService.setGlobalHeight();

    this.sliderService.redrawSlider(false);
  }

  ngAfterContentInit() {
    this.sliderRedrawStart();
  }


  sliderRedrawStart(){
    let self = this;
    let redraw = function () {
      self.sliderService.clearLineParts();
    };
    this.appService.add(redraw);
  }

  sideMenuOpen(){
    this.appData.sideMenuVisible.state = 'in';
    this.listenerService.changeAppListenerSubject(this.appData);
  }

  ngOnDestroy(){
    this.appListener.unsubscribe();
  }


  onResize(event) {
    if(this.isMobile){
      if(!this.isMobileService.getGlobalHeight()){
        this.isMobileService.setGlobalHeight();
      }
    }

  }

}
