import {Component} from '@angular/core';
import {ListenerService} from "../../service/listener.service";
import {SideMenuService} from "../../service/side-menu.service";

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
      private sideMenuService: SideMenuService,
      private listenerService: ListenerService
  ){ }

  ngOnInit() {
    this.appData = this.listenerService.getAppListenerObject();
  }

  sideMenuClose(){
    this.sideMenuService.changeOpenListenerSub('out');
  }
}