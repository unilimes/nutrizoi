import {Component} from "@angular/core";
import {Subscription} from "rxjs/Rx";
import {IsMobileService} from "../service/is-mobile.service";
import {UserDataService} from "../service/user-data.service";
import {ListenerService} from "../service/listener.service";

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent{
  public auth: boolean = false;
  public isMobile: boolean = false;
  private appListener: Subscription;
  private appData: any ;
  private userListener: Subscription;
  private userData: any ;

  constructor (
      private isMobileService: IsMobileService,
      private listenerService: ListenerService,
      private userDataService: UserDataService
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();

    this.appListener = this.listenerService.appListener.subscribe((appListener: any) => {
      this.appData = appListener;
    });

    this.userListener = this.userDataService.authListener.subscribe((auth: boolean) => {
      this.auth = auth;
      if(auth){
        this.userData = this.userDataService.getUser();
      }
    });
  }

  sideMenuOpen(){
    this.appData.sideMenuVisible.state = 'in';
    this.listenerService.changeAppListenerSubject(this.appData);
  }

  ngOnDestroy(){
    this.appListener.unsubscribe();
    this.userListener.unsubscribe();
  }

}