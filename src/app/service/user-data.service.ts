import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class UserDataService {

  public user: any;
  public auth: boolean = false;


  public authSubject = new BehaviorSubject<boolean>(this.auth);
  authListener = this.authSubject.asObservable();
  changeAuthSubject(auth: boolean) {
    this.authSubject.next(auth);
  }

  isAuth(){
    return this.auth;
  }

  getUser(key?: string){
    if(key) return this.user[key];
    return this.user;
  }

  setUser(value){
    this.user = value;
    this.changeAuthSubject(true);
    return this.user;
  }

  getDiaries(){
    return this.user.diaries;
  }

  saveDiary(diary: any){
    let create = true;
    for(let i = 0; i < this.user.diaries.length; i++){
      if(this.user.diaries[i]._id == diary._id){
        create = false;
        this.user.diaries[i] = diary;
        break;
      }
    }

    if(create){
      this.user.diaries.push(diary);
    }
  }

}