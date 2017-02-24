import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";
import {AuthService} from "../service/auth.service";
import {SearchDataService} from "../service/search-data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})

export class SearchResultsComponent{
  private isMobile: boolean = false;
  private appData: any ;
  private searchData: any = [];
  private id: number;
  private paramsSub: any;

  constructor (
      private route: ActivatedRoute,
      private listenerService: ListenerService,
      private router: Router,
      private isMobileService: IsMobileService,
      private authService: AuthService,
      private searchDataService: SearchDataService
  ){ }

  ngOnInit(){
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();

    this.paramsSub = this.route.params.subscribe(params => {
      this.appData.searchValue.state = this.id = params['id'];

      if(this.appData.searchValue.state){
        this.authService.get('/public/recipes/title/'+this.appData.searchValue.state).subscribe((response: any) => {
          let res = JSON.parse(response._body);
          if(res.status) {
            this.searchDataService.setSearchRes(res.res);
          } else {
            this.searchDataService.setSearchRes([]);
          }
          this.searchData = this.searchDataService.getSearchRes();
        }, (error) => {});
      } else {
        this.searchData = this.searchDataService.setSearchRes([]);
      }
    });

    if(this.isMobile) {
      this.appData.searchInputVisible.state = true;
      this.listenerService.changeAppListenerSubject(this.appData);
    }
  }

  moveSearchView(){
    this.appData.searchValue.state = '';
    this.listenerService.changeAppListenerSubject(this.appData);
    this.router.navigate(['/search/create']);
  }
}