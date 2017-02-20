import {Injectable} from "@angular/core";

declare var device;
@Injectable()
export class IsMobileService {

  public deviceFlag: boolean;
  public positionFlag: boolean;
  public globalHeight: number;

  findIsMobile(){
    this.deviceFlag = device.mobile() || device.tablet();
    return this.deviceFlag;
  }
  isMobile(){
    return this.deviceFlag;
  }
  isPortrait(){
    this.positionFlag = device.portrait();
    return this.positionFlag;
  }

  setGlobalHeight(){
    if(this.isPortrait()) this.globalHeight = window.innerHeight;
    let html = document.documentElement;
    if(this.globalHeight){
      html.style.height = this.globalHeight + 'px';
    }
  }

  getGlobalHeight(){
    return this.globalHeight;
  }
}