import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {IsMobileService} from "../service/is-mobile.service";
import {ListenerService} from "../service/listener.service";

@Component({
  selector: 'nutritional',
  templateUrl: './nutritional.component.html',
  styleUrls: ['./nutritional.component.sass']
})

export class NutritionalComponent {
  private isMobile: boolean = false;
  private appData: any ;
  private appListener: Subscription;

  constructor (
      private isMobileService: IsMobileService,
      private listenerService: ListenerService,
      private router: Router
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();

    this.appListener = this.listenerService.appListener.subscribe((appListener: any) => {
      this.appData = appListener;
    });
  }

  toggleState(){
    if( this.isMobile ){
      this.appData.presentState.state = 'nutritional';
      this.listenerService.changeAppListenerSubject(this.appData);
      this.router.navigate(['/nutritional']);
      return;
    } else {
      this.appData.nutritionalStateOpen.state = !this.appData.nutritionalStateOpen.state;
      this.listenerService.changeAppListenerSubject(this.appData);
    }

  }

  ngOnDestroy(){
    this.appListener.unsubscribe();
  }
}