import {Component} from "@angular/core";
import {Subscription} from "rxjs/Rx";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.sass']
})

export class FoodComponent {
  private isMobile: boolean = false;
  private appListener: Subscription;
  private appData: any ;
  private halfWindow: number = 0.325 * window.innerWidth;

  constructor (
      private isMobileService: IsMobileService,
      private listenerService: ListenerService
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();
    if(this.isMobile){
      this.appData.sliderVisible.state = false;
      this.appData.footerHeaderVisible.state = false;
      this.listenerService.changeAppListenerSubject(this.appData);
    }

    this.appListener = this.listenerService.appListener.subscribe((appListener: any) => {
      this.appData = appListener;
    });
  }


  ngOnDestroy(){
    this.appListener.unsubscribe();
  }
}