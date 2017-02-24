import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { DateComponent } from './date/date.component';
import { DiariesSelectComponent } from './diaries-select/diaries-select.component';
import { DiaryComponent } from './diary/diary.component';
import { FoodComponent } from './food/food.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { NutritionalComponent } from './nutritional/nutritional.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { SearchComponent } from './search/search.component';
import { SearchDiaryComponent } from './search-diary/search-diary.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SelectedDiaryComponent } from './selected-diary/selected-diary.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SignupComponent } from './signup/signup.component';

import {routing} from "./router";
import {SliderService} from "./service/slider.service";
import {ListenerService} from "./service/listener.service";
import {ChangeInfoService} from "./service/change-info.service";
import {IsMobileService} from "./service/is-mobile.service";
import {GreenScaleService} from "./service/green-scale.service";
import {AppService} from "./service/app.service";
import {StorageService} from "./service/storage.service";
import {AuthService} from "./service/auth.service";
import {UserDataService} from "./service/user-data.service";
import {SearchDataService} from "./service/search-data.service";

import {FocusDirective} from "./directive/focus.directive";
import {SlimScroll} from "./directive/slimscroll.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarPageComponent,
    DateComponent,
    DiariesSelectComponent,
    DiaryComponent,
    FoodComponent,
    FooterComponent,
    HeaderComponent,
    HistoryComponent,
    LoginComponent,
    NutritionalComponent,
    ResultDetailsComponent,
    SearchComponent,
    SearchDiaryComponent,
    SearchResultsComponent,
    SelectedDiaryComponent,
    SideMenuComponent,
    SignupComponent,
    FocusDirective,
    SlimScroll
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    SliderService,
    ListenerService,
    ChangeInfoService,
    IsMobileService,
    GreenScaleService,
    AppService,
    StorageService,
    AuthService,
    UserDataService,
    SearchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
