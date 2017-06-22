import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CalendarPageComponent} from "./components/calendar-page/calendar-page.component";
import {DateComponent} from "./components/date/date.component";
import {NutritionalComponent} from "./components/nutritional/nutritional.component";
import {FoodComponent} from "./components/food/food.component";
import {HistoryComponent} from "./components/history/history.component";
import {SelectedDiaryComponent} from "./components/diary/selected-diary/selected-diary.component";
import {DiariesSelectComponent} from "./components/diary/diaries-select/diaries-select.component";
import {DiaryComponent} from "./components/diary/diary.component";
import {SignupComponent} from "./components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";
import {ResultDetailsComponent} from "./components/search/result-details/result-details.component";
import {SearchResultsComponent} from "./components/search/search-results/search-results.component";
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent,
        children: [
            {
                path: '',
                redirectTo: 'search-results',
                pathMatch: 'full'
            },
            {
                path: 'search-results',
                component: SearchResultsComponent
            },
            {
                path: 'search-results/:id',
                component: SearchResultsComponent
            },
            {
                path: 'create',
                component: ResultDetailsComponent
            },
            {
                path: 'result-details/:id',
                component: ResultDetailsComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedGuardService]
    },
    {
        path: 'sign-up',
        component: SignupComponent,
        canActivate: [LoggedGuardService]
    },
    {
        path: 'diary',
        component: DiaryComponent,
        children: [
            {
                path: '',
                redirectTo: 'diaries-select',
                pathMatch: 'full'
            },
            {
                path: 'diaries-select',
                component: DiariesSelectComponent
            },
            {
                path: 'selected-diary/:id',
                component: SelectedDiaryComponent
            }
        ]
    },
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'profile',
        component: DateComponent
    },
    {
        path: 'calendar',
        component: CalendarPageComponent
    },
    {
        path: 'date/:id',
        component: DateComponent
    },
    {
        path: 'nutritional',
        component: NutritionalComponent
    },
    {
        path: 'food',
        component: FoodComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);