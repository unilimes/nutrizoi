import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";

import {IsMobileService} from "../../service/is-mobile.service";
import {UserDataService} from "../../service/user-data.service";
import {SideMenuService} from "../../service/side-menu.service";

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent{
  public auth: boolean = false;
  public isMobile: boolean = false;
  private sideMenuLis: Subscription;
  private openMenu: string;
  private userListener: Subscription;
  private userData: any ;

  constructor (
      private isMobileService: IsMobileService,
      private sideMenuService: SideMenuService,
      private userDataService: UserDataService,
      private router: Router
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();

    this.sideMenuLis = this.sideMenuService.openLis.subscribe((openMenu: string) => {
      this.openMenu = openMenu;
    });

    this.userListener = this.userDataService.authListener.subscribe((auth: boolean) => {
      this.auth = auth;
      if(auth)this.userData = this.userDataService.getUser();
    });
  }

  sideMenuOpen(){
    if(!this.isMobile){
      this.router.navigate(['/']);
    } else {
      this.sideMenuService.changeOpenListenerSub('in');
    }
  }

  ngOnDestroy(){
    this.sideMenuLis.unsubscribe();
    this.userListener.unsubscribe();
  }

}