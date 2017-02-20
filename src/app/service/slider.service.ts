import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

declare var TWEEN;

@Injectable()
export class SliderService {

  private points: any = {
    bezierArr:  [ 0.0, 30.243981,
      178.02607,80.805361,
      241.6437,6.6136306,
      350.37446,0.85366056,
      459.10522,-4.9063094,
      536.89577,59.369441,
      664.30674,31.376691 ],
    presentbezierArr: [],
    xfactor:  1,
    yfactor:  1,
    ypos: 0,
    multiPoints: []
  };

  private sliderElement: any;
  private redrawingSlider: boolean = false;
  private isMobile: boolean = false;
  private params: any = {
    navEl: {},
    elementsArr: [],
    height:  1 ,
    pos:  null,
    redraw:  false,
    navLeftRight: [],
    fullWidth: window.innerWidth,
    sliderLeftRightPadding: Math.round(0.04*window.innerWidth),
    itemsOnLine: 5
  };

  private moveFinish = new BehaviorSubject<number>(0);
  changedMoveFinish = this.moveFinish.asObservable();
  changeMoveFinish(value) {
    this.moveFinish.next(value);
  }

  setIsMobile(mob: boolean){
    this.isMobile = mob;
  }

  setSliderElement(element){
    this.sliderElement = element;
  }

  sliderStart(params){
    this.params = {
      navEl: params.navEl,
      elementsArr: params.elementsArr ? params.elementsArr : [],
      height: params.height ? params.height : 1 ,
      pos: params.pos ? params.pos : null,
      redraw: params.redraw ? params.redraw : false,
      navLeftRight: params.navLeftRight ? params.navLeftRight : [-100, 100],
      fullWidth: window.innerWidth,
      sliderLeftRightPadding: Math.round(0.04*window.innerWidth),
      itemsOnLine: params.itemsOnLine ? params.itemsOnLine : 6
    };

    this.sliderElement.width = this.sliderElement.offsetWidth;
    this.sliderElement.height = this.sliderElement.offsetWidth / ( 1860 / 130 );
    this.sliderElement.style.height = this.sliderElement.offsetWidth / ( 1860 / 130 ) + 'px';

    this.points.presentbezierArr = [];
    this.points.multiPoints = [];
    this.points.xfactor = this.sliderElement.width /  664;
    this.points.yfactor = (this.sliderElement.height / 49) *  this.params.height;

    for( var i = 0; i < this.points.bezierArr.length; i+=2 ){
      this.points.presentbezierArr.push(this.points.bezierArr[i]*this.points.xfactor);
      this.points.presentbezierArr.push(this.points.bezierArr[i+1]*this.points.yfactor+this.points.ypos);
    }

    let ctx = this.sliderElement.getContext("2d");
    ctx.clearRect(0, 0, this.sliderElement.width, this.sliderElement.height);
    ctx.strokeStyle="rgba(255,255,255,0.5)";
    ctx.beginPath();
    ctx.moveTo( this.points.presentbezierArr[0], this.points.presentbezierArr[1] );
    for( var i=2; i < this.points.presentbezierArr.length; i+=6 ){
      ctx.bezierCurveTo( this.points.presentbezierArr[i], this.points.presentbezierArr[i+1], this.points.presentbezierArr[i+2], this.points.presentbezierArr[i+3], this.points.presentbezierArr[i+4], this.points.presentbezierArr[i+5] );
    }

    ctx.stroke();

    let imgData = ctx.getImageData(0,0,this.sliderElement.width, this.sliderElement.height);

    for (let y = 0; y < this.sliderElement.width; y++) {
      let next = false;
      for (let x = 0; x < this.sliderElement.height; x++) {
        let index = (y + (x * imgData.width)) * 4;
        if(imgData.data[index+3] > 0 && !next){
          let pixel = {
            x: y,
            y: x
          };
          this.points.multiPoints.push(pixel);
          next = true;
        }
      }
    }

    this.setElementsOnLine();
  }

