import {Injectable} from "@angular/core";

@Injectable()
export class GreenScaleService {

  drawScale(strokeWidth, endAngle){
    let start ={
      x: 52 + strokeWidth/2 + (52 * Math.cos((endAngle-90) * Math.PI / 180.0)),
      y: 52 + strokeWidth/2 + (52 * Math.sin((endAngle-90) * Math.PI / 180.0))
    };

    let largeArcFlag = endAngle <= 180 ? "0" : "1";
    let d = ["M", start.x, start.y, "A", 52, 52, 0, largeArcFlag, 0, 52+strokeWidth/2, strokeWidth/2].join(" ");
    return d;
  }

}