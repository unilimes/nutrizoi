import {Injectable} from "@angular/core";

@Injectable()
export class ChangeInfoService {

  public newDiary: any = {
    img: 'assets/resources/images/diary/add-photo.png',
    firstName: '',
    lastName: '',
    gender: 'male',
    height: 175,
    weight: 70,
    date: {
      month: 3,
      day: 15,
      year: 1990
    },
    activity: 'normal',
    calories: 2700
  };

  resetDiary(){
    this.newDiary = {
      img: 'assets/resources/images/diary/add-photo.png',
      firstName: '',
      lastName: '',
      gender: 'male',
      height: 175,
      weight: 70,
      date: {
        month: 3,
        day: 15,
        year: 1990
      },
      activity: 'normal',
      calories: 2700
    };
  }

  setNewDiary(diary: any){
    this.newDiary = diary;
  }

  getNewDiary(){
    return this.newDiary;
  }

  changeFirstName(value: string){
    this.newDiary.firstName = value;
    return this.newDiary.firstName;
  }

  changeLastName(value: string){
    this.newDiary.lastName = value;
    return this.newDiary.lastName;
  }

  changeGender(value){
    if(value == 'male'){
      this.newDiary.gender = 'female';
    } else {
      this.newDiary.gender = 'male';
    }
    return this.newDiary.gender;
  }

  changeActivity(num, value){
    let res;
    if(num > 0){
      switch(value){
        case 'high': res = 'high'; break;
        case 'normal': res = 'high'; break;
        case 'low': res = 'normal'; break;
        default: break;
      }
    } else {
      switch(value){
        case 'high': res = 'normal'; break;
        case 'normal': res = 'low'; break;
        case 'low': res = 'low'; break;
        default: break;
      }
    }
    this.newDiary.activity = res;
    return this.newDiary.activity;
  }

  spinHeight(num){
    this.newDiary.height += num;
    return this.recountHeight(this.newDiary.height, 1);
  }
  recountHeight(num, koefH){
    this.newDiary.height = num;
    let tempNum = Math.ceil((num*koefH)*10)/10;
    let inches =Math.round(tempNum*0.393700787);
    let feet = Math.floor(inches / 12);
    inches %= 12;
    let resultHeight = feet + "ft " + inches + 'in / ' + tempNum + 'cm' ;
    return resultHeight;
  }

  spinWeight(num){
    this.newDiary.weight += num;
    return this.recountWeight(this.newDiary.weight);
  }
  changeWeight(string: string){
    if(string.match(/\d+/)){
      this.newDiary.weight  = this.filterOnlyNumbers(string);
    }
    return this.recountWeight(this.newDiary.weight );
  }
  recountWeight(num){
    let pd = parseInt((num/0.4536).toFixed(2));
    let resultWeight = pd + ' pd / ' + num + ' kg' ;
    return resultWeight;
  }

  filterOnlyNumbers(string: string){
    let tempNum = parseFloat(string.match(/\d+[\.\,]?\d*/)[0].replace(/,/g,'.')).toFixed(1);
    return parseFloat(tempNum);
  }

  spinDate(num, type){
    if(type == 'month'){
      this.newDiary.date.month += num;
      return this.newDiary.date.month;
    } else if(type == 'day'){
      this.newDiary.date.day += num;
      return this.newDiary.date.day;
    } else if(type == 'year'){
      this.newDiary.date.year += num;
      return this.newDiary.date.year;
    }
  }
  changeMonth(string: string){
    if(string){
      this.newDiary.date.month = parseInt(string);
    }
    return this.newDiary.date.month;
  }
  changeDay(string: string){
    if(string){
      this.newDiary.date.day = parseInt(string);
    }
    return this.newDiary.date.day;
  }
  changeYear(string: string){
    if(string){
      this.newDiary.date.year = parseInt(string);
    }
    return this.newDiary.date.year;
  }

  spinCalories(num){
    this.newDiary.calories += num;
    return this.newDiary.calories;
  }
  changeCalories(string){
    if(string){
      this.newDiary.calories = parseInt(string);
    }
    return this.newDiary.calories;
  }

}