  setElementsOnLine(){

    let cvswidth =  this.params.fullWidth/this.params.itemsOnLine;
    let startKoef = 0;

    switch(this.params.elementsArr.length){
      case 0: break;
      case 1:
      case 2: startKoef = this.params.itemsOnLine/2; break;
      case 3:
      case 4: startKoef = (this.params.itemsOnLine/2 - 1) < 0 ? 0 : (this.params.itemsOnLine/2 - 1); break;
      case 5:
      case 6: startKoef = (this.params.itemsOnLine/2 - 2) < 0 ? 0 : (this.params.itemsOnLine/2 - 2); break;
      default: startKoef = 0; break;
    }


    if(this.params.pos){
      startKoef = this.params.pos;
    } else {
      startKoef = Math.ceil(startKoef);
    }

    if(!this.params.redraw){
      this.params.navEl.style.height = this.sliderElement.offsetHeight + 'px';
      this.params.navEl.style.left = cvswidth * startKoef +'px';
    }

    for(let i = 0; i < this.params.elementsArr.length; i++ ){
      let itemPos;
      if(!this.params.redraw) {
        this.params.elementsArr[i].style.left = cvswidth * i + 'px';
        itemPos = Math.round(cvswidth * (i + startKoef) - this.params.sliderLeftRightPadding);
      } else {
        let itemLeft = this.params.elementsArr[i].getBoundingClientRect().left;
        let itemRight = this.params.elementsArr[i].getBoundingClientRect().right;
        let itemHalfWidth = (itemRight - itemLeft)/2;
        itemPos =  Math.round(itemLeft + itemHalfWidth ) - this.params.sliderLeftRightPadding;
      }

      if(this.points.multiPoints[itemPos]){
        this.params.elementsArr[i].style.top = this.points.multiPoints[itemPos].y + 'px';
      } else {
        if(itemPos < 0){
          this.params.elementsArr[i].style.top = this.points.multiPoints[0].y + 'px';
        } else {
          this.params.elementsArr[i].style.top = this.points.multiPoints[this.points.multiPoints.length-1].y + 'px';
        }
      }
    }

    this.clearLineParts();
  }

  slideElements(element){
    let self = this;
    let elLeft = element.getBoundingClientRect().left;
    let elRight = element.getBoundingClientRect().right;
    let navLeft = parseInt(this.params.navEl.style.left);
    let distance = Math.round((elLeft + 0.5 * (elRight - elLeft)) - this.params.fullWidth/2 );
    let destination = navLeft - distance;
    let time = 500 *  Math.round(Math.abs(distance) / (this.params.fullWidth/this.params.itemsOnLine));
    let tweenObj = {x: navLeft || 0};

    let tween = new TWEEN.Tween(tweenObj).to({x: destination}, time).onUpdate(function () {

      self.params.navEl.style.left = this.x + 'px';

      for(let i = 0; i < self.params.elementsArr.length; i++ ){
        let itemLeft = self.params.elementsArr[i].getBoundingClientRect().left;
        let itemRight = self.params.elementsArr[i].getBoundingClientRect().right;
        let itemHalfWidth = (itemRight - itemLeft)/2;
        let itemPos =  Math.round(itemLeft + itemHalfWidth ) - self.params.sliderLeftRightPadding;

        if(self.points.multiPoints[itemPos]){
          if(itemLeft <  self.params.navLeftRight[0] * self.params.fullWidth || itemRight >  self.params.navLeftRight[1] * self.params.fullWidth){
            self.params.elementsArr[i].style.top = '-10000px';
          } else {
            self.params.elementsArr[i].style.top = self.points.multiPoints[itemPos].y + 'px' ;
          }
        }
      }

    }).onComplete(function () {
      self.changeMoveFinish(element);
    }).start();

  }

  redrawSlider(redrawing:boolean){
    this.redrawingSlider = redrawing;
  }

  clearLineParts(){
    if(this.points.presentbezierArr && this.redrawingSlider){
      let ctx = this.sliderElement.getContext("2d");
      ctx.clearRect(0, 0, this.sliderElement.width, this.sliderElement.height);
      ctx.strokeStyle="rgba(255,255,255,0.5)";
      ctx.beginPath();
      ctx.moveTo( this.points.presentbezierArr[0], this.points.presentbezierArr[1] );

      for( var i=2; i < this.points.presentbezierArr.length; i+=6 ){
        ctx.bezierCurveTo( this.points.presentbezierArr[i], this.points.presentbezierArr[i+1], this.points.presentbezierArr[i+2], this.points.presentbezierArr[i+3], this.points.presentbezierArr[i+4], this.points.presentbezierArr[i+5] );
      }

      ctx.stroke();


      for(let i = 0; i < this.params.elementsArr.length; i++ ){
        let left = this.params.elementsArr[i].getBoundingClientRect().left;
        let right = this.params.elementsArr[i].getBoundingClientRect().right;

        if((left < this.points.multiPoints[this.points.multiPoints.length - 1].x +  this.params.sliderLeftRightPadding) || (right >  this.params.sliderLeftRightPadding)){
          ctx.clearRect(left - this.params.sliderLeftRightPadding, 0, (right-left), this.sliderElement.height);
        }
      }

      if(this.params.navLeftRight[0] > -1){
        ctx.clearRect(0, 0, this.params.navLeftRight[0]/2 * this.params.fullWidth, this.sliderElement.height);
      }
      if(this.params.navLeftRight[1] < 1){
        ctx.clearRect((this.params.navLeftRight[1]+0.01) * this.sliderElement.width, 0, this.params.navLeftRight[1] * this.params.fullWidth, this.sliderElement.height);
      }
    }
  }


}