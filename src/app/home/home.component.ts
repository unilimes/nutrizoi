import {Component, ViewChild, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {SliderService} from "../service/slider.service";
import {ListenerService} from "../service/listener.service";
import {IsMobileService} from "../service/is-mobile.service";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent{
  @ViewChild('navig') navig: ElementRef;
  @ViewChild('slideComp1') slideComp1: ElementRef;
  @ViewChild('search') search: ElementRef;
  @ViewChild('slideComp3') slideComp3: ElementRef;

  private moveFinishListener: Subscription;
  private selectedElement: any;
  public sliderDown: boolean = true;
  public searchValue: string;

  public isMobile: boolean = false;
  private appData: any ;

  public params = {
    navEl: {},
    elementsArr: [],
    navLeftRight: [],
    height: 1,
    pos: null,
    redraw: false,
    itemsOnLine: 6
  };

  constructor (
      private sliderService: SliderService,
      private listenerService: ListenerService,
      private router: Router,
      private isMobileService: IsMobileService
  ){ }

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
    this.appData = this.listenerService.getAppListenerObject();
    this.appData.presentState.state = 'home';
    this.isMobile ? this.appData.sliderPosition.state = '30%' : this.appData.sliderPosition.state = '10%';
    this.listenerService.changeAppListenerSubject(this.appData);
    this.getItemsArr();

    this.moveFinishListener = this.sliderService.changedMoveFinish.subscribe((item: any) => {
      this.selectedElement = item;

      if (this.selectedElement == this.slideComp1.nativeElement || this.selectedElement == this.slideComp3.nativeElement) {
        this.searchCtrlDeactive();
      } else if (this.selectedElement == this.search.nativeElement){
        this.searchCtrlActive();
      }

    });
  }

  ngAfterContentInit() {
    this.selectedElement = this.search.nativeElement;
  }

  ngOnDestroy(){
    this.moveFinishListener.unsubscribe();
  }

  getItemsArr(): void{
    this.params.elementsArr = [];
    this.params.elementsArr.push(this.slideComp1.nativeElement);
    this.params.elementsArr.push(this.search.nativeElement);
    this.params.elementsArr.push(this.slideComp3.nativeElement);

    this.params.navEl = this.navig.nativeElement;
    this.params.itemsOnLine = this.isMobile ? 4 : 6;
    this.sliderService.sliderStart(this.params);
    this.sliderService.redrawSlider(true);
  }

  onResize(event) {
    this.params.redraw = true;
    this.sliderService.sliderStart(this.params);
  }

  moveItems(item: any){

    if( this.selectedElement !== item ) {
      this.selectedElement = null;
      this.sliderService.slideElements(item);
    }
  }

  searchCtrlDeactive(){
    this.sliderDown = false;
    this.params.height = 1;
    this.params.redraw = true;
    this.sliderService.sliderStart(this.params);
    this.isMobile ? this.appData.sliderPosition.state = '0' : this.appData.sliderPosition.state = '3%';
    this.listenerService.changeAppListenerSubject(this.appData);
  }

  searchCtrlActive(){
    this.sliderDown = true;
    this.params.height = 0.667;
    this.params.redraw = false;
    this.sliderService.sliderStart(this.params);
    this.isMobile ? this.appData.sliderPosition.state = '30%' : this.appData.sliderPosition.state = '10%';
    this.listenerService.changeAppListenerSubject(this.appData);
  }

  moveSearchView(){
    this.listenerService.changeAppListenerSubject(this.appData);
    this.router.navigate(['/search']);
  }
}