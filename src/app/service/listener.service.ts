import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ListenerService {

  public myDiaries: any = [
    {
      img: './resources/images/avatars/f3.jpg',
      firstName: 'Kate',
      lastName: 'Root',
      gender: 'male',
      height: 175,
      weight: 70,
      activity: 'normal',
      date: {
        month: 2,
        day: 15,
        year: 1990
      },
      id: 1,
      greenline: {
        total: 90,
        calories: 85,
        micro: 30,
        macro: 65
      }
    },
    {
      img: './resources/images/avatars/f3.jpg',
      firstName: 'John',
      lastName: 'Snow',
      gender: 'male',
      height: 175,
      weight: 70,
      activity: 'normal',
      date: {
        month: 2,
        day: 15,
        year: 1990
      },
      id: 2,
      greenline: {
        total: 90,
        calories: 85,
        micro: 30,
        macro: 65
      }
    },
    {
      img: './resources/images/avatars/f3.jpg',
      firstName: 'Kate',
      lastName: 'Root',
      gender: 'male',
      height: 175,
      weight: 70,
      activity: 'normal',
      date: {
        month: 2,
        day: 15,
        year: 1990
      },
      id: 3,
      greenline: {
        total: 90,
        calories: 85,
        micro: 30,
        macro: 65
      }
    },
    {
      img: './resources/images/avatars/f3.jpg',
      firstName: 'Kate',
      lastName: 'Root',
      gender: 'male',
      height: 175,
      weight: 70,
      activity: 'normal',
      date: {
        month: 2,
        day: 15,
        year: 1990
      },
      id: 4,
      greenline: {
        total: 90,
        calories: 85,
        micro: 30,
        macro: 65
      }
    }
  ];

  public appListenerObject: any = {
    presentState: {state: ''},
    selectedFoodTime: {state: 0},
    nutritionalStateOpen: {state: false},
    sliderPosition: {state: '0px'},
    searchInputVisible: {state: true},
    sideMenuVisible: {state: 'out'},
    searchValue: {state: ''},
    saveFoodToDiary: {state: false}
  };

  public appListenerSubject = new BehaviorSubject<any>(this.appListenerObject);
  appListener = this.appListenerSubject.asObservable();
  changeAppListenerSubject(changedObject: any) {
    this.appListenerObject = changedObject;
    this.appListenerSubject.next(this.appListenerObject);
  }

  getAppListenerObject(){
    return this.appListenerObject;
  }





  getDiaries(){
    return this.myDiaries;
  }

  setDiaries(diary, id: number){
    let newDiary = true;
    for(let i = 0; i < this.myDiaries.length; i++){
      if(this.myDiaries[i].id == id){
        this.myDiaries[i] = diary;
        newDiary = false;
        break;
      }
    }
    if(newDiary){
      this.myDiaries.push(diary);
    }

  }

}