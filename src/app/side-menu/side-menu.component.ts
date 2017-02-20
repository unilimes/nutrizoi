import {Component} from '@angular/core';
import {ListenerService} from "../service/listener.service";

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent {
  private appData: any ;
  private loggedin: boolean = true;
  private avatarImg: string = 'resources/images/search/instagram1.jpg';
  private avatarName: string = 'Stanislav Molchanov';

  constructor (
      private listenerService: ListenerService
  ){ }

  ngOnInit() {
    this.appData = this.listenerService.getAppListenerObject();
  }

  sideMenuClose(){
    this.appData.sideMenuVisible.state = 'out';
    this.listenerService.changeAppListenerSubject(this.appData);
  }
}