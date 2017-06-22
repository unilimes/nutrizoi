import {Component, ViewChild, ElementRef} from "@angular/core";
import {Subscription} from "rxjs/Rx";
import {Router} from "@angular/router";
import {SliderService} from "../../service/slider.service";
import {ListenerService} from "../../service/listener.service";
import {IsMobileService} from "../../service/is-mobile.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

export class SearchComponent{
  @ViewChild('navig') navig: ElementRef;
  @ViewChild('home') home: ElementRef;
  @ViewChild('search') search: ElementRef;
  @ViewChild('calendar') calendar: ElementRef;

  private isMobile: boolean = false;
  private appListener: Subscription;
  private appData: any ;

  public params = {
    navEl: {},
    elementsArr: [],
    navLeftRight: [],
    pos: null,
    height: 0.667,
    redraw: false
  };


  constructor (
      private sliderService: SliderService,
      private listenerService: ListenerService,
      private isMobileService: IsMobileService,
      private router: Router
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();
    this.appData.presentState.state = 'search';
    if( !this.isMobile ){
      this.appData.sliderPosition.state = '-35vh';
      this.getItemsArr();
    }
    this.listenerService.changeAppListenerSubject(this.appData);

    this.appListener = this.listenerService.appListener.subscribe((appListener: any) => {
      this.appData = appListener;
    });
  }


  getItemsArr(): void{
    this.params.elementsArr.push(this.home.nativeElement);
    this.params.elementsArr.push(this.search.nativeElement);
    this.params.elementsArr.push(this.calendar.nativeElement);
    this.params.navEl = this.navig.nativeElement;

    this.sliderService.sliderStart(this.params);
    this.sliderService.redrawSlider(true);
  }

  changeSearch(){
    this.listenerService.changeAppListenerSubject(this.appData);
    this.router.navigate(['/search/search-results', this.appData.searchValue.state]);
  }

  clearInput() {
    this.appData.searchValue.state = '';
    this.listenerService.changeAppListenerSubject(this.appData);
  }

  onResize(event) {
    if( !this.isMobile ) this.sliderService.sliderStart(this.params);
  }

  ngOnDestroy(){
    this.appListener.unsubscribe();
  }
}