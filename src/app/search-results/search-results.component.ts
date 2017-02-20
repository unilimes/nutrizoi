import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})

export class SearchResultsComponent{
  private searchEmpty: boolean = false;
  private isMobile: boolean = false;
  private appData: any ;

  constructor (
      private listenerService: ListenerService,
      private router: Router,
      private isMobileService: IsMobileService
  ){ }

  ngOnInit(){
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();

    if(this.isMobile) {
      this.appData.searchInputVisible.state = true;
      this.listenerService.changeAppListenerSubject(this.appData);
    }
  }

  moveSearchView(){
    this.appData.searchValue.state = 'tap to find your recipe';
    this.listenerService.changeAppListenerSubject(this.appData);
    this.router.navigate(['/search/result-details', 0]);
  }
}