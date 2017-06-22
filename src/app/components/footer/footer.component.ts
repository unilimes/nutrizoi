import { Component} from '@angular/core';
import {IsMobileService} from "../../service/is-mobile.service";
import {UserDataService} from "../../service/user-data.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'main-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  private isMobile:boolean = false;
  private email: string = '';
  private userListener: Subscription;

  constructor(
      private isMobileService: IsMobileService,
      private userDataService: UserDataService
  ) {}

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();

    this.userListener = this.userDataService.authListener.subscribe((auth: boolean) => {
      this.email = auth ? this.userDataService.getUser().email : '';
    });
  }

  ngOnDestroy() {
    this.userListener.unsubscribe();
  }
}
