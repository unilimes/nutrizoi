import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CalendarPageComponent} from "./calendar-page/calendar-page.component";
import {DateComponent} from "./date/date.component";
import {NutritionalComponent} from "./nutritional/nutritional.component";
import {FoodComponent} from "./food/food.component";
import {HistoryComponent} from "./history/history.component";
import {SelectedDiaryComponent} from "./selected-diary/selected-diary.component";
import {DiariesSelectComponent} from "./diaries-select/diaries-select.component";
import {DiaryComponent} from "./diary/diary.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {ResultDetailsComponent} from "./result-details/result-details.component";
import {SearchResultsComponent} from "./search-results/search-results.component";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";

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
                path: 'result-details/:id',
                component: ResultDetailsComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignupComponent
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