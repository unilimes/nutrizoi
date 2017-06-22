import {Component} from "@angular/core";
import {ListenerService} from "../../service/listener.service";
import {IsMobileService} from "../../service/is-mobile.service";

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})

export class HistoryComponent {

  private isMobile: boolean = false;
  private appData: any ;

  constructor (
      private listenerService: ListenerService,
      private isMobileService: IsMobileService
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();
    this.appData.presentState.state = 'history';

    this.listenerService.changeAppListenerSubject(this.appData);
  }

}