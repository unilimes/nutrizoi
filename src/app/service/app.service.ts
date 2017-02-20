import {Injectable} from "@angular/core";

declare var Instruction;
declare var TWEEN;

@Injectable()
export class AppService {
  private animations: any = new Instruction();

  animate() {
    window.requestAnimationFrame(()=>{
      this.animations.run();
      this.animate();
      TWEEN.update();
    });
  }

  add(func){
    this.animations.add(func);
  }

  drop(func){
    this.animations.drop(func);
  }
}