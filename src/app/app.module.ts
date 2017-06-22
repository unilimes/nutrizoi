import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';
import { DateComponent } from './components/date/date.component';
import { DiariesSelectComponent } from './components/diary/diaries-select/diaries-select.component';
import { DiaryComponent } from './components/diary/diary.component';
import { FoodComponent } from './components/food/food.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { NutritionalComponent } from './components/nutritional/nutritional.component';
import { ResultDetailsComponent } from './components/search/result-details/result-details.component';
import { SearchComponent } from './components/search/search.component';
import { SearchDiaryComponent } from './components/search-diary/search-diary.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SelectedDiaryComponent } from './components/diary/selected-diary/selected-diary.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SignupComponent } from './components/signup/signup.component';

import {routing} from "./router";
import {LoggedGuardService} from "./service/logged-guard.service";
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
import {SideMenuService} from "./service/side-menu.service";

import {FocusDirective} from "./directive/focus.directive";
import {SlimScroll} from "./directive/slimscroll.directive";
import { EqualValidator } from './directive/equal-validator.directive';

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
    SlimScroll,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    SearchDataService,
    SideMenuService,
    LoggedGuardService //access to login & signup
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
