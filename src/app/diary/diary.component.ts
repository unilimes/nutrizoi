import {Component, ViewChild, ElementRef} from "@angular/core";
import {SliderService} from "../service/slider.service";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";

@Component({
  selector: 'diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.sass']
})

export class DiaryComponent {
  @ViewChild('navig') navig: ElementRef;
  @ViewChild('search') search: ElementRef;
  @ViewChild('diary') diary: ElementRef;
  @ViewChild('calendar') calendar: ElementRef;

  private isMobile: boolean = false;
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
      private isMobileService: IsMobileService
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();

    this.appData = this.listenerService.getAppListenerObject();

    if(this.isMobile){
      this.appData.sliderVisible.state = false;
      this.appData.footerHeaderVisible.state = false;
      this.listenerService.changeAppListenerSubject(this.appData);
    } else {
      this.appData.sliderVisible.state = true;
      this.appData.sliderPosition.state = '-35vh';
      this.listenerService.changeAppListenerSubject(this.appData);
      this.getItemsArr();
    }
  }

  getItemsArr(): void{
    this.params.elementsArr.push(this.search.nativeElement);
    this.params.elementsArr.push(this.diary.nativeElement);
    this.params.elementsArr.push(this.calendar.nativeElement);
    this.params.navEl = this.navig.nativeElement;

    this.sliderService.sliderStart(this.params);
    this.sliderService.redrawSlider(true);
  }

  onResize(event) {
    if( !this.isMobile )this.sliderService.sliderStart(this.params);
  }
}
