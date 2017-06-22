webpackJsonp([1,4],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsMobileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IsMobileService = (function () {
    function IsMobileService() {
    }
    IsMobileService.prototype.findIsMobile = function () {
        this.deviceFlag = device.mobile() || device.tablet();
        return this.deviceFlag;
    };
    IsMobileService.prototype.isMobile = function () {
        return this.deviceFlag;
    };
    IsMobileService.prototype.isPortrait = function () {
        this.positionFlag = device.portrait();
        return this.positionFlag;
    };
    IsMobileService.prototype.setGlobalHeight = function () {
        if (this.isPortrait())
            this.globalHeight = window.innerHeight;
        var html = document.documentElement;
        if (this.globalHeight) {
            html.style.height = this.globalHeight + 'px';
        }
    };
    IsMobileService.prototype.getGlobalHeight = function () {
        return this.globalHeight;
    };
    IsMobileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], IsMobileService);
    return IsMobileService;
}());
//# sourceMappingURL=C:/web/nut3/src/is-mobile.service.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListenerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListenerService = (function () {
    function ListenerService() {
        this.myDiaries = [
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
        this.appListenerObject = {
            presentState: { state: '' },
            selectedFoodTime: { state: '' },
            nutritionalStateOpen: { state: false },
            sliderPosition: { state: '0px' },
            searchInputVisible: { state: true },
            sideMenuVisible: { state: 'out' },
            searchValue: { state: '' },
            saveFoodToDiary: { state: false }
        };
        this.appListenerSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.appListenerObject);
        this.appListener = this.appListenerSubject.asObservable();
    }
    ListenerService.prototype.changeAppListenerSubject = function (changedObject) {
        this.appListenerObject = changedObject;
        this.appListenerSubject.next(this.appListenerObject);
    };
    ListenerService.prototype.getAppListenerObject = function () {
        return this.appListenerObject;
    };
    ListenerService.prototype.getDiaries = function () {
        return this.myDiaries;
    };
    ListenerService.prototype.setDiaries = function (diary, id) {
        var newDiary = true;
        for (var i = 0; i < this.myDiaries.length; i++) {
            if (this.myDiaries[i].id == id) {
                this.myDiaries[i] = diary;
                newDiary = false;
                break;
            }
        }
        if (newDiary) {
            this.myDiaries.push(diary);
        }
    };
    ListenerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ListenerService);
    return ListenerService;
}());
//# sourceMappingURL=C:/web/nut3/src/listener.service.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuService = (function () {
    function SideMenuService() {
        this.open = 'out';
        this.openListenerSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.open);
        this.openLis = this.openListenerSub.asObservable();
    }
    SideMenuService.prototype.changeOpenListenerSub = function (open) {
        this.open = open;
        this.openListenerSub.next(this.open);
    };
    SideMenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SideMenuService);
    return SideMenuService;
}());
//# sourceMappingURL=C:/web/nut3/src/side-menu.service.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem("nutrizoi:" + key));
    };
    StorageService.prototype.set = function (key, value) {
        localStorage.setItem("nutrizoi:" + key, JSON.stringify(value));
    };
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem("nutrizoi:" + key);
    };
    StorageService.prototype.getSession = function (key) {
        return JSON.parse(sessionStorage.getItem("nutrizoi:" + key));
    };
    StorageService.prototype.setSession = function (key, value) {
        sessionStorage.setItem("nutrizoi:" + key, JSON.stringify(value));
    };
    StorageService.prototype.removeSession = function (key) {
        sessionStorage.removeItem("nutrizoi:" + key);
    };
    StorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], StorageService);
    return StorageService;
}());
//# sourceMappingURL=C:/web/nut3/src/storage.service.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDataService = (function () {
    function UserDataService() {
        this.auth = false;
        this.authSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.auth);
        this.authListener = this.authSubject.asObservable();
    }
    UserDataService.prototype.changeAuthSubject = function (auth) {
        this.authSubject.next(auth);
    };
    UserDataService.prototype.isAuth = function () {
        return this.auth;
    };
    UserDataService.prototype.getUser = function (key) {
        if (key)
            return this.user[key];
        return this.user;
    };
    UserDataService.prototype.setUser = function (value) {
        this.user = value;
        this.changeAuthSubject(true);
        return this.user;
    };
    UserDataService.prototype.getDiaries = function () {
        return this.user.diaries;
    };
    UserDataService.prototype.saveDiary = function (diary) {
        var create = true;
        for (var i = 0; i < this.user.diaries.length; i++) {
            if (this.user.diaries[i]._id == diary._id) {
                create = false;
                this.user.diaries[i] = diary;
                break;
            }
        }
        if (create) {
            this.user.diaries.push(diary);
        }
    };
    UserDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], UserDataService);
    return UserDataService;
}());
//# sourceMappingURL=C:/web/nut3/src/user-data.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeInfoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangeInfoService = (function () {
    function ChangeInfoService() {
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
    ChangeInfoService.prototype.resetDiary = function () {
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
    };
    ChangeInfoService.prototype.setNewDiary = function (diary) {
        this.newDiary = diary;
    };
    ChangeInfoService.prototype.getNewDiary = function () {
        return this.newDiary;
    };
    ChangeInfoService.prototype.changeFirstName = function (value) {
        this.newDiary.firstName = value;
        return this.newDiary.firstName;
    };
    ChangeInfoService.prototype.changeLastName = function (value) {
        this.newDiary.lastName = value;
        return this.newDiary.lastName;
    };
    ChangeInfoService.prototype.loadPhoto = function (file, callback) {
        var _this = this;
        var fr = new FileReader();
        try {
            fr['readAsDataURL'](file);
            fr.onload = function () {
                _this.newDiary.img = fr.result;
                if (callback)
                    callback(_this.newDiary.img);
            };
        }
        catch (err) {
            console.log('load photo err: ', err);
        }
    };
    ChangeInfoService.prototype.changeGender = function (value) {
        if (value == 'male') {
            this.newDiary.gender = 'female';
        }
        else {
            this.newDiary.gender = 'male';
        }
        return this.newDiary.gender;
    };
    ChangeInfoService.prototype.changeActivity = function (num, value) {
        var res;
        if (num > 0) {
            switch (value) {
                case 'high':
                    res = 'high';
                    break;
                case 'normal':
                    res = 'high';
                    break;
                case 'low':
                    res = 'normal';
                    break;
                default: break;
            }
        }
        else {
            switch (value) {
                case 'high':
                    res = 'normal';
                    break;
                case 'normal':
                    res = 'low';
                    break;
                case 'low':
                    res = 'low';
                    break;
                default: break;
            }
        }
        this.newDiary.activity = res;
        return this.newDiary.activity;
    };
    ChangeInfoService.prototype.spinHeight = function (num) {
        this.newDiary.height += num;
        return this.recountHeight(this.newDiary.height, 1);
    };
    ChangeInfoService.prototype.recountHeight = function (num, koefH) {
        this.newDiary.height = num;
        var tempNum = Math.ceil((num * koefH) * 10) / 10;
        var inches = Math.round(tempNum * 0.393700787);
        var feet = Math.floor(inches / 12);
        inches %= 12;
        var resultHeight = feet + "ft " + inches + 'in / ' + tempNum + 'cm';
        return resultHeight;
    };
    ChangeInfoService.prototype.spinWeight = function (num) {
        this.newDiary.weight += num;
        return this.recountWeight(this.newDiary.weight);
    };
    ChangeInfoService.prototype.changeWeight = function (string) {
        if (string.match(/\d+/)) {
            this.newDiary.weight = this.filterOnlyNumbers(string);
        }
        return this.recountWeight(this.newDiary.weight);
    };
    ChangeInfoService.prototype.recountWeight = function (num) {
        var pd = parseInt((num / 0.4536).toFixed(2));
        var resultWeight = pd + ' pd / ' + num + ' kg';
        return resultWeight;
    };
    ChangeInfoService.prototype.filterOnlyNumbers = function (string) {
        var tempNum = parseFloat(string.match(/\d+[\.\,]?\d*/)[0].replace(/,/g, '.')).toFixed(1);
        return parseFloat(tempNum);
    };
    ChangeInfoService.prototype.spinDate = function (num, type) {
        if (type == 'month') {
            this.newDiary.date.month += num;
            return this.newDiary.date.month;
        }
        else if (type == 'day') {
            this.newDiary.date.day += num;
            return this.newDiary.date.day;
        }
        else if (type == 'year') {
            this.newDiary.date.year += num;
            return this.newDiary.date.year;
        }
    };
    ChangeInfoService.prototype.changeMonth = function (string) {
        if (string) {
            this.newDiary.date.month = parseInt(string);
        }
        return this.newDiary.date.month;
    };
    ChangeInfoService.prototype.changeDay = function (string) {
        if (string) {
            this.newDiary.date.day = parseInt(string);
        }
        return this.newDiary.date.day;
    };
    ChangeInfoService.prototype.changeYear = function (string) {
        if (string) {
            this.newDiary.date.year = parseInt(string);
        }
        return this.newDiary.date.year;
    };
    ChangeInfoService.prototype.spinCalories = function (num) {
        this.newDiary.calories += num;
        return this.newDiary.calories;
    };
    ChangeInfoService.prototype.changeCalories = function (string) {
        if (string) {
            this.newDiary.calories = parseInt(string);
        }
        return this.newDiary.calories;
    };
    ChangeInfoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ChangeInfoService);
    return ChangeInfoService;
}());
//# sourceMappingURL=C:/web/nut3/src/change-info.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenScaleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GreenScaleService = (function () {
    function GreenScaleService() {
    }
    GreenScaleService.prototype.drawScale = function (strokeWidth, endAngle) {
        var start = {
            x: 52 + strokeWidth / 2 + (52 * Math.cos((endAngle - 90) * Math.PI / 180.0)),
            y: 52 + strokeWidth / 2 + (52 * Math.sin((endAngle - 90) * Math.PI / 180.0))
        };
        var largeArcFlag = endAngle <= 180 ? "0" : "1";
        var d = ["M", start.x, start.y, "A", 52, 52, 0, largeArcFlag, 0, 52 + strokeWidth / 2, strokeWidth / 2].join(" ");
        return d;
    };
    GreenScaleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], GreenScaleService);
    return GreenScaleService;
}());
//# sourceMappingURL=C:/web/nut3/src/green-scale.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchDataService = (function () {
    function SearchDataService() {
        this.searchRes = [];
        this.selectedRecipe = {};
    }
    SearchDataService.prototype.setSearchRes = function (result) {
        this.searchRes = result;
        return this.searchRes;
    };
    SearchDataService.prototype.getSearchRes = function () {
        return this.searchRes;
    };
    SearchDataService.prototype.setSelectedRecipe = function (recipe) {
        this.selectedRecipe = Object.assign({}, recipe);
        return this.selectedRecipe;
    };
    SearchDataService.prototype.getSelectedRecipe = function () {
        return this.selectedRecipe;
    };
    SearchDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SearchDataService);
    return SearchDataService;
}());
//# sourceMappingURL=C:/web/nut3/src/search-data.service.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    AuthService.prototype.createAuthorizationHeader = function (headers) {
        var token = this.storageService.get("token") || null;
        headers.append('Authorization', token);
    };
    AuthService.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    AuthService.prototype.post = function (url, data) {
        if (data === void 0) { data = {}; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=C:/web/nut3/src/auth.service.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_green_scale_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_data_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CalendarPageComponent = (function () {
    function CalendarPageComponent(greenScaleService, location, listenerService, isMobileService, userDataService, authService) {
        this.greenScaleService = greenScaleService;
        this.location = location;
        this.listenerService = listenerService;
        this.isMobileService = isMobileService;
        this.userDataService = userDataService;
        this.authService = authService;
        this.isMobile = false;
        this.diaryArr = [];
        this.monthArr = [];
        this.days = [
            {
                user: '23d553w3456f353',
                diary: '58a489167a0d260dfc78ebdf',
                timestamp: 1485727200000,
                breakfast: [],
                lunch: [],
                dinner: [],
                snack: [],
                calories: 86,
                macro: 25,
                micro: 65
            },
            {
                user: '23d553w3456f353',
                diary: '58a496e3f8da0a0f50498962',
                timestamp: 1486072800000,
                breakfast: [],
                lunch: [],
                dinner: [],
                snack: [],
                calories: 86,
                macro: 25,
                micro: 65
            },
            {
                user: '23d553w3456f353',
                diary: '58a496e3f8da0a0f50498962',
                timestamp: 1487023200000,
                breakfast: [],
                lunch: [],
                dinner: [],
                snack: [],
                calories: 86,
                macro: 25,
                micro: 65
            },
            {
                user: '23d553w3456f353',
                diary: '58a496e3f8da0a0f50498962',
                timestamp: 1485727200000,
                breakfast: [],
                lunch: [],
                dinner: [],
                snack: [],
                calories: 86,
                macro: 25,
                micro: 65
            }
        ]; //should be taken from db
        this.isAuth = false;
        this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.month = new Date().getMonth();
        this.year = new Date().getFullYear();
        this.monthFilter = false;
        this.weekFilter = false;
        this.itemWidth = 0.018 * window.innerWidth;
    }
    CalendarPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.appData.presentState.state = 'calendar';
        this.listenerService.changeAppListenerSubject(this.appData);
        this.calendarGenerating();
        this.userListener = this.userDataService.authListener.subscribe(function (auth) {
            _this.isAuth = auth;
            if (auth) {
                _this.diaryArr = _this.userDataService.getDiaries();
                _this.calendarGenerating();
            }
        });
    };
    CalendarPageComponent.prototype.calendarGenerating = function () {
        var _this = this;
        var firstDayOfMonth = new Date(this.year, this.month, 1).getDay();
        var lastDateOfMonth = new Date(this.year, this.month + 1, 0).getDate();
        var lastDayOfLastMonth = this.month == 0 ? new Date(this.year - 1, 11, 0).getDate() : new Date(this.year, this.month, 0).getDate();
        this.lastDateOfMonth = lastDateOfMonth;
        var i = 1;
        this.monthArr = [];
        do {
            var date = new Date(this.year, this.month, i);
            var dayName = date.getDay();
            var timeStamp = date.getTime();
            var day = {
                day: dayName,
                date: i,
                month: this.month,
                year: this.year,
                timeStamp: timeStamp
            };
            if (i == 1) {
                var tempD = firstDayOfMonth, k = void 0;
                if (firstDayOfMonth == 0) {
                    k = lastDayOfLastMonth - 4;
                    tempD = 7;
                }
                else {
                    k = lastDayOfLastMonth - firstDayOfMonth + 2;
                }
                for (var j = 1; j < tempD; j++) {
                    var month = this.month - 1 < 0 ? 11 : this.month - 1;
                    var year = this.month - 1 < 0 ? this.year - 1 : this.year;
                    var dayName_1 = new Date(year, month, k).getDay();
                    var timeStamp_1 = new Date(year, month, k).getTime();
                    var day_1 = {
                        day: dayName_1,
                        date: k,
                        month: month,
                        year: year,
                        timeStamp: timeStamp_1
                    };
                    this.monthArr.push(day_1);
                    k++;
                }
            }
            else if (i == lastDateOfMonth) {
                this.monthArr.push(day);
                if (dayName == 0) {
                    break;
                }
                var date_1 = 1;
                var tempmonth = this.month + 1 > 11 ? 0 : this.month + 1;
                var year = this.month + 1 > 11 ? this.year + 1 : this.year;
                for (dayName += 1; dayName <= 7; dayName++) {
                    var timeStamp_2 = new Date(year, tempmonth, date_1).getTime();
                    var tempday = {
                        day: dayName,
                        date: date_1,
                        month: tempmonth,
                        year: year,
                        timeStamp: timeStamp_2
                    };
                    if (dayName == 7) {
                        tempday.day = 0;
                        this.monthArr.push(tempday);
                        break;
                    }
                    this.monthArr.push(tempday);
                    date_1++;
                }
                break;
            }
            this.monthArr.push(day);
            i++;
        } while (i <= lastDateOfMonth);
        this.selectedDay = this.monthArr[0];
        if (this.isAuth) {
            this.addDiariesToCalendDays();
            var reqObj = {
                firstDay: this.monthArr[0].timeStamp,
                lastDay: this.monthArr[this.monthArr.length - 1].timeStamp
            };
            this.authService.post('/private/days', reqObj).subscribe(function (response) {
                var res = JSON.parse(response._body);
                _this.addGreenLineToCalendDays(_this.days);
                if (res.status) {
                }
            }, function (error) { });
        }
    };
    CalendarPageComponent.prototype.addDiariesToCalendDays = function () {
        for (var i = 0; i < this.monthArr.length; i++) {
            for (var j = 0; j < this.diaryArr.length; j++) {
                this.monthArr[i][this.diaryArr[j]._id] = '';
            }
        }
    };
    CalendarPageComponent.prototype.addGreenLineToCalendDays = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < this.monthArr.length; j++) {
                if (this.monthArr[j].timeStamp == arr[i].timestamp) {
                    this.monthArr[j][arr[i].diary] = this.greenScaleService.drawScale(4, arr[i].calories * 36);
                    continue;
                }
            }
        }
    };
    CalendarPageComponent.prototype.changeMonth = function (numb) {
        if (this.month + numb > 11) {
            this.month = 0;
            this.year = this.year + 1;
        }
        else if (this.month + numb < 0) {
            this.month = 11;
            this.year = this.year - 1;
        }
        else {
            this.month += numb;
        }
        this.calendarGenerating();
    };
    CalendarPageComponent.prototype.changeYear = function (numb) {
        this.year += numb;
        this.calendarGenerating();
    };
    CalendarPageComponent.prototype.selectDay = function (day) {
        this.selectedDay = day;
    };
    CalendarPageComponent.prototype.moveBack = function () {
        this.location.back();
    };
    CalendarPageComponent.prototype.ngOnDestroy = function () {
        this.userListener.unsubscribe();
    };
    CalendarPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'calendar-page',
            template: __webpack_require__(560),
            styles: [__webpack_require__(540)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_green_scale_service__["a" /* GreenScaleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_green_scale_service__["a" /* GreenScaleService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_user_data_service__["a" /* UserDataService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object])
    ], CalendarPageComponent);
    return CalendarPageComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/web/nut3/src/calendar-page.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_slider_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_green_scale_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DateComponent = (function () {
    function DateComponent(route, sliderService, listenerService, isMobileService, greenScaleService, location, router, sanitizer, userDataService, authService) {
        this.route = route;
        this.sliderService = sliderService;
        this.listenerService = listenerService;
        this.isMobileService = isMobileService;
        this.greenScaleService = greenScaleService;
        this.location = location;
        this.router = router;
        this.sanitizer = sanitizer;
        this.userDataService = userDataService;
        this.authService = authService;
        this.isMobile = false;
        this.isAuth = false;
        this.nullDiary = {
            img: './assets/resources/images/search/add.png',
            greenline: {
                total: 0,
                calories: 0,
                micro: 0,
                macro: 0
            }
        };
        this.diaryArr = [];
        this.days = [
            {
                user: '23d553w3456f353',
                diary: '58a489167a0d260dfc78ebdf',
                timestamp: 1485727200000,
                breakfast: [],
                lunch: [],
                dinner: [],
                snack: [],
                calories: 86,
                macro: 25,
                micro: 65,
                LineCalories: '',
                LineMacro: '',
                LineMicro: ''
            }
        ];
        this.monthFilter = false;
        this.weekFilter = false;
        this.pointsTimeItems = {
            selectedTime: 0,
            breakfast: {
                point: {},
                id: 1
            },
            dinner: {
                point: {},
                id: 2
            },
            lunch: {
                point: {},
                id: 3
            },
            snack: {
                point: {},
                id: 4
            },
            desktopArr: [[-250, 50], [-125, 125], [25, 125], [150, 50], [-200, 90], [-50, 135], [100, 90], [-50, 275]]
        };
        this.params = {
            navEl: {},
            elementsArr: [],
            navLeftRight: [],
            pos: null,
            height: 1,
            redraw: false,
            itemsOnLine: 6
        };
    }
    DateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setDefaultId();
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.sanitizePoints();
        this.getItemsArr();
        // this.getDiaries(this.diaryArr);
        this.appData.sliderPosition.state = '';
        this.appData.presentState.state = 'date';
        this.listenerService.changeAppListenerSubject(this.appData);
        this.appListener = this.listenerService.appListener.subscribe(function (appListener) {
            _this.appData = appListener;
        });
        this.paramsSub = this.route.params.subscribe(function (params) {
            if (params['id'])
                _this.id = params['id'];
        });
        this.userListener = this.userDataService.authListener.subscribe(function (auth) {
            _this.isAuth = auth;
            if (auth) {
                _this.diaryArr = _this.userDataService.getDiaries();
                _this.getDataForDiaries();
            }
        });
        this.moveFinishListener = this.sliderService.changedMoveFinish.subscribe(function (item) {
            if (item) {
                _this.selectedElement = item;
            }
        });
    };
    DateComponent.prototype.ngAfterContentInit = function () {
        this.selectedElement = this.diary1.nativeElement;
    };
    DateComponent.prototype.setDefaultId = function () {
        var day = new Date().getDate();
        var year = new Date().getMonth();
        var month = new Date().getFullYear();
        this.id = new Date(year, month, day).getTime();
    };
    DateComponent.prototype.sanitizePoints = function () {
        for (var i = 0; i < this.pointsTimeItems.desktopArr.length; i++) {
            var string = this.sanitizer.bypassSecurityTrustStyle("translate(" + this.pointsTimeItems.desktopArr[i][0] + "%," + this.pointsTimeItems.desktopArr[i][1] + "%)");
            this.pointsTimeItems.desktopArr[i] = string;
        }
    };
    DateComponent.prototype.getDataForDiaries = function () {
        var _this = this;
        if (!this.isAuth)
            return;
        this.authService.get('/private/days/' + this.id).subscribe(function (response) {
            var res = JSON.parse(response._body);
            _this.addGreenLineToDiary(_this.days);
            if (res.status) {
            }
        }, function (error) { });
    };
    DateComponent.prototype.addGreenLineToDiary = function (days) {
        this.days[0].LineCalories = this.greenScaleService.drawScale(2, this.days[0].calories);
        this.days[0].LineMicro = this.greenScaleService.drawScale(2, this.days[0].micro);
        this.days[0].LineMacro = this.greenScaleService.drawScale(2, this.days[0].macro);
    };
    DateComponent.prototype.getItemsArr = function () {
        this.params.elementsArr.push(this.diary4.nativeElement);
        this.params.elementsArr.push(this.diary3.nativeElement);
        this.params.elementsArr.push(this.diary1.nativeElement);
        this.params.elementsArr.push(this.diary2.nativeElement);
        this.params.elementsArr.push(this.diary5.nativeElement);
        this.params.navEl = this.navig.nativeElement;
        this.params.itemsOnLine = this.isMobile ? 2 : 6;
        this.params.pos = this.isMobile ? -1 : null;
        this.params.navLeftRight = this.isMobile ? [] : [0.02, 0.98];
        this.sliderService.sliderStart(this.params);
        this.sliderService.redrawSlider(true);
    };
    DateComponent.prototype.moveItems = function (item) {
        if (this.selectedElement !== item) {
            this.selectedElement = null;
            this.sliderService.slideElements(item);
        }
    };
    DateComponent.prototype.selectTime = function (id) {
        if (this.isMobile) {
            this.router.navigate(['/food']);
            return;
        }
        this.pointsTimeItems.selectedTime = id;
        switch (this.pointsTimeItems.selectedTime) {
            case 1:
                this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[7];
                this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[4];
                this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[5];
                this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[6];
                break;
            case 2:
                this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[4];
                this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[7];
                this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[5];
                this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[6];
                break;
            case 3:
                this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[4];
                this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[5];
                this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[7];
                this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[6];
                break;
            case 4:
                this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[4];
                this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[5];
                this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[6];
                this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[7];
                break;
            default:
                this.pointsTimeItems.breakfast.point = this.pointsTimeItems.desktopArr[0];
                this.pointsTimeItems.dinner.point = this.pointsTimeItems.desktopArr[1];
                this.pointsTimeItems.lunch.point = this.pointsTimeItems.desktopArr[2];
                this.pointsTimeItems.snack.point = this.pointsTimeItems.desktopArr[3];
                break;
        }
        this.appData.selectedFoodTime.state = id;
        this.listenerService.changeAppListenerSubject(this.appData);
    };
    DateComponent.prototype.moveSearchView = function () {
        this.appData.searchValue.state = '';
        this.listenerService.changeAppListenerSubject(this.appData);
        this.router.navigate(['/search']);
    };
    DateComponent.prototype.moveBack = function () {
        this.location.back();
    };
    DateComponent.prototype.changeTime = function (val) {
    };
    DateComponent.prototype.closeNutritional = function () {
        this.appData.nutritionalStateOpen.state = false;
        this.listenerService.changeAppListenerSubject(this.appData);
    };
    DateComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
        this.moveFinishListener.unsubscribe();
        this.appListener.unsubscribe();
        this.userListener.unsubscribe();
    };
    DateComponent.prototype.onResize = function (event) {
        this.sliderService.sliderStart(this.params);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('navig'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object)
    ], DateComponent.prototype, "navig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('diary1'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _b) || Object)
    ], DateComponent.prototype, "diary1", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('diary2'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _c) || Object)
    ], DateComponent.prototype, "diary2", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('diary3'), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _d) || Object)
    ], DateComponent.prototype, "diary3", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('diary4'), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _e) || Object)
    ], DateComponent.prototype, "diary4", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('diary5'), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _f) || Object)
    ], DateComponent.prototype, "diary5", void 0);
    DateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'date',
            template: __webpack_require__(561),
            styles: [__webpack_require__(541)]
        }), 
        __metadata('design:paramtypes', [(typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__service_slider_service__["a" /* SliderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_slider_service__["a" /* SliderService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_listener_service__["a" /* ListenerService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__service_green_scale_service__["a" /* GreenScaleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__service_green_scale_service__["a" /* GreenScaleService */]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */]) === 'function' && _m) || Object, (typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _o) || Object, (typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _p) || Object, (typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__["a" /* UserDataService */]) === 'function' && _q) || Object, (typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_9__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__service_auth_service__["a" /* AuthService */]) === 'function' && _r) || Object])
    ], DateComponent);
    return DateComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());
//# sourceMappingURL=C:/web/nut3/src/date.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiariesSelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiariesSelectComponent = (function () {
    function DiariesSelectComponent(userDataService) {
        this.userDataService = userDataService;
        this.selectedDiary = {
            firstName: '',
            secondName: ''
        };
        this.diaryArr = [];
    }
    DiariesSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userListener = this.userDataService.authListener.subscribe(function (auth) {
            if (auth) {
                _this.diaryArr = _this.userDataService.getDiaries();
                _this.selectedDiary = _this.diaryArr[0];
            }
        });
    };
    DiariesSelectComponent.prototype.selectDiary = function (diary) {
        this.selectedDiary = diary;
    };
    DiariesSelectComponent.prototype.ngOnDestroy = function () {
        this.userListener.unsubscribe();
    };
    DiariesSelectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'diaries-select',
            template: __webpack_require__(562),
            styles: [__webpack_require__(542)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__["a" /* UserDataService */]) === 'function' && _a) || Object])
    ], DiariesSelectComponent);
    return DiariesSelectComponent;
    var _a;
}());
//# sourceMappingURL=C:/web/nut3/src/diaries-select.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_slider_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_is_mobile_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiaryComponent = (function () {
    function DiaryComponent(sliderService, listenerService, isMobileService) {
        this.sliderService = sliderService;
        this.listenerService = listenerService;
        this.isMobileService = isMobileService;
        this.isMobile = false;
        this.params = {
            navEl: {},
            elementsArr: [],
            navLeftRight: [],
            pos: null,
            height: 0.667,
            redraw: false
        };
    }
    DiaryComponent.prototype.ngOnInit = function () {
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.appData.presentState.state = 'diary';
        if (!this.isMobile) {
            this.appData.sliderPosition.state = '-35vh';
            this.getItemsArr();
        }
        this.listenerService.changeAppListenerSubject(this.appData);
    };
    DiaryComponent.prototype.getItemsArr = function () {
        this.params.elementsArr.push(this.search.nativeElement);
        this.params.elementsArr.push(this.diary.nativeElement);
        this.params.elementsArr.push(this.calendar.nativeElement);
        this.params.navEl = this.navig.nativeElement;
        this.sliderService.sliderStart(this.params);
        this.sliderService.redrawSlider(true);
    };
    DiaryComponent.prototype.onResize = function (event) {
        if (!this.isMobile)
            this.sliderService.sliderStart(this.params);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('navig'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object)
    ], DiaryComponent.prototype, "navig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('search'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _b) || Object)
    ], DiaryComponent.prototype, "search", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('diary'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _c) || Object)
    ], DiaryComponent.prototype, "diary", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('calendar'), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _d) || Object)
    ], DiaryComponent.prototype, "calendar", void 0);
    DiaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'diary',
            template: __webpack_require__(563),
            styles: [__webpack_require__(543)]
        }), 
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__service_slider_service__["a" /* SliderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_slider_service__["a" /* SliderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_listener_service__["a" /* ListenerService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _g) || Object])
    ], DiaryComponent);
    return DiaryComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=C:/web/nut3/src/diary.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_change_info_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_data_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedDiaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SelectedDiaryComponent = (function () {
    function SelectedDiaryComponent(route, changeInfoService, location, isMobileService, userDataService, authService) {
        this.route = route;
        this.changeInfoService = changeInfoService;
        this.location = location;
        this.isMobileService = isMobileService;
        this.userDataService = userDataService;
        this.authService = authService;
        this.isMobile = false;
        this.heightInput = false;
        this.diaryInf = {
            img: './assets/resources/images/diary/add-photo.png',
            firstName: '',
            lastName: '',
            gender: 'male',
            height: '5ft 9in / 175cm',
            weight: '154 pd / 70 kg',
            date: {
                month: 3,
                day: 15,
                year: 1990
            },
            activity: 'normal',
            calories: 2700
        };
        this.elements = [
            {
                id: 0,
                active: true,
                confirmed: true
            },
            {
                id: 1,
                active: false,
                confirmed: true
            },
            {
                id: 2,
                active: false,
                confirmed: true
            },
            {
                id: 3,
                active: false,
                confirmed: true
            },
            {
                id: 4,
                active: false,
                confirmed: true
            },
            {
                id: 5,
                active: false,
                confirmed: true
            },
            {
                id: 6,
            }
        ];
        this.presentElement = this.elements[0];
    }
    SelectedDiaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.changeInfoService.resetDiary();
        this.paramsSub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.userListener = this.userDataService.authListener.subscribe(function (auth) {
            if (auth) {
                _this.diaryArr = _this.userDataService.getDiaries();
                if (_this.id === 'create') {
                    for (var i = 0; i < _this.elements.length; i++) {
                        _this.elements[i].confirmed = false;
                    }
                }
                else {
                    for (var i = 0; i < _this.diaryArr.length; i++) {
                        if (_this.diaryArr[i]._id == _this.id) {
                            _this.changeInfoService.setNewDiary(_this.diaryArr[i]);
                            _this.diaryInf.img = _this.diaryArr[i].img;
                            _this.diaryInf.firstName = _this.diaryArr[i].firstName;
                            _this.diaryInf.lastName = _this.diaryArr[i].lastName;
                            _this.diaryInf.gender = _this.diaryArr[i].gender;
                            _this.diaryInf.date = {
                                month: _this.diaryArr[i].month,
                                day: _this.diaryArr[i].day,
                                year: _this.diaryArr[i].year
                            };
                            _this.diaryInf.activity = _this.diaryArr[i].activity;
                            _this.diaryInf.calories = _this.diaryArr[i].calories;
                            _this.diaryInf.height = _this.changeInfoService.recountHeight(_this.diaryArr[i].height, 1);
                            _this.diaryInf.weight = _this.changeInfoService.recountWeight(_this.diaryArr[i].weight);
                            break;
                        }
                    }
                }
            }
        });
    };
    SelectedDiaryComponent.prototype.goToElement = function (element, prevEl) {
        if (element.confirmed || (prevEl && prevEl.active)) {
            element.active = true;
            if (prevEl)
                prevEl.confirmed = true;
            this.presentElement = element;
        }
    };
    SelectedDiaryComponent.prototype.loadPhoto = function ($event) {
        var _this = this;
        this.changeInfoService.loadPhoto($event.target.files[0], function (res) {
            _this.diaryInf.img = res;
        });
    };
    SelectedDiaryComponent.prototype.changeInputHeight = function (string) {
        var koefH = parseFloat(document.querySelector('input[name="koefH"]:checked').value);
        if (string) {
            this.diaryInf.height = this.changeInfoService.recountHeight(parseFloat(string), koefH);
            this.heightInput = false;
        }
    };
    SelectedDiaryComponent.prototype.saveDiary = function (save) {
        var _this = this;
        if (save) {
            var diary = this.changeInfoService.getNewDiary();
            var id = '/' + this.id;
            this.authService.post('/private/diaries' + id, diary).subscribe(function (response) {
                var res = JSON.parse(response._body);
                if (res.status) {
                    _this.userDataService.saveDiary(res.res);
                    _this.location.back();
                }
            }, function (error) { });
        }
        else {
            this.location.back();
        }
    };
    SelectedDiaryComponent.prototype.onResize = function (event) {
        if (this.isMobile) {
            if (this.isMobileService.getGlobalHeight() > window.innerHeight) {
                document.documentElement.style.top = '-50%';
                document.documentElement.style.position = 'absolute';
            }
            else {
                document.documentElement.style.position = 'initial';
            }
        }
    };
    SelectedDiaryComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
        this.userListener.unsubscribe();
    };
    SelectedDiaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'selected-diary',
            template: __webpack_require__(564),
            styles: [__webpack_require__(544)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_change_info_service__["a" /* ChangeInfoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_change_info_service__["a" /* ChangeInfoService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_user_data_service__["a" /* UserDataService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object])
    ], SelectedDiaryComponent);
    return SelectedDiaryComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/web/nut3/src/selected-diary.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodComponent = (function () {
    function FoodComponent(isMobileService, listenerService) {
        this.isMobileService = isMobileService;
        this.listenerService = listenerService;
        this.isMobile = false;
        this.halfWindow = 0.325 * window.innerWidth;
    }
    FoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.appData.presentState.state = 'food';
        this.listenerService.changeAppListenerSubject(this.appData);
        this.appListener = this.listenerService.appListener.subscribe(function (appListener) {
            _this.appData = appListener;
        });
    };
    FoodComponent.prototype.ngOnDestroy = function () {
        this.appListener.unsubscribe();
    };
    FoodComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'food',
            template: __webpack_require__(565),
            styles: [__webpack_require__(545)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_listener_service__["a" /* ListenerService */]) === 'function' && _b) || Object])
    ], FoodComponent);
    return FoodComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/web/nut3/src/food.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = (function () {
    function HistoryComponent(listenerService, isMobileService) {
        this.listenerService = listenerService;
        this.isMobileService = isMobileService;
        this.isMobile = false;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.appData.presentState.state = 'history';
        this.listenerService.changeAppListenerSubject(this.appData);
    };
    HistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'history',
            template: __webpack_require__(568),
            styles: [__webpack_require__(548)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_listener_service__["a" /* ListenerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _b) || Object])
    ], HistoryComponent);
    return HistoryComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/web/nut3/src/history.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_slider_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_data_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(sliderService, listenerService, router, isMobileService, authService, userDataService) {
        this.sliderService = sliderService;
        this.listenerService = listenerService;
        this.router = router;
        this.isMobileService = isMobileService;
        this.authService = authService;
        this.userDataService = userDataService;
        this.sliderDown = true;
        this.isMobile = false;
        this.params = {
            navEl: {},
            elementsArr: [],
            navLeftRight: [],
            height: 1,
            pos: null,
            redraw: false,
            itemsOnLine: 6
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.appData.presentState.state = 'home';
        this.isMobile ? this.appData.sliderPosition.state = '30%' : this.appData.sliderPosition.state = '10%';
        this.listenerService.changeAppListenerSubject(this.appData);
        this.getItemsArr();
        this.moveFinishListener = this.sliderService.changedMoveFinish.subscribe(function (item) {
            _this.selectedElement = item;
            if (_this.selectedElement == _this.slideComp1.nativeElement || _this.selectedElement == _this.slideComp3.nativeElement) {
                _this.searchCtrlDeactive();
            }
            else if (_this.selectedElement == _this.search.nativeElement) {
                _this.searchCtrlActive();
            }
        });
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        this.selectedElement = this.search.nativeElement;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.moveFinishListener.unsubscribe();
    };
    HomeComponent.prototype.getItemsArr = function () {
        this.params.elementsArr = [];
        this.params.elementsArr.push(this.slideComp1.nativeElement);
        this.params.elementsArr.push(this.search.nativeElement);
        this.params.elementsArr.push(this.slideComp3.nativeElement);
        this.params.navEl = this.navig.nativeElement;
        this.params.itemsOnLine = this.isMobile ? 4 : 6;
        this.sliderService.sliderStart(this.params);
        this.sliderService.redrawSlider(true);
    };
    HomeComponent.prototype.onResize = function (event) {
        this.params.redraw = false;
        this.selectedElement = this.search.nativeElement;
        this.searchCtrlActive();
        this.sliderService.sliderStart(this.params);
    };
    HomeComponent.prototype.moveItems = function (item) {
        if (this.selectedElement !== item) {
            this.selectedElement = null;
            this.sliderService.slideElements(item);
        }
    };
    HomeComponent.prototype.searchCtrlDeactive = function () {
        this.sliderDown = false;
        this.params.height = 1;
        this.params.redraw = true;
        this.sliderService.sliderStart(this.params);
        this.isMobile ? this.appData.sliderPosition.state = '0' : this.appData.sliderPosition.state = '3%';
        this.listenerService.changeAppListenerSubject(this.appData);
    };
    HomeComponent.prototype.searchCtrlActive = function () {
        this.sliderDown = true;
        this.params.height = 0.667;
        this.params.redraw = false;
        this.sliderService.sliderStart(this.params);
        this.isMobile ? this.appData.sliderPosition.state = '30%' : this.appData.sliderPosition.state = '10%';
        this.listenerService.changeAppListenerSubject(this.appData);
    };
    HomeComponent.prototype.moveSearchView = function () {
        this.listenerService.changeAppListenerSubject(this.appData);
        this.router.navigate(['/search/search-results', this.appData.searchValue.state]);
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.authService.post('/auth/logout', {}).subscribe(function (response) {
            var res = JSON.parse(response._body);
            console.log(res);
            if (res.status) {
                _this.userDataService.changeAuthSubject(false);
            }
        }, function (error) { });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('navig'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object)
    ], HomeComponent.prototype, "navig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('slideComp1'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _b) || Object)
    ], HomeComponent.prototype, "slideComp1", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('search'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _c) || Object)
    ], HomeComponent.prototype, "search", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('slideComp3'), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _d) || Object)
    ], HomeComponent.prototype, "slideComp3", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'home',
            template: __webpack_require__(569),
            styles: [__webpack_require__(549)]
        }), 
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_slider_service__["a" /* SliderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_slider_service__["a" /* SliderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_user_data_service__["a" /* UserDataService */]) === 'function' && _k) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
//# sourceMappingURL=C:/web/nut3/src/home.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_slider_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_storage_service__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginComponent = (function () {
    function LoginComponent(sliderService, router, location, listenerService, isMobileService, authService, userDataService, storageService) {
        this.sliderService = sliderService;
        this.router = router;
        this.location = location;
        this.listenerService = listenerService;
        this.isMobileService = isMobileService;
        this.authService = authService;
        this.userDataService = userDataService;
        this.storageService = storageService;
        this.isMobile = false;
        this.params = {
            navEl: {},
            elementsArr: [],
            navLeftRight: [],
            pos: null,
            height: 1,
            redraw: false
        };
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            "email": new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            "password": new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.appData.sliderPosition.state = this.isMobile ? '-5%' : '0%';
        this.appData.presentState.state = 'login';
        this.listenerService.changeAppListenerSubject(this.appData);
        this.getItemsArr();
    };
    LoginComponent.prototype.getItemsArr = function () {
        this.params.elementsArr = [];
        this.params.elementsArr.push(this.infos.nativeElement);
        this.params.navEl = this.navig.nativeElement;
        this.sliderService.sliderStart(this.params);
        this.sliderService.redrawSlider(true);
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.authService.post('/auth/login', this.loginForm.value).subscribe(function (response) {
            var res = JSON.parse(response._body);
            if (res.status) {
                _this.storageService.set('token', res.res.token);
                _this.authService.get('/private/users').subscribe(function (response) {
                    var res = JSON.parse(response._body);
                    if (res.status) {
                        _this.userDataService.setUser(res.res);
                        _this.router.navigate(['/profile']);
                    }
                }, function (error) { });
            }
        }, function (error) { });
    };
    LoginComponent.prototype.moveBack = function () {
        this.location.back();
    };
    LoginComponent.prototype.onResize = function (event) {
        this.sliderService.sliderStart(this.params);
        if (this.isMobile) {
            if (this.isMobileService.getGlobalHeight() > window.innerHeight) {
                document.documentElement.style.top = '-30%';
                document.documentElement.style.position = 'absolute';
            }
            else {
                document.documentElement.style.position = 'initial';
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('navig'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object)
    ], LoginComponent.prototype, "navig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('infos'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _b) || Object)
    ], LoginComponent.prototype, "infos", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'login',
            template: __webpack_require__(570),
            styles: [__webpack_require__(550)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_slider_service__["a" /* SliderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_slider_service__["a" /* SliderService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_listener_service__["a" /* ListenerService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__service_auth_service__["a" /* AuthService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__["a" /* UserDataService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__service_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__service_storage_service__["a" /* StorageService */]) === 'function' && _k) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
//# sourceMappingURL=C:/web/nut3/src/login.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_listener_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutritionalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NutritionalComponent = (function () {
    function NutritionalComponent(isMobileService, listenerService, router) {
        this.isMobileService = isMobileService;
        this.listenerService = listenerService;
        this.router = router;
        this.isMobile = false;
    }
    NutritionalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.appListener = this.listenerService.appListener.subscribe(function (appListener) {
            _this.appData = appListener;
        });
    };
    NutritionalComponent.prototype.toggleState = function () {
        if (this.isMobile) {
            this.appData.presentState.state = 'nutritional';
            this.listenerService.changeAppListenerSubject(this.appData);
            this.router.navigate(['/nutritional']);
            return;
        }
        else {
            this.appData.nutritionalStateOpen.state = !this.appData.nutritionalStateOpen.state;
            this.listenerService.changeAppListenerSubject(this.appData);
        }
    };
    NutritionalComponent.prototype.ngOnDestroy = function () {
        this.appListener.unsubscribe();
    };
    NutritionalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'nutritional',
            template: __webpack_require__(571),
            styles: [__webpack_require__(551)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], NutritionalComponent);
    return NutritionalComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/web/nut3/src/nutritional.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_search_data_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_helper__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ResultDetailsComponent = (function () {
    function ResultDetailsComponent(route, router, location, listenerService, isMobileService, authService, searchDataService, userDataService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.listenerService = listenerService;
        this.isMobileService = isMobileService;
        this.authService = authService;
        this.searchDataService = searchDataService;
        this.userDataService = userDataService;
        this.helper = new __WEBPACK_IMPORTED_MODULE_7__class_helper__["a" /* Helper */]();
        this.isMobile = false;
        this.auth = false;
        this.nullRecipe = {
            title: '',
            ingridients: [],
            images: []
        };
        this.diaryActive = false;
        this.recipeEdited = false;
        this.alertUniqTitle = false;
        this.alertSaveRecipe = false;
        this.addIngridient = false;
    }
    ResultDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.recipe = this.searchDataService.setSelectedRecipe(this.nullRecipe);
        this.newRecipe = Object.assign({}, this.recipe);
        this.appData.saveFoodToDiary.state = '';
        if (this.isMobile)
            this.appData.searchInputVisible.state = false;
        this.listenerService.changeAppListenerSubject(this.appData);
        this.paramsSub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id) {
                _this.authService.get('/public/recipes/' + _this.id).subscribe(function (response) {
                    var res = JSON.parse(response._body);
                    if (res.status) {
                        _this.recipe = _this.searchDataService.setSelectedRecipe(res.res);
                    }
                    else {
                        _this.recipe = _this.searchDataService.setSelectedRecipe(_this.nullRecipe);
                    }
                    _this.newRecipe = Object.assign({}, _this.recipe);
                }, function (error) { });
            }
        });
        this.appListener = this.listenerService.appListener.subscribe(function (appListener) {
            _this.appData = appListener;
            if (appListener.saveFoodToDiary.state) {
                _this.diaryActive = false;
            }
        });
        this.userListener = this.userDataService.authListener.subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    ResultDetailsComponent.prototype.checkRecipeEdited = function () {
        if (!this.newRecipe._id) {
            this.recipeEdited = true;
            return;
        }
        this.recipeEdited = this.helper.equals(this.newRecipe, this.recipe) ? false : true;
    };
    ResultDetailsComponent.prototype.moveBack = function () {
        this.location.back();
    };
    ResultDetailsComponent.prototype.toggleDiaryActivity = function () {
        this.alertUniqTitle = false;
        if (this.recipeEdited) {
            this.alertSaveRecipe = true;
        }
        else {
            this.diaryActive = !this.diaryActive;
        }
        this.appData.saveFoodToDiary.state = '';
    };
    ResultDetailsComponent.prototype.resetRecipe = function () {
        this.recipeEdited = false;
        this.newRecipe = Object.assign({}, this.recipe);
    };
    ResultDetailsComponent.prototype.saveNewRecipe = function () {
        var _this = this;
        this.alertSaveRecipe = false;
        this.authService.post('/public/recipes/save', this.newRecipe).subscribe(function (response) {
            var res = JSON.parse(response._body);
            if (res.status) {
                _this.recipe = _this.searchDataService.setSelectedRecipe(res.res);
                _this.newRecipe = Object.assign({}, _this.recipe);
                _this.recipeEdited = false;
                _this.alertUniqTitle = false;
            }
            else {
                _this.alertUniqTitle = true;
            }
        }, function (error) { });
    };
    ResultDetailsComponent.prototype.spin = function (event, num) {
        //noinspection TypeScriptUnresolvedVariable
        event.target.parentElement.children[1].value = +event.target.parentElement.children[1].value + num;
    };
    ResultDetailsComponent.prototype.movetoLogin = function () {
        this.router.navigate(['/login']);
    };
    ResultDetailsComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
        this.appListener.unsubscribe();
        this.userListener.unsubscribe();
    };
    ResultDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'result-details',
            template: __webpack_require__(573),
            styles: [__webpack_require__(553)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__service_search_data_service__["a" /* SearchDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_search_data_service__["a" /* SearchDataService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__["a" /* UserDataService */]) === 'function' && _h) || Object])
    ], ResultDetailsComponent);
    return ResultDetailsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=C:/web/nut3/src/result-details.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_search_data_service__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchResultsComponent = (function () {
    function SearchResultsComponent(route, listenerService, router, isMobileService, authService, searchDataService) {
        this.route = route;
        this.listenerService = listenerService;
        this.router = router;
        this.isMobileService = isMobileService;
        this.authService = authService;
        this.searchDataService = searchDataService;
        this.isMobile = false;
        this.searchData = [];
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.paramsSub = this.route.params.subscribe(function (params) {
            _this.appData.searchValue.state = _this.id = params['id'];
            if (_this.appData.searchValue.state) {
                _this.authService.get('/public/recipes/title/' + _this.appData.searchValue.state).subscribe(function (response) {
                    var res = JSON.parse(response._body);
                    if (res.status) {
                        _this.searchDataService.setSearchRes(res.res);
                    }
                    else {
                        _this.searchDataService.setSearchRes([]);
                    }
                    _this.searchData = _this.searchDataService.getSearchRes();
                }, function (error) { });
            }
            else {
                _this.searchData = _this.searchDataService.setSearchRes([]);
            }
        });
        if (this.isMobile) {
            this.appData.searchInputVisible.state = true;
            this.listenerService.changeAppListenerSubject(this.appData);
        }
    };
    SearchResultsComponent.prototype.moveSearchView = function () {
        this.appData.searchValue.state = '';
        this.listenerService.changeAppListenerSubject(this.appData);
        this.router.navigate(['/search/create']);
    };
    SearchResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'search-results',
            template: __webpack_require__(574),
            styles: [__webpack_require__(554)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_listener_service__["a" /* ListenerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__service_search_data_service__["a" /* SearchDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_search_data_service__["a" /* SearchDataService */]) === 'function' && _f) || Object])
    ], SearchResultsComponent);
    return SearchResultsComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/web/nut3/src/search-results.component.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_slider_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(sliderService, listenerService, isMobileService, router) {
        this.sliderService = sliderService;
        this.listenerService = listenerService;
        this.isMobileService = isMobileService;
        this.router = router;
        this.isMobile = false;
        this.params = {
            navEl: {},
            elementsArr: [],
            navLeftRight: [],
            pos: null,
            height: 0.667,
            redraw: false
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.appData.presentState.state = 'search';
        if (!this.isMobile) {
            this.appData.sliderPosition.state = '-35vh';
            this.getItemsArr();
        }
        this.listenerService.changeAppListenerSubject(this.appData);
        this.appListener = this.listenerService.appListener.subscribe(function (appListener) {
            _this.appData = appListener;
        });
    };
    SearchComponent.prototype.getItemsArr = function () {
        this.params.elementsArr.push(this.home.nativeElement);
        this.params.elementsArr.push(this.search.nativeElement);
        this.params.elementsArr.push(this.calendar.nativeElement);
        this.params.navEl = this.navig.nativeElement;
        this.sliderService.sliderStart(this.params);
        this.sliderService.redrawSlider(true);
    };
    SearchComponent.prototype.changeSearch = function () {
        this.listenerService.changeAppListenerSubject(this.appData);
        this.router.navigate(['/search/search-results', this.appData.searchValue.state]);
    };
    SearchComponent.prototype.clearInput = function () {
        this.appData.searchValue.state = '';
        this.listenerService.changeAppListenerSubject(this.appData);
    };
    SearchComponent.prototype.onResize = function (event) {
        if (!this.isMobile)
            this.sliderService.sliderStart(this.params);
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.appListener.unsubscribe();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('navig'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object)
    ], SearchComponent.prototype, "navig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('home'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _b) || Object)
    ], SearchComponent.prototype, "home", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('search'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _c) || Object)
    ], SearchComponent.prototype, "search", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('calendar'), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _d) || Object)
    ], SearchComponent.prototype, "calendar", void 0);
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'search',
            template: __webpack_require__(575),
            styles: [__webpack_require__(555)]
        }), 
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_slider_service__["a" /* SliderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_slider_service__["a" /* SliderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_listener_service__["a" /* ListenerService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _h) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=C:/web/nut3/src/search.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_storage_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_data_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_change_info_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_slider_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupComponent = (function () {
    function SignupComponent(sliderService, changeInfoService, location, router, listenerService, isMobileService, authService, userDataService, storageService) {
        this.sliderService = sliderService;
        this.changeInfoService = changeInfoService;
        this.location = location;
        this.router = router;
        this.listenerService = listenerService;
        this.isMobileService = isMobileService;
        this.authService = authService;
        this.userDataService = userDataService;
        this.storageService = storageService;
        this.isMobile = false;
        this.newAccount = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.diaryInf = {
            img: './assets/resources/images/diary/add-photo.png',
            firstName: '',
            lastName: '',
            gender: 'male',
            height: '5ft 9in / 175cm',
            weight: '154 pd / 70 kg',
            date: {
                month: 3,
                day: 15,
                year: 1990
            },
            activity: 'normal',
            calories: 2700
        };
        this.heightInput = false;
        this.params = {
            navEl: {},
            elementsArr: [],
            navLeftRight: [],
            pos: null,
            height: 1,
            redraw: false,
            itemsOnLine: 6
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.appData.sliderPosition.state = this.isMobile ? '-5%' : '0%';
        this.appData.presentState.state = 'signup';
        this.listenerService.changeAppListenerSubject(this.appData);
        this.changeInfoService.resetDiary();
        this.getItemsArr();
        this.moveFinishListener = this.sliderService.changedMoveFinish.subscribe(function (item) {
            if (item && item.parentElement.getAttribute("data-num")) {
                _this.selectedElement = item.parentElement;
            }
            else {
                _this.selectedElement = _this.infos.nativeElement;
                _this.infos.nativeElement.activated = true;
            }
        });
    };
    SignupComponent.prototype.getItemsArr = function () {
        this.params.elementsArr = [];
        this.params.elementsArr.push(this.infos.nativeElement);
        this.params.elementsArr.push(this.photo.nativeElement);
        this.params.elementsArr.push(this.gender.nativeElement);
        this.params.elementsArr.push(this.height.nativeElement);
        this.params.elementsArr.push(this.weight.nativeElement);
        this.params.elementsArr.push(this.age.nativeElement);
        this.params.elementsArr.push(this.activity.nativeElement);
        this.params.elementsArr.push(this.calories.nativeElement);
        this.params.pos = this.isMobile ? 1 : 3;
        this.params.itemsOnLine = this.isMobile ? 2 : 6;
        this.params.navLeftRight = this.isMobile ? [] : [0.02];
        this.params.navEl = this.navig.nativeElement;
        this.sliderService.sliderStart(this.params);
        this.sliderService.redrawSlider(true);
    };
    SignupComponent.prototype.goToElement = function (element, prevEl) {
        if (element == this.selectedElement)
            return;
        if (element.confirmed || (prevEl && prevEl.activated)) {
            if (prevEl)
                prevEl.confirmed = true;
            element.activated = true;
            this.selectedElement = null;
            this.sliderService.slideElements(element.children[0]);
        }
    };
    SignupComponent.prototype.loadPhoto = function ($event) {
        var _this = this;
        this.changeInfoService.loadPhoto($event.target.files[0], function (res) {
            _this.diaryInf.img = res;
        });
    };
    SignupComponent.prototype.finishReg = function () {
        var _this = this;
        this.authService.post('/auth/signup', this.signupForm['value']).subscribe(function (response) {
            var res = JSON.parse(response._body);
            if (res.status) {
                _this.storageService.set('token', res.res.token);
                var newDiary = _this.changeInfoService.getNewDiary();
                _this.authService.post('/private/diaries/create', newDiary).subscribe(function (response) {
                    var res = JSON.parse(response._body);
                    if (res.status) {
                        _this.authService.get('/private/users').subscribe(function (response) {
                            var res = JSON.parse(response._body);
                            if (res.status) {
                                _this.userDataService.setUser(res.res);
                                _this.router.navigate(['/profile']);
                            }
                        }, function (error) { });
                    }
                }, function (error) { });
            }
        }, function (error) { });
    };
    SignupComponent.prototype.changeInputHeight = function (string) {
        var koefH = parseFloat(document.querySelector('input[name="koefH"]:checked').value);
        if (string) {
            this.diaryInf.height = this.changeInfoService.recountHeight(parseFloat(string), koefH);
            this.heightInput = false;
        }
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.moveFinishListener.unsubscribe();
    };
    SignupComponent.prototype.onResize = function (event) {
        this.params.redraw = true;
        this.sliderService.sliderStart(this.params);
        if (this.isMobile) {
            if (this.isMobileService.getGlobalHeight() > window.innerHeight) {
                document.documentElement.style.top = '-30%';
                document.documentElement.style.position = 'absolute';
            }
            else {
                document.documentElement.style.position = 'initial';
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('navig'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object)
    ], SignupComponent.prototype, "navig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('infos'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _b) || Object)
    ], SignupComponent.prototype, "infos", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('photo'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _c) || Object)
    ], SignupComponent.prototype, "photo", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('gender'), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _d) || Object)
    ], SignupComponent.prototype, "gender", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('height'), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _e) || Object)
    ], SignupComponent.prototype, "height", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('weight'), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _f) || Object)
    ], SignupComponent.prototype, "weight", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('age'), 
        __metadata('design:type', (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _g) || Object)
    ], SignupComponent.prototype, "age", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('activity'), 
        __metadata('design:type', (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _h) || Object)
    ], SignupComponent.prototype, "activity", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('calories'), 
        __metadata('design:type', (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _j) || Object)
    ], SignupComponent.prototype, "calories", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('signupForm'), 
        __metadata('design:type', (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _k) || Object)
    ], SignupComponent.prototype, "signupForm", void 0);
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'Signup',
            template: __webpack_require__(577),
            styles: [__webpack_require__(557)]
        }), 
        __metadata('design:paramtypes', [(typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__service_slider_service__["a" /* SliderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__service_slider_service__["a" /* SliderService */]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__service_change_info_service__["a" /* ChangeInfoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__service_change_info_service__["a" /* ChangeInfoService */]) === 'function' && _m) || Object, (typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */]) === 'function' && _o) || Object, (typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _p) || Object, (typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_7__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__service_listener_service__["a" /* ListenerService */]) === 'function' && _q) || Object, (typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_6__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _r) || Object, (typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */]) === 'function' && _s) || Object, (typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_user_data_service__["a" /* UserDataService */]) === 'function' && _t) || Object, (typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_3__service_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_storage_service__["a" /* StorageService */]) === 'function' && _u) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
}());
//# sourceMappingURL=C:/web/nut3/src/signup.component.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = (function () {
    function AppService() {
        this.animations = new Instruction();
    }
    AppService.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.animations.run();
            _this.animate();
            TWEEN.update();
        });
    };
    AppService.prototype.add = function (func) {
        this.animations.add(func);
    };
    AppService.prototype.drop = function (func) {
        this.animations.drop(func);
    };
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
//# sourceMappingURL=C:/web/nut3/src/app.service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 357;


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(485);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/web/nut3/src/main.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderService = (function () {
    function SliderService() {
        this.points = {
            bezierArr: [0.0, 30.243981,
                178.02607, 80.805361,
                241.6437, 6.6136306,
                350.37446, 0.85366056,
                459.10522, -4.9063094,
                536.89577, 59.369441,
                664.30674, 31.376691],
            presentbezierArr: [],
            xfactor: 1,
            yfactor: 1,
            ypos: 0,
            multiPoints: []
        };
        this.redrawingSlider = false;
        this.isMobile = false;
        this.params = {
            navEl: {},
            elementsArr: [],
            height: 1,
            pos: null,
            redraw: false,
            navLeftRight: [],
            fullWidth: window.innerWidth,
            sliderLeftRightPadding: Math.round(0.04 * window.innerWidth),
            itemsOnLine: 5
        };
        this.moveFinish = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.changedMoveFinish = this.moveFinish.asObservable();
    }
    SliderService.prototype.changeMoveFinish = function (value) {
        this.moveFinish.next(value);
    };
    SliderService.prototype.setIsMobile = function (mob) {
        this.isMobile = mob;
    };
    SliderService.prototype.setSliderElement = function (element) {
        this.sliderElement = element;
    };
    SliderService.prototype.sliderStart = function (params) {
        this.params = {
            navEl: params.navEl,
            elementsArr: params.elementsArr ? params.elementsArr : [],
            height: params.height ? params.height : 1,
            pos: params.pos ? params.pos : null,
            redraw: params.redraw ? params.redraw : false,
            navLeftRight: params.navLeftRight ? params.navLeftRight : [-100, 100],
            fullWidth: window.innerWidth,
            sliderLeftRightPadding: Math.round(0.04 * window.innerWidth),
            itemsOnLine: params.itemsOnLine ? params.itemsOnLine : 6
        };
        this.sliderElement.width = this.sliderElement.offsetWidth;
        this.sliderElement.height = this.sliderElement.offsetWidth / (1860 / 130);
        this.sliderElement.style.height = this.sliderElement.offsetWidth / (1860 / 130) + 'px';
        this.points.presentbezierArr = [];
        this.points.multiPoints = [];
        this.points.xfactor = this.sliderElement.width / 664;
        this.points.yfactor = (this.sliderElement.height / 49) * this.params.height;
        for (var i = 0; i < this.points.bezierArr.length; i += 2) {
            this.points.presentbezierArr.push(this.points.bezierArr[i] * this.points.xfactor);
            this.points.presentbezierArr.push(this.points.bezierArr[i + 1] * this.points.yfactor + this.points.ypos);
        }
        var ctx = this.sliderElement.getContext("2d");
        ctx.clearRect(0, 0, this.sliderElement.width, this.sliderElement.height);
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath();
        ctx.moveTo(this.points.presentbezierArr[0], this.points.presentbezierArr[1]);
        for (var i = 2; i < this.points.presentbezierArr.length; i += 6) {
            ctx.bezierCurveTo(this.points.presentbezierArr[i], this.points.presentbezierArr[i + 1], this.points.presentbezierArr[i + 2], this.points.presentbezierArr[i + 3], this.points.presentbezierArr[i + 4], this.points.presentbezierArr[i + 5]);
        }
        ctx.stroke();
        var imgData = ctx.getImageData(0, 0, this.sliderElement.width, this.sliderElement.height);
        for (var y = 0; y < this.sliderElement.width; y++) {
            var next = false;
            for (var x = 0; x < this.sliderElement.height; x++) {
                var index = (y + (x * imgData.width)) * 4;
                if (imgData.data[index + 3] > 0 && !next) {
                    var pixel = {
                        x: y,
                        y: x
                    };
                    this.points.multiPoints.push(pixel);
                    next = true;
                }
            }
        }
        this.setElementsOnLine();
    };
    SliderService.prototype.setElementsOnLine = function () {
        var cvswidth = this.params.fullWidth / this.params.itemsOnLine;
        var startKoef = 0;
        switch (this.params.elementsArr.length) {
            case 0: break;
            case 1:
            case 2:
                startKoef = this.params.itemsOnLine / 2;
                break;
            case 3:
            case 4:
                startKoef = (this.params.itemsOnLine / 2 - 1) < 0 ? 0 : (this.params.itemsOnLine / 2 - 1);
                break;
            case 5:
            case 6:
                startKoef = (this.params.itemsOnLine / 2 - 2) < 0 ? 0 : (this.params.itemsOnLine / 2 - 2);
                break;
            default:
                startKoef = 0;
                break;
        }
        if (this.params.pos) {
            startKoef = this.params.pos;
        }
        else {
            startKoef = Math.ceil(startKoef);
        }
        if (!this.params.redraw) {
            this.params.navEl.style.height = this.sliderElement.offsetHeight + 'px';
            this.params.navEl.style.left = cvswidth * startKoef + 'px';
        }
        for (var i = 0; i < this.params.elementsArr.length; i++) {
            var itemPos = void 0;
            if (!this.params.redraw) {
                this.params.elementsArr[i].style.left = cvswidth * i + 'px';
                itemPos = Math.round(cvswidth * (i + startKoef) - this.params.sliderLeftRightPadding);
            }
            else {
                var itemLeft = this.params.elementsArr[i].getBoundingClientRect().left;
                var itemRight = this.params.elementsArr[i].getBoundingClientRect().right;
                var itemHalfWidth = (itemRight - itemLeft) / 2;
                itemPos = Math.round(itemLeft + itemHalfWidth) - this.params.sliderLeftRightPadding;
            }
            if (this.points.multiPoints[itemPos]) {
                this.params.elementsArr[i].style.top = this.points.multiPoints[itemPos].y + 'px';
            }
            else {
                if (itemPos < 0) {
                    this.params.elementsArr[i].style.top = this.points.multiPoints[0].y + 'px';
                }
                else {
                    this.params.elementsArr[i].style.top = this.points.multiPoints[this.points.multiPoints.length - 1].y + 'px';
                }
            }
        }
        this.clearLineParts();
    };
    SliderService.prototype.slideElements = function (element) {
        var self = this;
        var elLeft = element.getBoundingClientRect().left;
        var elRight = element.getBoundingClientRect().right;
        var navLeft = parseInt(this.params.navEl.style.left);
        var distance = Math.round((elLeft + 0.5 * (elRight - elLeft)) - this.params.fullWidth / 2);
        var destination = navLeft - distance;
        var time = 500 * Math.round(Math.abs(distance) / (this.params.fullWidth / this.params.itemsOnLine));
        var tweenObj = { x: navLeft || 0 };
        var tween = new TWEEN.Tween(tweenObj).to({ x: destination }, time).onUpdate(function () {
            self.params.navEl.style.left = this.x + 'px';
            for (var i = 0; i < self.params.elementsArr.length; i++) {
                var itemLeft = self.params.elementsArr[i].getBoundingClientRect().left;
                var itemRight = self.params.elementsArr[i].getBoundingClientRect().right;
                var itemHalfWidth = (itemRight - itemLeft) / 2;
                var itemPos = Math.round(itemLeft + itemHalfWidth) - self.params.sliderLeftRightPadding;
                if (self.points.multiPoints[itemPos]) {
                    if (itemLeft < self.params.navLeftRight[0] * self.params.fullWidth || itemRight > self.params.navLeftRight[1] * self.params.fullWidth) {
                        self.params.elementsArr[i].style.top = '-10000px';
                    }
                    else {
                        self.params.elementsArr[i].style.top = self.points.multiPoints[itemPos].y + 'px';
                    }
                }
            }
        }).onComplete(function () {
            self.changeMoveFinish(element);
        }).start();
    };
    SliderService.prototype.redrawSlider = function (redrawing) {
        this.redrawingSlider = redrawing;
    };
    SliderService.prototype.clearLineParts = function () {
        if (this.points.presentbezierArr && this.redrawingSlider) {
            var ctx = this.sliderElement.getContext("2d");
            ctx.clearRect(0, 0, this.sliderElement.width, this.sliderElement.height);
            ctx.strokeStyle = "rgba(255,255,255,0.5)";
            ctx.beginPath();
            ctx.moveTo(this.points.presentbezierArr[0], this.points.presentbezierArr[1]);
            for (var i = 2; i < this.points.presentbezierArr.length; i += 6) {
                ctx.bezierCurveTo(this.points.presentbezierArr[i], this.points.presentbezierArr[i + 1], this.points.presentbezierArr[i + 2], this.points.presentbezierArr[i + 3], this.points.presentbezierArr[i + 4], this.points.presentbezierArr[i + 5]);
            }
            ctx.stroke();
            for (var i_1 = 0; i_1 < this.params.elementsArr.length; i_1++) {
                var left = this.params.elementsArr[i_1].getBoundingClientRect().left;
                var right = this.params.elementsArr[i_1].getBoundingClientRect().right;
                if ((left < this.points.multiPoints[this.points.multiPoints.length - 1].x + this.params.sliderLeftRightPadding) || (right > this.params.sliderLeftRightPadding)) {
                    ctx.clearRect(left - this.params.sliderLeftRightPadding, 0, (right - left), this.sliderElement.height);
                }
            }
            if (this.params.navLeftRight[0] > -1) {
                ctx.clearRect(0, 0, this.params.navLeftRight[0] / 2 * this.params.fullWidth, this.sliderElement.height);
            }
            if (this.params.navLeftRight[1] < 1) {
                ctx.clearRect((this.params.navLeftRight[1] + 0.01) * this.sliderElement.width, 0, this.params.navLeftRight[1] * this.params.fullWidth, this.sliderElement.height);
            }
        }
    };
    SliderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SliderService);
    return SliderService;
}());
//# sourceMappingURL=C:/web/nut3/src/slider.service.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_app_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_slider_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_data_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_side_menu_service__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(sideMenuService, appService, sliderService, isMobileService, listenerService, authService, userDataService) {
        this.sideMenuService = sideMenuService;
        this.appService = appService;
        this.sliderService = sliderService;
        this.isMobileService = isMobileService;
        this.listenerService = listenerService;
        this.authService = authService;
        this.userDataService = userDataService;
        this.isMobile = false;
        this.footHeadVis = true;
        this.sliderVis = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sliderService.setSliderElement(this.slider.nativeElement);
        this.authService.get('/private/users').subscribe(function (response) {
            var res = JSON.parse(response._body);
            if (res.status)
                _this.userDataService.setUser(res.res);
        }, function (error) { });
        this.appService.animate();
        this.isMobile = this.isMobileService.findIsMobile();
        this.sliderService.setIsMobile(this.isMobile);
        this.appData = this.listenerService.getAppListenerObject();
        this.appListener = this.listenerService.appListener.subscribe(function (appListener) {
            _this.appData = appListener;
            _this.footHeadVis = (!_this.isMobile || (_this.isMobile && (_this.appData.presentState.state === 'home'
                || _this.appData.presentState.state === 'calendar'
                || _this.appData.presentState.state === 'signup'
                || _this.appData.presentState.state === 'login'
                || _this.appData.presentState.state === 'date'))) ? true : false;
            _this.sliderVis = ((!_this.isMobile && (_this.appData.presentState.state !== 'calendar'))
                || (_this.isMobile && (_this.appData.presentState.state == 'home'
                    || _this.appData.presentState.state == 'login'
                    || _this.appData.presentState.state == 'signup'
                    || _this.appData.presentState.state == 'date'))) ? true : false;
        });
        this.sideMenuLis = this.sideMenuService.openLis.subscribe(function (openMenu) {
            _this.openMenu = openMenu;
        });
        this.isMobileService.setGlobalHeight();
        this.sliderService.redrawSlider(false);
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        this.sliderRedrawStart();
    };
    AppComponent.prototype.sliderRedrawStart = function () {
        var self = this;
        var redraw = function () {
            self.sliderService.clearLineParts();
        };
        this.appService.add(redraw);
    };
    AppComponent.prototype.sideMenuOpen = function () {
        this.sideMenuService.changeOpenListenerSub('in');
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.appListener.unsubscribe();
        this.sideMenuLis.unsubscribe();
    };
    AppComponent.prototype.onResize = function (event) {
        if (this.isMobile) {
            if (!this.isMobileService.getGlobalHeight()) {
                this.isMobileService.setGlobalHeight();
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('slider'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "slider", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(559),
            styles: [__webpack_require__(539)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('slideInOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({
                        transform: 'translate3d(-100%, 0, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('400ms ease-in-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('400ms ease-in-out'))
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__service_side_menu_service__["a" /* SideMenuService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__service_side_menu_service__["a" /* SideMenuService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_app_service__["a" /* AppService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__service_slider_service__["a" /* SliderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_slider_service__["a" /* SliderService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_listener_service__["a" /* ListenerService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_auth_service__["a" /* AuthService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_user_data_service__["a" /* UserDataService */]) === 'function' && _h) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=C:/web/nut3/src/app.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_calendar_page_calendar_page_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_date_date_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_diary_diaries_select_diaries_select_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_diary_diary_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_food_food_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_history_history_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_nutritional_nutritional_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_search_result_details_result_details_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_search_diary_search_diary_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_search_search_results_search_results_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_diary_selected_diary_selected_diary_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_side_menu_side_menu_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_signup_signup_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__router__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_logged_guard_service__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_slider_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_change_info_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_green_scale_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_app_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__service_storage_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__service_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__service_user_data_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__service_search_data_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_side_menu_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__directive_focus_directive__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__directive_slimscroll_directive__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__directive_equal_validator_directive__ = __webpack_require__(481);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_calendar_page_calendar_page_component__["a" /* CalendarPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_date_date_component__["a" /* DateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_diary_diaries_select_diaries_select_component__["a" /* DiariesSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_diary_diary_component__["a" /* DiaryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_food_food_component__["a" /* FoodComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_nutritional_nutritional_component__["a" /* NutritionalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_search_result_details_result_details_component__["a" /* ResultDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_search_diary_search_diary_component__["a" /* SearchDiaryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_search_search_results_search_results_component__["a" /* SearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_diary_selected_diary_selected_diary_component__["a" /* SelectedDiaryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_side_menu_side_menu_component__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_36__directive_focus_directive__["a" /* FocusDirective */],
                __WEBPACK_IMPORTED_MODULE_37__directive_slimscroll_directive__["a" /* SlimScroll */],
                __WEBPACK_IMPORTED_MODULE_38__directive_equal_validator_directive__["a" /* EqualValidator */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23__router__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__service_slider_service__["a" /* SliderService */],
                __WEBPACK_IMPORTED_MODULE_26__service_listener_service__["a" /* ListenerService */],
                __WEBPACK_IMPORTED_MODULE_27__service_change_info_service__["a" /* ChangeInfoService */],
                __WEBPACK_IMPORTED_MODULE_28__service_is_mobile_service__["a" /* IsMobileService */],
                __WEBPACK_IMPORTED_MODULE_29__service_green_scale_service__["a" /* GreenScaleService */],
                __WEBPACK_IMPORTED_MODULE_30__service_app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_31__service_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_32__service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_33__service_user_data_service__["a" /* UserDataService */],
                __WEBPACK_IMPORTED_MODULE_34__service_search_data_service__["a" /* SearchDataService */],
                __WEBPACK_IMPORTED_MODULE_35__service_side_menu_service__["a" /* SideMenuService */],
                __WEBPACK_IMPORTED_MODULE_24__service_logged_guard_service__["a" /* LoggedGuardService */] //access to login & signup
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/web/nut3/src/app.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
var Helper = (function () {
    function Helper() {
        this._recursiveProperties = [];
    }
    Helper.prototype.equals = function (obj1, obj2) {
        if (typeof obj1 !== typeof obj2) {
            return false;
        }
        if ((obj1 === undefined && obj2 !== undefined) ||
            (obj2 === undefined && obj1 !== undefined) ||
            (obj1 === null && obj2 !== null) ||
            (obj2 === null && obj1 !== null)) {
            return false;
        }
        if (typeof obj1 === 'object') {
            if (Array.isArray(obj1)) {
                if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
                    return false;
                }
                for (var i = 0; i < obj1.length; i++) {
                    if (!this.equals(obj1[i], obj2[i])) {
                        return false;
                    }
                }
            }
            else {
                for (var prop in obj1) {
                    if (obj1.hasOwnProperty(prop)) {
                        if (!obj2.hasOwnProperty(prop)) {
                            return false;
                        }
                        //Endless loop fix for recursive properties
                        if (this._recursiveProperties.indexOf(prop) >= 0) {
                            if (obj1[prop] !== obj2[prop]) {
                                return false;
                            }
                        }
                        else if (!this.equals(obj1[prop], obj2[prop])) {
                            return false;
                        }
                    }
                }
                for (var prop in obj2) {
                    if (obj2.hasOwnProperty(prop)) {
                        if (!obj1.hasOwnProperty(prop)) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        return obj1 === obj2;
    };
    return Helper;
}());
//# sourceMappingURL=C:/web/nut3/src/helper.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_data_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(isMobileService, userDataService) {
        this.isMobileService = isMobileService;
        this.userDataService = userDataService;
        this.isMobile = false;
        this.email = '';
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.userListener = this.userDataService.authListener.subscribe(function (auth) {
            _this.email = auth ? _this.userDataService.getUser().email : '';
        });
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.userListener.unsubscribe();
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'main-footer',
            template: __webpack_require__(566),
            styles: [__webpack_require__(546)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_user_data_service__["a" /* UserDataService */]) === 'function' && _b) || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/web/nut3/src/footer.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_data_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_side_menu_service__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(isMobileService, sideMenuService, userDataService, router) {
        this.isMobileService = isMobileService;
        this.sideMenuService = sideMenuService;
        this.userDataService = userDataService;
        this.router = router;
        this.auth = false;
        this.isMobile = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.sideMenuLis = this.sideMenuService.openLis.subscribe(function (openMenu) {
            _this.openMenu = openMenu;
        });
        this.userListener = this.userDataService.authListener.subscribe(function (auth) {
            _this.auth = auth;
            if (auth)
                _this.userData = _this.userDataService.getUser();
        });
    };
    HeaderComponent.prototype.sideMenuOpen = function () {
        if (!this.isMobile) {
            this.router.navigate(['/']);
        }
        else {
            this.sideMenuService.changeOpenListenerSub('in');
        }
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.sideMenuLis.unsubscribe();
        this.userListener.unsubscribe();
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'main-header',
            template: __webpack_require__(567),
            styles: [__webpack_require__(547)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_side_menu_service__["a" /* SideMenuService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_side_menu_service__["a" /* SideMenuService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_user_data_service__["a" /* UserDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/web/nut3/src/header.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_data_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDiaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchDiaryComponent = (function () {
    function SearchDiaryComponent(listenerService, isMobileService, userDataService, authService) {
        this.listenerService = listenerService;
        this.isMobileService = isMobileService;
        this.userDataService = userDataService;
        this.authService = authService;
        this.isMobile = false;
        this.diaryArr = [];
        this.isAuth = false;
        this.selectedDate = {
            month: {
                number: new Date().getMonth() + 1
            },
            day: {
                number: new Date().getDate()
            },
            year: {
                number: new Date().getFullYear()
            }
        };
        this.selectedTime = 'breakfast';
        this.monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
    SearchDiaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.isMobileService.isMobile();
        this.appData = this.listenerService.getAppListenerObject();
        this.daysInMonth = new Date(this.selectedDate.year.number, this.selectedDate.month.number + 1, 0).getDate();
        this.userListener = this.userDataService.authListener.subscribe(function (auth) {
            _this.isAuth = auth;
            if (auth) {
                _this.diaryArr = _this.userDataService.getDiaries();
                _this.selectedDiary = _this.diaryArr[0];
            }
        });
    };
    SearchDiaryComponent.prototype.selectDiary = function (diary) {
        this.selectedDiary = diary;
    };
    SearchDiaryComponent.prototype.selectTime = function (val) {
        this.selectedTime = val;
    };
    SearchDiaryComponent.prototype.spin = function (num, obj, arrLength) {
        if (arrLength) {
            obj.number += num;
            if (obj.number < 1) {
                obj.number = arrLength;
            }
            else if (obj.number > arrLength) {
                obj.number = 1;
            }
        }
        else {
            obj.number += num;
        }
        this.daysInMonth = new Date(this.selectedDate.year.number, this.selectedDate.month.number, 0).getDate();
        (this.selectedDate.day.number > this.daysInMonth) ? this.selectedDate.day.number = this.daysInMonth : this.selectedDate.day.number;
    };
    SearchDiaryComponent.prototype.cancel = function () {
        this.appData.saveFoodToDiary.state = 'canceled';
        this.listenerService.changeAppListenerSubject(this.appData);
    };
    SearchDiaryComponent.prototype.confirm = function () {
        var savedData = {
            diary: this.selectedDiary,
            date: this.selectedDate,
            time: this.selectedTime,
            confirmed: true
        };
        this.appData.saveFoodToDiary.state = 'added';
        this.listenerService.changeAppListenerSubject(this.appData);
    };
    SearchDiaryComponent.prototype.ngOnDestroy = function () {
        this.userListener.unsubscribe();
    };
    SearchDiaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'search-diary',
            template: __webpack_require__(572),
            styles: [__webpack_require__(552)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_listener_service__["a" /* ListenerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_is_mobile_service__["a" /* IsMobileService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_data_service__["a" /* UserDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_user_data_service__["a" /* UserDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object])
    ], SearchDiaryComponent);
    return SearchDiaryComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/web/nut3/src/search-diary.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_listener_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_side_menu_service__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideMenuComponent = (function () {
    function SideMenuComponent(sideMenuService, listenerService) {
        this.sideMenuService = sideMenuService;
        this.listenerService = listenerService;
        this.loggedin = true;
        this.avatarImg = 'resources/images/search/instagram1.jpg';
        this.avatarName = 'Stanislav Molchanov';
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.appData = this.listenerService.getAppListenerObject();
    };
    SideMenuComponent.prototype.sideMenuClose = function () {
        this.sideMenuService.changeOpenListenerSub('out');
    };
    SideMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'side-menu',
            template: __webpack_require__(576),
            styles: [__webpack_require__(556)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_side_menu_service__["a" /* SideMenuService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_side_menu_service__["a" /* SideMenuService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_listener_service__["a" /* ListenerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_listener_service__["a" /* ListenerService */]) === 'function' && _b) || Object])
    ], SideMenuComponent);
    return SideMenuComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/web/nut3/src/side-menu.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Directive */])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* forwardRef */])(function () { return EqualValidator; }), multi: true }
            ]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Attribute */])('validateEqual')),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Attribute */])('reverse')), 
        __metadata('design:paramtypes', [String, String])
    ], EqualValidator);
    return EqualValidator;
}());
//# sourceMappingURL=C:/web/nut3/src/equal-validator.directive.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusDirective = (function () {
    function FocusDirective($element) {
        this.element = $element.nativeElement;
    }
    FocusDirective.prototype.ngAfterContentChecked = function () {
        this.giveFocus();
    };
    FocusDirective.prototype.giveFocus = function () {
        if (this.focus) {
            this.element.focus();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], FocusDirective.prototype, "focus", void 0);
    FocusDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Directive */])({
            selector: "[focus]"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object])
    ], FocusDirective);
    return FocusDirective;
    var _a;
}());
//# sourceMappingURL=C:/web/nut3/src/focus.directive.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlimScroll; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var defaults = {
    width: "auto",
    height: "250px",
    size: "7px",
    color: "#000",
    position: "right",
    distance: "1px",
    start: "top",
    opacity: .4,
    transition: .3,
    alwaysVisible: false,
    disableFadeOut: false,
    railVisible: false,
    railColor: "#333",
    railOpacity: .2,
    railClass: "slimScrollRail",
    barClass: "slimScrollBar",
    wrapperClass: "slimScrollDiv",
    allowPageScroll: false,
    wheelStep: 20,
    touchScrollStep: 200,
    borderRadius: "7px",
    railBorderRadius: "7px",
    scrollTo: 0
};
var SlimScroll = (function () {
    function SlimScroll(renderer, elementRef) {
        this._minBarHeight = 30;
        this._releaseScroll = false;
        this._renderer = renderer;
        this._me = elementRef.nativeElement;
        this._options = Object.assign({}, defaults);
    }
    SlimScroll.prototype.ngOnInit = function () {
        this.init();
    };
    SlimScroll.prototype.ngOnDestroy = function () {
        if (this._changesTracker) {
            clearInterval(this._changesTracker);
        }
    };
    SlimScroll.prototype.onResize = function () {
        this.init();
    };
    Object.defineProperty(SlimScroll.prototype, "width", {
        set: function (value) {
            this._options.width = value || defaults.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "height", {
        set: function (value) {
            this._options.height = value || defaults.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "size", {
        set: function (value) {
            this._options.size = value || defaults.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "color", {
        set: function (value) {
            this._options.color = value || defaults.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "position", {
        set: function (value) {
            this._options.position = value || defaults.position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "distance", {
        set: function (value) {
            this._options.distance = value || defaults.distance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "start", {
        set: function (value) {
            this._options.start = value || defaults.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "opacity", {
        set: function (value) {
            this._options.opacity = value || defaults.opacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "transition", {
        set: function (value) {
            this._options.transition = value || defaults.transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "alwaysVisible", {
        set: function (value) {
            this._options.alwaysVisible = value || defaults.alwaysVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "disableFadeOut", {
        set: function (value) {
            this._options.disableFadeOut = value || defaults.disableFadeOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railVisible", {
        set: function (value) {
            this._options.railVisible = value || defaults.railVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railColor", {
        set: function (value) {
            this._options.railColor = value || defaults.railColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railOpacity", {
        set: function (value) {
            this._options.railOpacity = value || defaults.railOpacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railClass", {
        set: function (value) {
            this._options.railClass = value || defaults.railClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "barClass", {
        set: function (value) {
            this._options.barClass = value || defaults.barClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "wrapperClass", {
        set: function (value) {
            this._options.wrapperClass = value || defaults.wrapperClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "allowPageScroll", {
        set: function (value) {
            this._options.allowPageScroll = value || defaults.allowPageScroll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "wheelStep", {
        set: function (value) {
            this._options.wheelStep = value || defaults.wheelStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "touchScrollStep", {
        set: function (value) {
            this._options.touchScrollStep = value || defaults.touchScrollStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "borderRadius", {
        set: function (value) {
            this._options.borderRadius = value || defaults.borderRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railBorderRadius", {
        set: function (value) {
            this._options.railBorderRadius = value || defaults.railBorderRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "scrollTo", {
        set: function (value) {
            this._options.scrollTo = value || defaults.scrollTo;
        },
        enumerable: true,
        configurable: true
    });
    SlimScroll.prototype.trackPanelHeightChanged = function () {
        var _this = this;
        this._previousHeight = this._me.scrollHeight;
        this._changesTracker = setInterval(function () {
            if (_this._previousHeight !== _this._me.scrollHeight) {
                _this._previousHeight = _this._me.scrollHeight;
                _this.init();
            }
        }, 1000);
    };
    SlimScroll.prototype.hasParentClass = function (e, className) {
        if (!e) {
            return false;
        }
        if (e.classList.contains(this._options.wrapperClass)) {
            return true;
        }
        return this.hasParentClass(e.parentElement, className);
    };
    SlimScroll.prototype.onWheel = function (e) {
        // use mouse wheel only when mouse is over
        if (!this._isOverPanel) {
            return;
        }
        var delta = 0;
        if (e.wheelDelta) {
            delta = -e.wheelDelta / 120;
        }
        if (e.detail) {
            delta = e.detail / 3;
        }
        var target = e.target || e.currentTarget || e.relatedTarget;
        if (this.hasParentClass(target, this._options.wrapperClass)) {
            // scroll content
            this.scrollContent(delta, true);
        }
        // stop window scroll
        if (e.preventDefault && !this._releaseScroll) {
            e.preventDefault();
        }
        if (!this._releaseScroll) {
            e.returnValue = false;
        }
    };
    SlimScroll.prototype.attachWheel = function (target) {
        var _this = this;
        if (window.addEventListener) {
            target.addEventListener("DOMMouseScroll", function (e) { return _this.onWheel(e); }, false);
            target.addEventListener("mousewheel", function (e) { return _this.onWheel(e); }, false);
        }
        else {
            document.addEventListener("mousewheel", function (e) { return _this.onWheel(e); }, false);
        }
    };
    SlimScroll.prototype.showBar = function () {
        // recalculate bar height
        this.getBarHeight();
        clearTimeout(this._queueHide);
        // when bar reached top or bottom
        if (this._percentScroll === ~~this._percentScroll) {
            // release wheel
            this._releaseScroll = this._options.allowPageScroll;
        }
        else {
            this._releaseScroll = false;
        }
        this._lastScroll = this._percentScroll;
        // show only when required
        if (this._barHeight >= this._me.offsetHeight) {
            // allow window scroll
            this._releaseScroll = true;
            return;
        }
        this._renderer.setElementStyle(this._bar, "opacity", this._options.opacity.toString());
        this._renderer.setElementStyle(this._rail, "opacity", this._options.railOpacity.toString());
    };
    SlimScroll.prototype.hideBar = function () {
        var _this = this;
        // only hide when options allow it
        if (!this._options.alwaysVisible) {
            this._queueHide = setTimeout(function () {
                if (!(_this._options.disableFadeOut && _this._isOverPanel) && !_this._isOverBar && !_this._isDragg) {
                    _this._renderer.setElementStyle(_this._bar, "opacity", "0");
                    _this._renderer.setElementStyle(_this._rail, "opacity", "0");
                }
            }, 1000);
        }
    };
    SlimScroll.prototype.scrollContent = function (y, isWheel, isJump) {
        if (isJump === void 0) { isJump = false; }
        this._releaseScroll = false;
        var delta = y;
        var maxTop = this._me.offsetHeight - this._bar.offsetHeight;
        if (isWheel) {
            // move bar with mouse wheel
            delta = parseInt(this._bar.style.top, 10) + y * this._options.wheelStep / 100 * this._bar.offsetHeight;
            // move bar, make sure it doesn"t go out
            delta = Math.min(Math.max(delta, 0), maxTop);
            // if scrolling down, make sure a fractional change to the
            // scroll position isn"t rounded away when the scrollbar"s CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
            // scroll the scrollbar
            this._renderer.setElementStyle(this._bar, "top", delta + "px");
        }
        // calculate actual scroll amount
        this._percentScroll = parseInt(this._bar.style.top, 10) / (this._me.offsetHeight - this._bar.offsetHeight);
        delta = this._percentScroll * (this._me.scrollHeight - this._me.offsetHeight);
        if (isJump) {
            delta = y;
            var offsetTop = delta / this._me.scrollHeight * this._me.offsetHeight;
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            this._renderer.setElementStyle(this._bar, "top", offsetTop + "px");
        }
        // scroll content
        this._me.scrollTop = delta;
        // ensure bar is visible
        this.showBar();
        // trigger hide when scroll is stopped
        this.hideBar();
    };
    SlimScroll.prototype.getBarHeight = function () {
        // calculate scrollbar height and make sure it is not too small
        this._barHeight = Math.max(this._me.offsetHeight / (this._me.scrollHeight === 0 ? 1 : this._me.scrollHeight) * this._me.offsetHeight, this._minBarHeight);
        this._renderer.setElementStyle(this._bar, "height", this._barHeight + "px");
        // hide scrollbar if content is not long enough
        var display = this._barHeight === this._me.offsetHeight ? "none" : "block";
        this._renderer.setElementStyle(this._bar, "display", display);
    };
    SlimScroll.prototype.refresh = function () {
        this.getBarHeight();
        // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
        if ("height" in this._options && this._options.height === "auto") {
            this._renderer.setElementStyle(this._me.parentElement, "height", "auto");
            this._renderer.setElementStyle(this._me, "height", "auto");
            var height = this._me.parentElement.clientHeight;
            this._renderer.setElementStyle(this._me.parentElement, "height", height + "px");
            this._renderer.setElementStyle(this._me, "height", height + "px");
        }
        else if ("height" in this._options) {
            var h = this._options.height;
            this._renderer.setElementStyle(this._me.parentElement, "height", h);
            this._renderer.setElementStyle(this._me, "height", h);
        }
    };
    SlimScroll.prototype.setup = function () {
        var _this = this;
        // wrap content
        var wrapper = document.createElement("div");
        this._renderer.setElementClass(wrapper, this._options.wrapperClass, true);
        this._renderer.setElementStyle(wrapper, "position", "relative");
        this._renderer.setElementStyle(wrapper, "overflow", "hidden");
        this._renderer.setElementStyle(wrapper, "width", this._options.width);
        this._renderer.setElementStyle(wrapper, "height", this._options.height);
        // update style for the div
        this._renderer.setElementStyle(this._me, "overflow", "hidden");
        this._renderer.setElementStyle(this._me, "width", this._options.width);
        this._renderer.setElementStyle(this._me, "height", this._options.height);
        // create scrollbar rail
        this._rail = document.createElement("div");
        this._renderer.setElementClass(this._rail, this._options.railClass, true);
        this._renderer.setElementStyle(this._rail, "width", this._options.size);
        this._renderer.setElementStyle(this._rail, "height", "100%");
        this._renderer.setElementStyle(this._rail, "position", "absolute");
        this._renderer.setElementStyle(this._rail, "top", "0");
        this._renderer.setElementStyle(this._rail, "display", this._options.railVisible ? "block" : "none");
        this._renderer.setElementStyle(this._rail, "border-radius", this._options.railBorderRadius);
        this._renderer.setElementStyle(this._rail, "background", this._options.railColor);
        this._renderer.setElementStyle(this._rail, "opacity", this._options.railOpacity.toString());
        this._renderer.setElementStyle(this._rail, "transition", "opacity " + this._options.transition + "s");
        this._renderer.setElementStyle(this._rail, "z-index", "90");
        // create scrollbar
        this._bar = document.createElement("div");
        this._renderer.setElementClass(this._bar, this._options.barClass, true);
        this._renderer.setElementStyle(this._bar, "background", this._options.color);
        this._renderer.setElementStyle(this._bar, "width", this._options.size);
        this._renderer.setElementStyle(this._bar, "position", "absolute");
        this._renderer.setElementStyle(this._bar, "top", "0");
        this._renderer.setElementStyle(this._bar, "opacity", this._options.opacity.toString());
        this._renderer.setElementStyle(this._bar, "transition", "opacity " + this._options.transition + "s");
        this._renderer.setElementStyle(this._bar, "display", this._options.alwaysVisible ? "block" : "none");
        this._renderer.setElementStyle(this._bar, "border-radius", this._options.borderRadius);
        this._renderer.setElementStyle(this._bar, "webkit-border-radius", this._options.borderRadius);
        this._renderer.setElementStyle(this._bar, "moz-border-radius", this._options.borderRadius);
        this._renderer.setElementStyle(this._bar, "z-index", "99");
        // set position
        if (this._options.position === "right") {
            this._renderer.setElementStyle(this._rail, "right", this._options.distance);
            this._renderer.setElementStyle(this._bar, "right", this._options.distance);
        }
        else {
            this._renderer.setElementStyle(this._rail, "left", this._options.distance);
            this._renderer.setElementStyle(this._bar, "left", this._options.distance);
        }
        // wrap it
        this._me.parentElement.insertBefore(wrapper, this._me);
        wrapper.appendChild(this._me);
        if (this._options.scrollTo > 0) {
            // jump to a static point
            var offset = this._options.scrollTo;
            // scroll content by the given offset
            this.scrollContent(offset, false, true);
        }
        // append to parent div
        this._me.parentElement.appendChild(this._bar);
        this._me.parentElement.appendChild(this._rail);
        this._bar.addEventListener("mousedown", function (e) {
            _this._isDragg = true;
            // disable text selection
            _this._renderer.setElementStyle(document.querySelector('body'), "-webkit-user-select", "none");
            _this._renderer.setElementStyle(document.querySelector('body'), "-moz-user-select", "none");
            _this._renderer.setElementStyle(document.querySelector('body'), "-ms-user-select", "none");
            _this._renderer.setElementStyle(document.querySelector('body'), "user-select", "none");
            var t = parseFloat(_this._bar.style.top);
            var pageY = e.pageY;
            var mousemoveEvent = function (event) {
                var currTop = t + event.pageY - pageY;
                _this._renderer.setElementStyle(_this._bar, "top", (currTop >= 0 ? currTop : 0) + "px");
                var position = _this._bar.getClientRects()[0];
                if (position) {
                    _this.scrollContent(0, position.top > 0);
                }
            };
            var mouseupEvent = function () {
                _this._isDragg = false;
                // return normal text selection
                _this._renderer.setElementStyle(document.querySelector('body'), "-webkit-user-select", "initial");
                _this._renderer.setElementStyle(document.querySelector('body'), "-moz-user-select", "initial");
                _this._renderer.setElementStyle(document.querySelector('body'), "-ms-user-select", "initial");
                _this._renderer.setElementStyle(document.querySelector('body'), "user-select", "initial");
                _this.hideBar();
                document.removeEventListener("mousemove", mousemoveEvent, false);
                document.removeEventListener("mouseup", mouseupEvent, false);
            };
            document.addEventListener("mousemove", mousemoveEvent, false);
            document.addEventListener("mouseup", mouseupEvent, false);
            return false;
        }, false);
        // on rail over
        this._rail.addEventListener("mouseenter", function () { return _this.showBar(); }, false);
        this._rail.addEventListener("mouseleave", function () { return _this.hideBar(); }, false);
        // on bar over
        this._bar.addEventListener("mouseenter", function () { return _this._isOverBar = true; }, false);
        this._bar.addEventListener("mouseleave", function () { return _this._isOverBar = false; }, false);
        // show on parent mouseover
        this._me.addEventListener("mouseenter", function () {
            _this._isOverPanel = true;
            _this.showBar();
            _this.hideBar();
        }, false);
        this._me.addEventListener("mouseleave", function () {
            _this._isOverPanel = false;
            _this.hideBar();
        }, false);
        // support for mobile
        this._me.addEventListener("touchstart", function (e) {
            if (e.touches.length) {
                // record where touch started
                _this._touchDif = e.touches[0].pageY;
            }
        }, false);
        this._me.addEventListener("touchmove", function (e) {
            // prevent scrolling the page if necessary
            if (!_this._releaseScroll) {
                e.preventDefault();
            }
            if (e.touches.length) {
                // see how far user swiped
                var diff = (_this._touchDif - e.touches[0].pageY) / _this._options.touchScrollStep;
                // scroll content
                _this.scrollContent(diff, true);
                _this._touchDif = e.touches[0].pageY;
            }
        }, false);
        // set up initial height
        this.getBarHeight();
        // hide bar on init if alwaysVisible equal false
        this.hideBar();
        // check start position
        if (this._options.start === "bottom") {
            // scroll content to bottom
            this._renderer.setElementStyle(this._bar, "top", this._me.offsetHeight - this._bar.offsetHeight + "px");
            this.scrollContent(0, true);
        }
        // attach scroll events
        this.attachWheel(window);
        // check whether it changes in content
        this.trackPanelHeightChanged();
    };
    SlimScroll.prototype.init = function () {
        // ensure we are not binding it again
        if (this._bar && this._rail) {
            this.refresh();
        }
        else {
            this.setup();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])("window:resize", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], SlimScroll.prototype, "onResize", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "width", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "height", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "size", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "color", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "position", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "distance", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "start", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], SlimScroll.prototype, "opacity", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], SlimScroll.prototype, "transition", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SlimScroll.prototype, "alwaysVisible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SlimScroll.prototype, "disableFadeOut", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SlimScroll.prototype, "railVisible", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "railColor", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], SlimScroll.prototype, "railOpacity", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "railClass", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "barClass", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "wrapperClass", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SlimScroll.prototype, "allowPageScroll", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], SlimScroll.prototype, "wheelStep", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], SlimScroll.prototype, "touchScrollStep", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "borderRadius", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SlimScroll.prototype, "railBorderRadius", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], SlimScroll.prototype, "scrollTo", null);
    SlimScroll = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Directive */])({
            selector: "[slimScroll]"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Renderer */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _b) || Object])
    ], SlimScroll);
    return SlimScroll;
    var _a, _b;
}());
//# sourceMappingURL=C:/web/nut3/src/slimscroll.directive.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calendar_page_calendar_page_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_date_date_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nutritional_nutritional_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_food_food_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_history_history_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_diary_selected_diary_selected_diary_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_diary_diaries_select_diaries_select_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_diary_diary_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_signup_signup_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_result_details_result_details_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_search_search_results_search_results_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__ = __webpack_require__(327);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__["a" /* SearchComponent */],
        children: [
            {
                path: '',
                redirectTo: 'search-results',
                pathMatch: 'full'
            },
            {
                path: 'search-results',
                component: __WEBPACK_IMPORTED_MODULE_12__components_search_search_results_search_results_component__["a" /* SearchResultsComponent */]
            },
            {
                path: 'search-results/:id',
                component: __WEBPACK_IMPORTED_MODULE_12__components_search_search_results_search_results_component__["a" /* SearchResultsComponent */]
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_11__components_search_result_details_result_details_component__["a" /* ResultDetailsComponent */]
            },
            {
                path: 'result-details/:id',
                component: __WEBPACK_IMPORTED_MODULE_11__components_search_result_details_result_details_component__["a" /* ResultDetailsComponent */]
            }
        ]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [LoggedGuardService]
    },
    {
        path: 'sign-up',
        component: __WEBPACK_IMPORTED_MODULE_9__components_signup_signup_component__["a" /* SignupComponent */],
        canActivate: [LoggedGuardService]
    },
    {
        path: 'diary',
        component: __WEBPACK_IMPORTED_MODULE_8__components_diary_diary_component__["a" /* DiaryComponent */],
        children: [
            {
                path: '',
                redirectTo: 'diaries-select',
                pathMatch: 'full'
            },
            {
                path: 'diaries-select',
                component: __WEBPACK_IMPORTED_MODULE_7__components_diary_diaries_select_diaries_select_component__["a" /* DiariesSelectComponent */]
            },
            {
                path: 'selected-diary/:id',
                component: __WEBPACK_IMPORTED_MODULE_6__components_diary_selected_diary_selected_diary_component__["a" /* SelectedDiaryComponent */]
            }
        ]
    },
    {
        path: 'history',
        component: __WEBPACK_IMPORTED_MODULE_5__components_history_history_component__["a" /* HistoryComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_2__components_date_date_component__["a" /* DateComponent */]
    },
    {
        path: 'calendar',
        component: __WEBPACK_IMPORTED_MODULE_1__components_calendar_page_calendar_page_component__["a" /* CalendarPageComponent */]
    },
    {
        path: 'date/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_date_date_component__["a" /* DateComponent */]
    },
    {
        path: 'nutritional',
        component: __WEBPACK_IMPORTED_MODULE_3__components_nutritional_nutritional_component__["a" /* NutritionalComponent */]
    },
    {
        path: 'food',
        component: __WEBPACK_IMPORTED_MODULE_4__components_food_food_component__["a" /* FoodComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=C:/web/nut3/src/router.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/web/nut3/src/environment.js.map

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center, app-root .slider-wrap, app-root .custom-file-upload span, app-root .time-item span, .svg-wrap {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, app-root .slider-wrap .main-slider, app-root .reg-navig, app-root .custom-file-upload, svg, html.tablet .res-block, html.mobile .res-block {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100, app-root .slider-wrap {\n  width: 100%;\n  position: absolute; }\n\napp-root {\n  color: #ffffff; }\n  app-root .app-wrap {\n    position: relative;\n    width: 100%;\n    height: 100%; }\n  app-root #cvs-slider {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 92%;\n    -webkit-transition: margin-top 0.5s;\n    transition: margin-top 0.5s; }\n  app-root .btn-side-mnu {\n    display: none;\n    background: url(\"/assets/resources/images/search/delete.png\") no-repeat;\n    background-position: 50% 50%;\n    background-size: 30% 30%;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    position: fixed;\n    opacity: 1;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n    width: 12vw;\n    height: 12vw;\n    right: 4%;\n    bottom: 10%;\n    border-radius: 50%;\n    background-color: #3ec14d; }\n  app-root .slider-wrap {\n    top: 55%;\n    height: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: visible;\n    -webkit-transition: margin-top 0.5s;\n    transition: margin-top 0.5s; }\n    app-root .slider-wrap .main-slider {\n      position: relative; }\n      app-root .slider-wrap .main-slider .navig {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        -webkit-transform: translate(0, -50%);\n                transform: translate(0, -50%);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n        app-root .slider-wrap .main-slider .navig .navitems {\n          width: 9rem;\n          height: 9rem;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%);\n          border-radius: 50%;\n          background-color: transparent;\n          -webkit-transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;\n          transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;\n          transition: width 0.2s, height 0.2s, transform 0.2s;\n          transition: width 0.2s, height 0.2s, transform 0.2s, -webkit-transform 0.2s;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n          @media screen and (max-width: 1500px) {\n            app-root .slider-wrap .main-slider .navig .navitems {\n              width: 8rem;\n              height: 8rem; } }\n          @media screen and (max-width: 1200px) {\n            app-root .slider-wrap .main-slider .navig .navitems {\n              width: 7rem;\n              height: 7rem; } }\n          @media screen and (max-width: 1000px) {\n            app-root .slider-wrap .main-slider .navig .navitems {\n              width: 6rem;\n              height: 6rem; } }\n          @media screen and (max-width: 800px) {\n            app-root .slider-wrap .main-slider .navig .navitems {\n              width: 5rem;\n              height: 5rem; } }\n          app-root .slider-wrap .main-slider .navig .navitems .naw-wrap {\n            width: 80%;\n            height: 80%;\n            text-transform: uppercase;\n            border-radius: 50%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            cursor: pointer;\n            background: 50% 50% no-repeat;\n            background-size: 50% 50%;\n            position: relative; }\n            app-root .slider-wrap .main-slider .navig .navitems .naw-wrap img {\n              height: 100%;\n              width: auto;\n              border-radius: 50%; }\n            app-root .slider-wrap .main-slider .navig .navitems .naw-wrap .img-wrap {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              width: 100%;\n              height: 100%;\n              border-radius: 50%; }\n              app-root .slider-wrap .main-slider .navig .navitems .naw-wrap .img-wrap img {\n                height: 50%; }\n        app-root .slider-wrap .main-slider .navig .scale-x-2 {\n          width: 10vw;\n          height: 10vw; }\n  app-root .res-block {\n    width: 32%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  app-root .item {\n    height: 6vh;\n    width: 100%;\n    padding: 0 3%;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    app-root .item .text-res-item {\n      font-size: 1.5vh;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    app-root .item .N-W {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 100%;\n      width: 10%;\n      font-size: 1.7vh; }\n      app-root .item .N-W a {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 40%; }\n        app-root .item .N-W a img {\n          max-height: 100%;\n          max-width: 100%; }\n      app-root .item .N-W img {\n        cursor: pointer;\n        max-height: 60%;\n        max-width: 60%; }\n  app-root .reg-navig {\n    list-style-type: none;\n    margin: 0;\n    padding: 0; }\n    app-root .reg-navig li {\n      height: 100%;\n      width: 16%;\n      display: block;\n      float: left;\n      margin-left: 0.5%;\n      border-bottom: 2px solid #ffffff;\n      cursor: pointer; }\n      app-root .reg-navig li h5 {\n        margin: 0;\n        padding: 0;\n        display: block;\n        color: #ffffff;\n        text-align: center;\n        font-size: 1.2vh;\n        opacity: 0.7; }\n    app-root .reg-navig .element-active {\n      border-bottom: 2px solid #3ec14d; }\n  app-root .custom-file-upload {\n    border-radius: 50%;\n    background: no-repeat;\n    background-position: 50% 50%;\n    background-size: auto 100%;\n    display: block;\n    margin: 0px;\n    cursor: pointer; }\n    app-root .custom-file-upload img {\n      height: 100% !important;\n      width: auto;\n      max-width: none !important;\n      max-height: 100% !important; }\n    app-root .custom-file-upload span {\n      position: absolute;\n      white-space: nowrap; }\n    app-root .custom-file-upload input[type=\"file\"] {\n      display: none; }\n  app-root .last-confirm {\n    height: 12.5%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    app-root .last-confirm .btn-blocks {\n      height: 100%;\n      width: 47%;\n      background-color: #9c9a9a;\n      color: #31311b;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n      app-root .last-confirm .btn-blocks span {\n        text-transform: capitalize;\n        font-size: 2vh; }\n      app-root .last-confirm .btn-blocks:hover {\n        background-color: #ffffff;\n        color: #3ec14d; }\n  app-root .bg-red {\n    background: url(\"/assets/resources/images/search/bg-red.png\") no-repeat; }\n  app-root .bg-green {\n    background: url(\"/assets/resources/images/search/bg-green.png\") no-repeat; }\n  app-root .bg-green, app-root .bg-red {\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 101%;\n    height: 100%;\n    z-index: 1;\n    opacity: 0.8;\n    background-size: 100% 100%; }\n  app-root .unlock {\n    width: 60%;\n    font-size: 1.2vh;\n    text-indent: 6%;\n    background: url(\"/assets/resources/images/search/unlock.png\") no-repeat;\n    background-position: 0 50%;\n    background-size: auto 90%; }\n    app-root .unlock a {\n      color: #3ec14d;\n      text-decoration: underline; }\n  app-root .form-group {\n    position: relative;\n    margin-bottom: 0; }\n    app-root .form-group .no-valid {\n      position: absolute;\n      right: 0;\n      bottom: -35%;\n      font-size: 1rem; }\n  app-root input {\n    background-color: transparent;\n    border: none; }\n    app-root input:focus {\n      outline: none; }\n  app-root input::-webkit-outer-spin-button,\n  app-root input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n  app-root .img {\n    width: 90%;\n    height: 90%;\n    border-radius: 50%;\n    background: 50% 50% no-repeat;\n    background-position: center;\n    background-size: auto 100%; }\n  app-root .calendar-header, app-root .calendar-footer {\n    width: 50%;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    z-index: 100;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    app-root .calendar-header .calendar-nav, app-root .calendar-header .img-wrap, app-root .calendar-footer .calendar-nav, app-root .calendar-footer .img-wrap {\n      cursor: pointer;\n      width: 8%;\n      max-width: 50px;\n      max-height: 50px;\n      min-width: 25px;\n      min-height: 25px;\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      app-root .calendar-header .calendar-nav img, app-root .calendar-header .img-wrap img, app-root .calendar-footer .calendar-nav img, app-root .calendar-footer .img-wrap img {\n        max-height: 80%;\n        max-width: 80%; }\n    app-root .calendar-header .calendar-nav, app-root .calendar-footer .calendar-nav {\n      margin: 0 2%; }\n  app-root .calendar-header {\n    top: 2%; }\n  app-root .calendar-footer {\n    bottom: 2%; }\n  app-root .slider-left-btn, app-root .slider-right-btn {\n    cursor: pointer;\n    position: absolute;\n    width: 2vw;\n    height: 2vw;\n    top: 50%; }\n  app-root .slider-left-btn {\n    left: 2vw;\n    -webkit-transform: translateY(-15%);\n            transform: translateY(-15%); }\n  app-root .slider-right-btn {\n    right: 2vw;\n    -webkit-transform: translateY(-15%) rotate(180deg);\n            transform: translateY(-15%) rotate(180deg); }\n  app-root .time-item {\n    width: 6vh;\n    height: 6vh;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    border: 1px solid #ffffff;\n    position: relative; }\n    app-root .time-item img {\n      max-height: 60%;\n      max-width: 60%; }\n    app-root .time-item span {\n      width: 100%;\n      text-align: center;\n      text-transform: uppercase;\n      position: absolute;\n      opacity: 0.9;\n      font-size: 0.8vh; }\n  app-root .time-selected {\n    background-color: #ffffff; }\n    app-root .time-selected img {\n      -webkit-filter: grayscale(100%);\n      filter: grayscale(100%); }\n    app-root .time-selected span {\n      color: #666666; }\n  app-root .tag-log-in {\n    position: absolute;\n    width: 70%;\n    font-size: 3.5vh;\n    color: #ffffff;\n    top: 10%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    text-align: center; }\n  app-root .sliderInvisible {\n    opacity: 0;\n    z-index: -100; }\n\nimg {\n  max-height: 100%;\n  max-width: 100%; }\n\n.svg-wrap {\n  width: 105%;\n  height: 105%;\n  position: absolute; }\n\nhtml.tablet .btn-side-mnu, html.mobile .btn-side-mnu {\n  display: block;\n  z-index: 650; }\n\nhtml.tablet .hide-btn, html.mobile .hide-btn {\n  z-index: -1;\n  opacity: 0; }\n\nhtml.tablet .slider-wrap > .main-slider > .navig .navitems, html.mobile .slider-wrap > .main-slider > .navig .navitems {\n  width: 10rem;\n  height: 10rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet .slider-wrap > .main-slider > .navig .navitems, html.mobile .slider-wrap > .main-slider > .navig .navitems {\n      width: 9rem;\n      height: 9rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet .slider-wrap > .main-slider > .navig .navitems, html.mobile .slider-wrap > .main-slider > .navig .navitems {\n      width: 8rem;\n      height: 8rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet .slider-wrap > .main-slider > .navig .navitems, html.mobile .slider-wrap > .main-slider > .navig .navitems {\n      width: 7rem;\n      height: 7rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet .slider-wrap > .main-slider > .navig .navitems, html.mobile .slider-wrap > .main-slider > .navig .navitems {\n      width: 5rem;\n      height: 5rem; } }\n\nhtml.tablet .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile .slider-wrap > .main-slider > .navig .scale-x-2 {\n  width: 16rem;\n  height: 16rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile .slider-wrap > .main-slider > .navig .scale-x-2 {\n      width: 14rem;\n      height: 14rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile .slider-wrap > .main-slider > .navig .scale-x-2 {\n      width: 13rem;\n      height: 13rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile .slider-wrap > .main-slider > .navig .scale-x-2 {\n      width: 10rem;\n      height: 10rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile .slider-wrap > .main-slider > .navig .scale-x-2 {\n      width: 8rem;\n      height: 8rem; } }\n\nhtml.tablet .res-block, html.mobile .res-block {\n  position: relative;\n  padding: 0 5%; }\n\nhtml.tablet .item, html.mobile .item {\n  padding: 0 2%;\n  height: 7.5rem; }\n  html.tablet .item .text-res-item, html.mobile .item .text-res-item {\n    font-size: 3rem; }\n  html.tablet .item .N-W, html.mobile .item .N-W {\n    font-size: 1.7vh; }\n    html.tablet .item .N-W a, html.mobile .item .N-W a {\n      height: 50%; }\n      html.tablet .item .N-W a img, html.mobile .item .N-W a img {\n        max-height: 100%; }\n    html.tablet .item .N-W img, html.mobile .item .N-W img {\n      max-height: 50%; }\n  @media screen and (max-width: 1000px) {\n    html.tablet .item, html.mobile .item {\n      height: 6.7rem; }\n      html.tablet .item .text-res-item, html.mobile .item .text-res-item {\n        font-size: 2.5rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet .item, html.mobile .item {\n      height: 5.7rem; }\n      html.tablet .item .text-res-item, html.mobile .item .text-res-item {\n        font-size: 2rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet .item, html.mobile .item {\n      height: 4.4rem; }\n      html.tablet .item .text-res-item, html.mobile .item .text-res-item {\n        font-size: 1.7rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet .item, html.mobile .item {\n      height: 3.8rem; }\n      html.tablet .item .text-res-item, html.mobile .item .text-res-item {\n        font-size: 1.5rem; } }\n\nhtml.tablet .reg-navig li, html.mobile .reg-navig li {\n  border-bottom: 4px solid #ffffff; }\n  html.tablet .reg-navig li h5, html.mobile .reg-navig li h5 {\n    font-size: 2rem; }\n    @media screen and (max-width: 1000px) {\n      html.tablet .reg-navig li h5, html.mobile .reg-navig li h5 {\n        font-size: 2rem; } }\n    @media screen and (max-width: 800px) {\n      html.tablet .reg-navig li h5, html.mobile .reg-navig li h5 {\n        font-size: 1.5rem; } }\n    @media screen and (max-width: 600px) {\n      html.tablet .reg-navig li h5, html.mobile .reg-navig li h5 {\n        font-size: 1.2rem; } }\n    @media screen and (max-width: 400px) {\n      html.tablet .reg-navig li h5, html.mobile .reg-navig li h5 {\n        font-size: 1rem; } }\n\nhtml.tablet .reg-navig .element-active, html.mobile .reg-navig .element-active {\n  border-bottom: 4px solid #3ec14d; }\n\nhtml.tablet .last-confirm, html.mobile .last-confirm {\n  height: 7.5rem; }\n  html.tablet .last-confirm span, html.mobile .last-confirm span {\n    font-size: 3rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet .last-confirm, html.mobile .last-confirm {\n      height: 6.7rem; }\n      html.tablet .last-confirm span, html.mobile .last-confirm span {\n        font-size: 2.5rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet .last-confirm, html.mobile .last-confirm {\n      height: 5.7rem; }\n      html.tablet .last-confirm span, html.mobile .last-confirm span {\n        font-size: 2rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet .last-confirm, html.mobile .last-confirm {\n      height: 4.4rem; }\n      html.tablet .last-confirm span, html.mobile .last-confirm span {\n        font-size: 1.7rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet .last-confirm, html.mobile .last-confirm {\n      height: 3.8rem; }\n      html.tablet .last-confirm span, html.mobile .last-confirm span {\n        font-size: 1.5rem; } }\n\nhtml.tablet .calendar-header, html.tablet .calendar-footer, html.mobile .calendar-header, html.mobile .calendar-footer {\n  width: 60%; }\n\nhtml.tablet .calendar-nav, html.mobile .calendar-nav {\n  width: 12%;\n  margin: 0 5%; }\n\nhtml.tablet .time-item, html.mobile .time-item {\n  width: 9rem;\n  height: 9rem; }\n  html.tablet .time-item span, html.mobile .time-item span {\n    font-size: 1.4rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet .time-item, html.mobile .time-item {\n      width: 7.5rem;\n      height: 7.5rem; }\n      html.tablet .time-item span, html.mobile .time-item span {\n        font-size: 1.2rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet .time-item, html.mobile .time-item {\n      width: 6.5rem;\n      height: 6.5rem; }\n      html.tablet .time-item span, html.mobile .time-item span {\n        font-size: 1rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet .time-item, html.mobile .time-item {\n      width: 5.5rem;\n      height: 5.5rem; }\n      html.tablet .time-item span, html.mobile .time-item span {\n        font-size: 0.8rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet .time-item, html.mobile .time-item {\n      width: 4.5rem;\n      height: 4.5rem; }\n      html.tablet .time-item span, html.mobile .time-item span {\n        font-size: 0.6rem; } }\n\nhtml.tablet .tag-log-in, html.mobile .tag-log-in {\n  font-size: 3vh; }\n\nhtml.tablet .side-menu-open, html.mobile .side-menu-open {\n  z-index: 600;\n  width: 12vw;\n  right: 0;\n  bottom: 1%; }\n  html.tablet .side-menu-open .main-footer > .footer-wrap, html.mobile .side-menu-open .main-footer > .footer-wrap {\n    padding: 0 25%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    html.tablet .side-menu-open .main-footer > .footer-wrap .social-footer-wrap, html.tablet .side-menu-open .main-footer > .footer-wrap .email-footer-wrap, html.mobile .side-menu-open .main-footer > .footer-wrap .social-footer-wrap, html.mobile .side-menu-open .main-footer > .footer-wrap .email-footer-wrap {\n      width: 100%;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n      html.tablet .side-menu-open .main-footer > .footer-wrap .social-footer-wrap a, html.tablet .side-menu-open .main-footer > .footer-wrap .email-footer-wrap a, html.mobile .side-menu-open .main-footer > .footer-wrap .social-footer-wrap a, html.mobile .side-menu-open .main-footer > .footer-wrap .email-footer-wrap a {\n        width: 90% !important;\n        margin-right: 0 !important;\n        margin-bottom: 70%; }\n\nhtml.tablet .unlock, html.mobile .unlock {\n  font-size: 2.5vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center, calendar-page .calendar .day .day-number .week-day, html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, calendar-page {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\ncalendar-page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden;\n  position: relative; }\n  calendar-page .calendar-footer span {\n    font-size: 1.7vh;\n    opacity: 0.8; }\n  calendar-page .calendar-footer .changable-month, calendar-page .calendar-footer .changable-year {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    calendar-page .calendar-footer .changable-month span, calendar-page .calendar-footer .changable-year span {\n      margin: 0 5%; }\n    calendar-page .calendar-footer .changable-month .img-wrap, calendar-page .calendar-footer .changable-year .img-wrap {\n      height: 100%; }\n      calendar-page .calendar-footer .changable-month .img-wrap img, calendar-page .calendar-footer .changable-year .img-wrap img {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n        max-height: 80%; }\n  calendar-page .footer-to-top {\n    bottom: auto;\n    top: 2%; }\n  calendar-page .calendar {\n    width: 90%;\n    height: 85%;\n    border-top: 1px solid rgba(255, 255, 255, 0.2);\n    border-left: 1px solid rgba(255, 255, 255, 0.2); }\n    calendar-page .calendar .day {\n      float: left;\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      height: 20%;\n      width: calc(100%/7);\n      position: relative;\n      cursor: pointer;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border-right: 1px solid rgba(255, 255, 255, 0.2);\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n      calendar-page .calendar .day:hover {\n        background-color: #ffffff; }\n        calendar-page .calendar .day:hover .day-number .week-day {\n          color: #000000; }\n        calendar-page .calendar .day:hover .day-number span {\n          opacity: 0.3;\n          color: #3ec14d; }\n        calendar-page .calendar .day:hover .diary-add img, calendar-page .calendar .day:hover .week-month img {\n          -webkit-filter: invert(60%);\n                  filter: invert(60%); }\n      calendar-page .calendar .day .week-month {\n        position: absolute;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 70%;\n        top: 0;\n        right: 5%; }\n        calendar-page .calendar .day .week-month img {\n          max-height: 30%;\n          margin-top: 35%; }\n      calendar-page .calendar .day .day-number {\n        width: 100%;\n        height: 70%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: relative;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        calendar-page .calendar .day .day-number .week-day {\n          position: absolute;\n          opacity: 0.9;\n          font-size: 1.3vw; }\n        calendar-page .calendar .day .day-number span {\n          font-size: 6vw;\n          font-weight: bold;\n          opacity: 0.1; }\n      calendar-page .calendar .day .day-diaries {\n        width: 100%;\n        height: 24%;\n        margin: 3% 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start; }\n        calendar-page .calendar .day .day-diaries .diary-item {\n          width: 2.1vw;\n          height: 2.1vw;\n          margin: 0 2%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          position: relative;\n          border-radius: 50%; }\n          calendar-page .calendar .day .day-diaries .diary-item img {\n            max-height: 80%;\n            max-width: 80%;\n            border-radius: 50%; }\n  calendar-page .pr, calendar-page .nx {\n    position: absolute;\n    font-size: 4vw;\n    font-weight: bold;\n    cursor: pointer;\n    top: 50%;\n    text-transform: uppercase; }\n  calendar-page .pr {\n    left: 0;\n    -webkit-transform: translate(-81%, -50%);\n            transform: translate(-81%, -50%); }\n  calendar-page .nx {\n    right: 0;\n    -webkit-transform: translate(65%, -50%);\n            transform: translate(65%, -50%); }\n  calendar-page .cols-week-6 {\n    height: calc(100%/6) !important; }\n\nhtml.tablet calendar-page, html.mobile calendar-page {\n  padding: 0 5%; }\n  html.tablet calendar-page .calendar-footer .changable-month > span, html.tablet calendar-page .calendar-footer .changable-year > span, html.mobile calendar-page .calendar-footer .changable-month > span, html.mobile calendar-page .calendar-footer .changable-year > span {\n    font-size: 4rem; }\n    @media screen and (max-width: 1000px) {\n      html.tablet calendar-page .calendar-footer .changable-month > span, html.tablet calendar-page .calendar-footer .changable-year > span, html.mobile calendar-page .calendar-footer .changable-month > span, html.mobile calendar-page .calendar-footer .changable-year > span {\n        font-size: 3.5rem; } }\n    @media screen and (max-width: 800px) {\n      html.tablet calendar-page .calendar-footer .changable-month > span, html.tablet calendar-page .calendar-footer .changable-year > span, html.mobile calendar-page .calendar-footer .changable-month > span, html.mobile calendar-page .calendar-footer .changable-year > span {\n        font-size: 3rem; } }\n    @media screen and (max-width: 600px) {\n      html.tablet calendar-page .calendar-footer .changable-month > span, html.tablet calendar-page .calendar-footer .changable-year > span, html.mobile calendar-page .calendar-footer .changable-month > span, html.mobile calendar-page .calendar-footer .changable-year > span {\n        font-size: 2rem; } }\n    @media screen and (max-width: 400px) {\n      html.tablet calendar-page .calendar-footer .changable-month > span, html.tablet calendar-page .calendar-footer .changable-year > span, html.mobile calendar-page .calendar-footer .changable-month > span, html.mobile calendar-page .calendar-footer .changable-year > span {\n        font-size: 1.7rem; } }\n  html.tablet calendar-page .mob-calendar-wrap, html.mobile calendar-page .mob-calendar-wrap {\n    width: 100%;\n    height: 85%; }\n    html.tablet calendar-page .mob-calendar-wrap .calendar-mob, html.mobile calendar-page .mob-calendar-wrap .calendar-mob {\n      width: 100%;\n      height: 50%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      html.tablet calendar-page .mob-calendar-wrap .calendar-mob ul, html.mobile calendar-page .mob-calendar-wrap .calendar-mob ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 16%; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob ul li, html.mobile calendar-page .mob-calendar-wrap .calendar-mob ul li {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end;\n          float: left;\n          font-size: 6rem;\n          font-weight: bold;\n          height: 100%;\n          width: calc(100%/7); }\n      html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks {\n        width: 100%;\n        height: 75%; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks .day, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks .day {\n          height: 20%;\n          width: calc(100%/7);\n          float: left;\n          display: inline-block;\n          border: 1px solid rgba(255, 255, 255, 0.2); }\n          html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks .day .day-number, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks .day .day-number {\n            width: 100%;\n            height: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: end;\n                -ms-flex-align: end;\n                    align-items: flex-end; }\n            html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks .day .day-number span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks .day .day-number span {\n              font-size: 3rem;\n              font-weight: bold;\n              opacity: 0.7; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks .active, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks .active {\n          background-color: #ffffff; }\n          html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks .active span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks .active span {\n            color: #666666; }\n      html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap, html.tablet calendar-page .mob-calendar-wrap .calendar-mob .day-diaries, html.tablet calendar-page .mob-calendar-wrap .calendar-mob .filters-wrap, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .day-diaries, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .filters-wrap {\n        position: relative;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: 100%;\n        height: 20%; }\n      html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span {\n        font-size: 4rem; }\n      html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb {\n        position: absolute;\n        font-size: 13rem;\n        font-weight: bold;\n        opacity: 0.2; }\n      html.tablet calendar-page .mob-calendar-wrap .calendar-mob .day-diaries, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .day-diaries {\n        margin: 10% 0; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item {\n          width: 11rem;\n          height: 11rem;\n          margin-left: 3.5%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          position: relative;\n          border-radius: 50%; }\n          html.tablet calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item img, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item img {\n            max-height: 80%;\n            max-width: 80%;\n            border-radius: 50%; }\n      html.tablet calendar-page .mob-calendar-wrap .calendar-mob .filters-wrap > .filter, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .filters-wrap > .filter {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 55%;\n        width: 15%; }\n      @media screen and (max-width: 1000px) {\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob ul > li, html.mobile calendar-page .mob-calendar-wrap .calendar-mob ul > li {\n          font-size: 5rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks > .week > .day > .day-number > span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks > .week > .day > .day-number > span {\n          font-size: 2.5rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span {\n          font-size: 3.5rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb {\n          font-size: 12rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item {\n          width: 8rem;\n          height: 8rem; } }\n      @media screen and (max-width: 800px) {\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob ul > li, html.mobile calendar-page .mob-calendar-wrap .calendar-mob ul > li {\n          font-size: 4rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks > .week > .day > .day-number > span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks > .week > .day > .day-number > span {\n          font-size: 2.1rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span {\n          font-size: 2.7rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb {\n          font-size: 10rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item {\n          width: 7rem;\n          height: 7rem; } }\n      @media screen and (max-width: 600px) {\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob ul > li, html.mobile calendar-page .mob-calendar-wrap .calendar-mob ul > li {\n          font-size: 3rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks > .week > .day > .day-number > span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks > .week > .day > .day-number > span {\n          font-size: 1.8rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span {\n          font-size: 2rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb {\n          font-size: 7rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item {\n          width: 6rem;\n          height: 6rem; } }\n      @media screen and (max-width: 400px) {\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob ul > li, html.mobile calendar-page .mob-calendar-wrap .calendar-mob ul > li {\n          font-size: 2rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .weeks > .week > .day > .day-number > span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .weeks > .week > .day > .day-number > span {\n          font-size: 1.5rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap span {\n          font-size: 1.7rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .date-wrap .date-numb {\n          font-size: 6rem; }\n        html.tablet calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item, html.mobile calendar-page .mob-calendar-wrap .calendar-mob .day-diaries .diary-item {\n          width: 5rem;\n          height: 5rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center, date .date-header-block .date-header-item {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, date, date .slider-wrap > .main-slider .time-item .time-item-wrap, date .slider-wrap > .main-slider .navig .navitems > .naw-wrap .calories-border, date .slider-wrap > .main-slider .navig .navitems > .naw-wrap .macros-border, date .slider-wrap > .main-slider .navig .navitems > .naw-wrap .micros-border {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100, date .date-header-block {\n  width: 100%;\n  position: absolute; }\n\ndate {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  date .date-header-block {\n    margin-top: 5%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: relative;\n    height: 18%; }\n    date .date-header-block span {\n      font-size: 10vh;\n      opacity: 0.1;\n      font-weight: bold; }\n    date .date-header-block .date-header-item {\n      z-index: 100;\n      position: absolute;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      date .date-header-block .date-header-item span {\n        font-weight: normal;\n        text-align: center;\n        font-size: 2vh;\n        opacity: 0.9; }\n      date .date-header-block .date-header-item .month-week-day {\n        text-align: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        date .date-header-block .date-header-item .month-week-day span {\n          text-transform: capitalize;\n          font-size: 1.5vh; }\n        date .date-header-block .date-header-item .month-week-day img {\n          margin: 0 0.5vh;\n          opacity: 0.5;\n          cursor: pointer;\n          max-height: 1.7vh;\n          max-width: 1.7vh;\n          -webkit-filter: invert(75%);\n                  filter: invert(75%); }\n  date .slider-wrap > .main-slider .addfood {\n    border: none;\n    -webkit-transform: translate(-50%, -400%);\n            transform: translate(-50%, -400%); }\n    date .slider-wrap > .main-slider .addfood img {\n      opacity: 0.3;\n      max-height: 100%;\n      max-width: 100%; }\n  date .slider-wrap > .main-slider .breakfast {\n    -webkit-transform: translate(-250%, 50%);\n            transform: translate(-250%, 50%); }\n  date .slider-wrap > .main-slider .lunch {\n    -webkit-transform: translate(-125%, 125%);\n            transform: translate(-125%, 125%); }\n  date .slider-wrap > .main-slider .dinner {\n    -webkit-transform: translate(25%, 125%);\n            transform: translate(25%, 125%); }\n  date .slider-wrap > .main-slider .snack {\n    -webkit-transform: translate(150%, 50%);\n            transform: translate(150%, 50%); }\n  date .slider-wrap > .main-slider .time-item {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s; }\n    date .slider-wrap > .main-slider .time-item .time-item-wrap {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      position: relative; }\n    date .slider-wrap > .main-slider .time-item .close-food {\n      position: absolute;\n      max-height: 30%;\n      max-width: 30%;\n      right: -50%; }\n  date .slider-wrap > .main-slider .navig .navitems > .naw-wrap {\n    border: 1px dotted #ffffff; }\n    date .slider-wrap > .main-slider .navig .navitems > .naw-wrap img {\n      max-height: 85%;\n      max-width: 85%; }\n    date .slider-wrap > .main-slider .navig .navitems > .naw-wrap .calories-border, date .slider-wrap > .main-slider .navig .navitems > .naw-wrap .macros-border, date .slider-wrap > .main-slider .navig .navitems > .naw-wrap .micros-border {\n      position: relative;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  date .slider-wrap > .main-slider .navig .selectedEl {\n    width: 25vh;\n    height: 25vh; }\n    date .slider-wrap > .main-slider .navig .selectedEl .naw-wrap {\n      border: none; }\n      date .slider-wrap > .main-slider .navig .selectedEl .naw-wrap img {\n        max-height: 95%;\n        max-width: 95%; }\n      date .slider-wrap > .main-slider .navig .selectedEl .naw-wrap .macros-border, date .slider-wrap > .main-slider .navig .selectedEl .naw-wrap .micros-border {\n        width: 90% !important;\n        height: 90% !important; }\n  date .bottom-inf {\n    width: 65%;\n    bottom: 13vh;\n    position: absolute;\n    z-index: 100; }\n    date .bottom-inf span {\n      position: absolute;\n      width: 100%;\n      top: -60%;\n      font-size: 3vh;\n      text-transform: capitalize;\n      text-align: center; }\n    date .bottom-inf .bottom-inf-wrap {\n      width: 100%;\n      height: 12vh;\n      overflow: hidden;\n      -webkit-transition: height 0.5s;\n      transition: height 0.5s; }\n    date .bottom-inf .open-inf {\n      height: 60vh; }\n    date .bottom-inf .bg-hide-screen {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 300; }\n\nhtml.tablet date .date-header-block, html.mobile date .date-header-block {\n  margin-top: 10%; }\n  html.tablet date .date-header-block span, html.mobile date .date-header-block span {\n    font-size: 10vh; }\n  html.tablet date .date-header-block .date-header-item span, html.mobile date .date-header-block .date-header-item span {\n    font-size: 2.8vh; }\n  html.tablet date .date-header-block .date-header-item .month-week-day span, html.mobile date .date-header-block .date-header-item .month-week-day span {\n    font-size: 2.3vh; }\n  html.tablet date .date-header-block .date-header-item .month-week-day img, html.mobile date .date-header-block .date-header-item .month-week-day img {\n    margin: 0 0.5vh;\n    max-height: 1.7vh;\n    max-width: 1.7vh; }\n\nhtml.tablet date .slider-wrap > .main-slider .addfood, html.mobile date .slider-wrap > .main-slider .addfood {\n  -webkit-transform: translate(-50%, -300%);\n          transform: translate(-50%, -300%); }\n\nhtml.tablet date .slider-wrap > .main-slider .lunch, html.mobile date .slider-wrap > .main-slider .lunch {\n  -webkit-transform: translate(-125%, 145%);\n          transform: translate(-125%, 145%); }\n\nhtml.tablet date .slider-wrap > .main-slider .dinner, html.mobile date .slider-wrap > .main-slider .dinner {\n  -webkit-transform: translate(25%, 145%);\n          transform: translate(25%, 145%); }\n\nhtml.tablet date .slider-wrap > .main-slider .navig .navitems .naw-wrap > img, html.mobile date .slider-wrap > .main-slider .navig .navitems .naw-wrap > img {\n  max-height: 70%;\n  max-width: 70%; }\n\nhtml.tablet date .slider-wrap > .main-slider .navig .selectedEl, html.mobile date .slider-wrap > .main-slider .navig .selectedEl {\n  width: 32rem;\n  height: 32rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet date .slider-wrap > .main-slider .navig .selectedEl, html.mobile date .slider-wrap > .main-slider .navig .selectedEl {\n      width: 28rem;\n      height: 28rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet date .slider-wrap > .main-slider .navig .selectedEl, html.mobile date .slider-wrap > .main-slider .navig .selectedEl {\n      width: 25rem;\n      height: 25rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet date .slider-wrap > .main-slider .navig .selectedEl, html.mobile date .slider-wrap > .main-slider .navig .selectedEl {\n      width: 20rem;\n      height: 20rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet date .slider-wrap > .main-slider .navig .selectedEl, html.mobile date .slider-wrap > .main-slider .navig .selectedEl {\n      width: 17rem;\n      height: 17rem; } }\n\nhtml.tablet date .bottom-inf, html.mobile date .bottom-inf {\n  width: 100%;\n  bottom: 8vh; }\n  html.tablet date .bottom-inf span, html.mobile date .bottom-inf span {\n    top: -12%;\n    font-size: 2.5vh; }\n  html.tablet date .bottom-inf .bottom-inf-wrap, html.mobile date .bottom-inf .bottom-inf-wrap {\n    width: 100%;\n    height: 18vh;\n    overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, diaries-select .diaries-select-item .diary-item a {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\ndiaries-select, selected-diary {\n  width: 100%;\n  height: 48vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\ndiaries-select .diaries-select-item {\n  width: 100%;\n  height: 25%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  diaries-select .diaries-select-item .diary-item {\n    margin: 0 2%;\n    width: 6vh;\n    height: 6vh;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer; }\n    diaries-select .diaries-select-item .diary-item a {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    diaries-select .diaries-select-item .diary-item img {\n      max-height: 100%;\n      max-width: 100%;\n      border-radius: 50%; }\n  diaries-select .diaries-select-item .title, diaries-select .diaries-select-item .diary-name {\n    font-size: 3vh;\n    opacity: 0.9; }\n  diaries-select .diaries-select-item .selected {\n    border: 1px dotted #ffffff;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n    diaries-select .diaries-select-item .selected img {\n      -webkit-transform: scale(0.9);\n              transform: scale(0.9); }\n\nhtml.tablet diaries-select, html.tablet selected-diary, html.mobile diaries-select, html.mobile selected-diary {\n  height: 97%;\n  position: absolute;\n  top: 6.5%;\n  padding: 5%; }\n\nhtml.tablet diaries-select .diaries-select-item, html.mobile diaries-select .diaries-select-item {\n  height: 20%; }\n  html.tablet diaries-select .diaries-select-item .title, html.tablet diaries-select .diaries-select-item .diary-name, html.mobile diaries-select .diaries-select-item .title, html.mobile diaries-select .diaries-select-item .diary-name {\n    font-size: 6rem; }\n    @media screen and (max-width: 1000px) {\n      html.tablet diaries-select .diaries-select-item .title, html.tablet diaries-select .diaries-select-item .diary-name, html.mobile diaries-select .diaries-select-item .title, html.mobile diaries-select .diaries-select-item .diary-name {\n        font-size: 5rem; } }\n    @media screen and (max-width: 800px) {\n      html.tablet diaries-select .diaries-select-item .title, html.tablet diaries-select .diaries-select-item .diary-name, html.mobile diaries-select .diaries-select-item .title, html.mobile diaries-select .diaries-select-item .diary-name {\n        font-size: 4rem; } }\n    @media screen and (max-width: 600px) {\n      html.tablet diaries-select .diaries-select-item .title, html.tablet diaries-select .diaries-select-item .diary-name, html.mobile diaries-select .diaries-select-item .title, html.mobile diaries-select .diaries-select-item .diary-name {\n        font-size: 3rem; } }\n    @media screen and (max-width: 400px) {\n      html.tablet diaries-select .diaries-select-item .title, html.tablet diaries-select .diaries-select-item .diary-name, html.mobile diaries-select .diaries-select-item .title, html.mobile diaries-select .diaries-select-item .diary-name {\n        font-size: 2.5rem; } }\n  html.tablet diaries-select .diaries-select-item .diary-item, html.mobile diaries-select .diaries-select-item .diary-item {\n    width: 14rem;\n    height: 14rem; }\n    @media screen and (max-width: 1000px) {\n      html.tablet diaries-select .diaries-select-item .diary-item, html.mobile diaries-select .diaries-select-item .diary-item {\n        width: 12rem;\n        height: 12rem; } }\n    @media screen and (max-width: 800px) {\n      html.tablet diaries-select .diaries-select-item .diary-item, html.mobile diaries-select .diaries-select-item .diary-item {\n        width: 8rem;\n        height: 8rem; } }\n    @media screen and (max-width: 600px) {\n      html.tablet diaries-select .diaries-select-item .diary-item, html.mobile diaries-select .diaries-select-item .diary-item {\n        width: 5.5rem;\n        height: 5.5rem; } }\n    @media screen and (max-width: 400px) {\n      html.tablet diaries-select .diaries-select-item .diary-item, html.mobile diaries-select .diaries-select-item .diary-item {\n        width: 4.5rem;\n        height: 4.5rem; } }\n  html.tablet diaries-select .diaries-select-item .selected, html.mobile diaries-select .diaries-select-item .selected {\n    border: 1px dotted #3ec14d;\n    -webkit-transform: initial;\n            transform: initial; }\n    html.tablet diaries-select .diaries-select-item .selected img, html.mobile diaries-select .diaries-select-item .selected img {\n      -webkit-transform: initial;\n              transform: initial; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, html.tablet diary .diary-wrap, html.mobile diary .diary-wrap {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\ndiary .search-label-wrap {\n  text-transform: capitalize; }\n\ndiary .res-block {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\ndiary .diary-wrap {\n  width: 100%;\n  height: 54%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  diary .diary-wrap .diary-title-item {\n    background-color: #ffffff;\n    color: #666666;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    diary .diary-wrap .diary-title-item .text-res-item {\n      width: 45%;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      font-size: 1.8vh; }\n\nhtml.tablet diary .diary-wrap, html.mobile diary .diary-wrap {\n  padding: 5% 0; }\n  html.tablet diary .diary-wrap .diary-title-item .text-res-item, html.mobile diary .diary-wrap .diary-title-item .text-res-item {\n    font-size: 4rem; }\n    @media screen and (max-width: 1000px) {\n      html.tablet diary .diary-wrap .diary-title-item .text-res-item, html.mobile diary .diary-wrap .diary-title-item .text-res-item {\n        font-size: 3rem; } }\n    @media screen and (max-width: 800px) {\n      html.tablet diary .diary-wrap .diary-title-item .text-res-item, html.mobile diary .diary-wrap .diary-title-item .text-res-item {\n        font-size: 2.5rem; } }\n    @media screen and (max-width: 600px) {\n      html.tablet diary .diary-wrap .diary-title-item .text-res-item, html.mobile diary .diary-wrap .diary-title-item .text-res-item {\n        font-size: 2rem; } }\n    @media screen and (max-width: 400px) {\n      html.tablet diary .diary-wrap .diary-title-item .text-res-item, html.mobile diary .diary-wrap .diary-title-item .text-res-item {\n        font-size: 1.7rem; } }\n  html.tablet diary .diary-wrap .item .title-nav, html.mobile diary .diary-wrap .item .title-nav {\n    font-size: 2.5vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center, selected-diary .select-value .info .photo span {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, selected-diary .select-value .height .change-height {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nselected-diary .select-title {\n  width: 100%;\n  height: 25%;\n  padding-top: 12.5%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3vh;\n  opacity: 0.9; }\n  selected-diary .select-title span {\n    text-align: center; }\n\nselected-diary .select-value {\n  height: 50%;\n  width: 100%; }\n  selected-diary .select-value .sel-diar-item {\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    width: 65%; }\n  selected-diary .select-value .input-wrap {\n    height: 45%;\n    width: 60%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    selected-diary .select-value .input-wrap span, selected-diary .select-value .input-wrap input {\n      width: 100%;\n      text-align: center;\n      font-size: 2vh;\n      text-transform: capitalize;\n      opacity: 0.9; }\n    selected-diary .select-value .input-wrap img {\n      max-width: 20%;\n      opacity: 0.5; }\n  selected-diary .select-value .info {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    selected-diary .select-value .info .photo, selected-diary .select-value .info form {\n      position: relative;\n      height: 10vh;\n      margin-top: 5%; }\n    selected-diary .select-value .info .photo {\n      width: 10vh;\n      cursor: pointer; }\n      selected-diary .select-value .info .photo span {\n        position: absolute;\n        width: 90%;\n        text-align: center;\n        text-transform: uppercase;\n        font-size: 1vh;\n        opacity: 0.9; }\n      selected-diary .select-value .info .photo img {\n        border-radius: 50%;\n        height: 100%;\n        max-width: 100%; }\n    selected-diary .select-value .info form {\n      width: 100%;\n      opacity: 0.7; }\n      selected-diary .select-value .info form input {\n        width: 100%;\n        height: 50%;\n        border-bottom: 1px solid #ffffff; }\n  selected-diary .select-value .age .input-wrap {\n    width: 20%; }\n    selected-diary .select-value .age .input-wrap img {\n      max-width: 60%; }\n  selected-diary .select-value .calories .input-wrap {\n    height: 55%; }\n  selected-diary .select-value .height .change-height {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    selected-diary .select-value .height .change-height .units-wrap {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: 100%;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      selected-diary .select-value .height .change-height .units-wrap input {\n        height: 70%;\n        width: 20%;\n        margin: 0 5%; }\n      selected-diary .select-value .height .change-height .units-wrap span {\n        width: auto;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        font-size: 1.5vh; }\n    selected-diary .select-value .height .change-height .units-wrap, selected-diary .select-value .height .change-height img, selected-diary .select-value .height .change-height input {\n      height: 33%; }\n    selected-diary .select-value .height .change-height img {\n      opacity: 0.7;\n      max-height: 20%; }\n\nselected-diary .item {\n  height: 12.5%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  selected-diary .item img {\n    max-height: 60%;\n    opacity: 0.7;\n    cursor: pointer; }\n  selected-diary .item .reg-navig {\n    height: 40%; }\n    selected-diary .item .reg-navig li {\n      position: relative; }\n      selected-diary .item .reg-navig li .done {\n        position: absolute;\n        left: 50%;\n        top: 150%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%);\n        width: 1.5vh;\n        height: 1.5vh;\n        background: url(\"/assets/resources/images/login/done.png\") 50% 50% no-repeat;\n        background-size: 100% 100%; }\n\nselected-diary .last-confirm {\n  margin-top: 12.5%; }\n\nhtml.tablet selected-diary .select-title, html.mobile selected-diary .select-title {\n  padding: 0;\n  font-size: 6rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet selected-diary .select-title, html.mobile selected-diary .select-title {\n      font-size: 5rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet selected-diary .select-title, html.mobile selected-diary .select-title {\n      font-size: 4rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet selected-diary .select-title, html.mobile selected-diary .select-title {\n      font-size: 3rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet selected-diary .select-title, html.mobile selected-diary .select-title {\n      font-size: 2.5rem; } }\n\nhtml.tablet selected-diary .select-value .info form, html.mobile selected-diary .select-value .info form {\n  height: 20vh; }\n\nhtml.tablet selected-diary .select-value .info .photo, html.mobile selected-diary .select-value .info .photo {\n  margin-top: 0;\n  height: 20vh;\n  width: 20vh; }\n  html.tablet selected-diary .select-value .info .photo span, html.mobile selected-diary .select-value .info .photo span {\n    font-size: 2.5rem; }\n    @media screen and (max-width: 1000px) {\n      html.tablet selected-diary .select-value .info .photo span, html.mobile selected-diary .select-value .info .photo span {\n        font-size: 2rem; } }\n    @media screen and (max-width: 800px) {\n      html.tablet selected-diary .select-value .info .photo span, html.mobile selected-diary .select-value .info .photo span {\n        font-size: 1.7rem; } }\n    @media screen and (max-width: 600px) {\n      html.tablet selected-diary .select-value .info .photo span, html.mobile selected-diary .select-value .info .photo span {\n        font-size: 1.5rem; } }\n    @media screen and (max-width: 400px) {\n      html.tablet selected-diary .select-value .info .photo span, html.mobile selected-diary .select-value .info .photo span {\n        font-size: 1.3rem; } }\n\nhtml.tablet selected-diary .select-value .sel-diar-item, html.mobile selected-diary .select-value .sel-diar-item {\n  width: 100%; }\n  html.tablet selected-diary .select-value .sel-diar-item input, html.tablet selected-diary .select-value .sel-diar-item span, html.mobile selected-diary .select-value .sel-diar-item input, html.mobile selected-diary .select-value .sel-diar-item span {\n    font-size: 4rem; }\n    @media screen and (max-width: 1000px) {\n      html.tablet selected-diary .select-value .sel-diar-item input, html.tablet selected-diary .select-value .sel-diar-item span, html.mobile selected-diary .select-value .sel-diar-item input, html.mobile selected-diary .select-value .sel-diar-item span {\n        font-size: 3rem; } }\n    @media screen and (max-width: 800px) {\n      html.tablet selected-diary .select-value .sel-diar-item input, html.tablet selected-diary .select-value .sel-diar-item span, html.mobile selected-diary .select-value .sel-diar-item input, html.mobile selected-diary .select-value .sel-diar-item span {\n        font-size: 2.5rem; } }\n    @media screen and (max-width: 600px) {\n      html.tablet selected-diary .select-value .sel-diar-item input, html.tablet selected-diary .select-value .sel-diar-item span, html.mobile selected-diary .select-value .sel-diar-item input, html.mobile selected-diary .select-value .sel-diar-item span {\n        font-size: 2rem; } }\n    @media screen and (max-width: 400px) {\n      html.tablet selected-diary .select-value .sel-diar-item input, html.tablet selected-diary .select-value .sel-diar-item span, html.mobile selected-diary .select-value .sel-diar-item input, html.mobile selected-diary .select-value .sel-diar-item span {\n        font-size: 1.7rem; } }\n\nhtml.tablet selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span, html.mobile selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span {\n  font-size: 3rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span, html.mobile selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span {\n      font-size: 2.5rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span, html.mobile selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span {\n      font-size: 2rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span, html.mobile selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span {\n      font-size: 1.7rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span, html.mobile selected-diary .select-value .height > .input-wrap > .change-height > .units-wrap > span {\n      font-size: 1.5rem; } }\n\nhtml.tablet selected-diary .item, html.mobile selected-diary .item {\n  margin-top: 10%; }\n  html.tablet selected-diary .item .reg-navig, html.mobile selected-diary .item .reg-navig {\n    height: 60%; }\n    html.tablet selected-diary .item .reg-navig li > .done, html.mobile selected-diary .item .reg-navig li > .done {\n      width: 3rem;\n      height: 3rem; }\n      @media screen and (max-width: 1000px) {\n        html.tablet selected-diary .item .reg-navig li > .done, html.mobile selected-diary .item .reg-navig li > .done {\n          width: 2.5rem;\n          height: 2.5rem; } }\n      @media screen and (max-width: 800px) {\n        html.tablet selected-diary .item .reg-navig li > .done, html.mobile selected-diary .item .reg-navig li > .done {\n          width: 2rem;\n          height: 2rem; } }\n      @media screen and (max-width: 600px) {\n        html.tablet selected-diary .item .reg-navig li > .done, html.mobile selected-diary .item .reg-navig li > .done {\n          width: 1.5rem;\n          height: 1.5rem; } }\n      @media screen and (max-width: 400px) {\n        html.tablet selected-diary .item .reg-navig li > .done, html.mobile selected-diary .item .reg-navig li > .done {\n          width: 1rem;\n          height: 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100 {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nfood {\n  width: 100%;\n  height: 12vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  overflow: hidden;\n  position: relative; }\n  food .time-food {\n    width: 100%;\n    height: 12vh; }\n    food .time-food .wrapper-food {\n      width: 100%;\n      height: 100%; }\n      food .time-food .wrapper-food .item {\n        padding: 0; }\n        food .time-food .wrapper-food .item img {\n          -webkit-filter: invert(100%);\n                  filter: invert(100%);\n          max-height: 40%;\n          max-width: 40%; }\n        food .time-food .wrapper-food .item a > img {\n          max-height: 100%;\n          max-width: 100%; }\n  food .item {\n    width: 50%;\n    float: left;\n    background-color: #ffffff;\n    color: #666666; }\n  food .title-item {\n    background-color: #ffffff;\n    color: #666666; }\n    food .title-item .text-res-item {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n    food .title-item .second-block-title, food .title-item .text-res-item {\n      font-size: 2vh;\n      width: 50%; }\n    food .title-item .addfood {\n      color: #3ec14d;\n      cursor: pointer; }\n\nhtml.tablet food, html.mobile food {\n  height: 100vh;\n  padding: 5%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  overflow: scroll; }\n  html.tablet food .time-food, html.mobile food .time-food {\n    height: auto;\n    margin-bottom: 5%; }\n  html.tablet food .item, html.mobile food .item {\n    width: 100%; }\n  html.tablet food .title-item, html.mobile food .title-item {\n    margin-bottom: 5%; }\n    html.tablet food .title-item .addfood, html.mobile food .title-item .addfood {\n      font-size: 1.5vh !important; }\n  html.tablet food .wrapper-food > .item, html.mobile food .wrapper-food > .item {\n    background-color: transparent;\n    color: #ffffff;\n    width: 100%; }\n    html.tablet food .wrapper-food > .item img, html.mobile food .wrapper-food > .item img {\n      -webkit-filter: invert(0);\n              filter: invert(0); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "main-footer {\n  position: absolute;\n  width: 100%;\n  bottom: 2%;\n  z-index: 10;\n  padding: 0 2%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  main-footer a, main-footer .email {\n    width: 5%;\n    max-width: 30px;\n    max-height: 30px;\n    min-width: 15px;\n    min-height: 15px;\n    display: inline-block;\n    margin-right: 3%; }\n    main-footer a img, main-footer .email img {\n      border: 1px dotted rgba(255, 255, 255, 0.5);\n      border-radius: 50%; }\n  main-footer .social-footer-wrap, main-footer .email-footer-wrap {\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  main-footer .email-footer-wrap {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    main-footer .email-footer-wrap .email {\n      cursor: pointer;\n      position: relative;\n      margin-right: 0; }\n      main-footer .email-footer-wrap .email span {\n        position: absolute;\n        right: 140%;\n        top: 50%;\n        opacity: 0;\n        color: #ffffff;\n        cursor: default;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%);\n        font-size: 1.2vh;\n        -webkit-transition: opacity .5s;\n        transition: opacity .5s; }\n      main-footer .email-footer-wrap .email:hover span {\n        opacity: 0.7; }\n\nhtml.tablet main-footer, html.mobile main-footer {\n  padding: 0 4%; }\n  html.tablet main-footer a, html.mobile main-footer a {\n    max-width: 50px;\n    max-height: 50px;\n    width: 12% !important; }\n  html.tablet main-footer .social-footer-wrap > a, html.mobile main-footer .social-footer-wrap > a {\n    margin-right: 8%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "main-header {\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  top: 2%;\n  padding: 0 2%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  main-header a {\n    width: 5%;\n    max-width: 30px;\n    max-height: 30px;\n    min-width: 15px;\n    min-height: 15px;\n    display: inline-block; }\n  main-header .header-logo, main-header .header-auth {\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  main-header .header-auth {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    main-header .header-auth a {\n      margin-left: 3%; }\n\nhtml.tablet main-header, html.mobile main-header {\n  padding: 0 4%; }\n  html.tablet main-header a, html.mobile main-header a {\n    max-width: 50px;\n    max-height: 50px; }\n  html.tablet main-header .header-auth > a, html.mobile main-header .header-auth > a {\n    margin-left: 8%;\n    width: 12% !important; }\n  html.tablet main-header .header-logo > a, html.mobile main-header .header-logo > a {\n    width: 9% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, history {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nhistory {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  history .item .title-nav {\n    font-size: 1.8vh; }\n  history .item .text-res-item {\n    width: 45%; }\n  history .diary-title-item {\n    border-right: 1px solid red; }\n  history .scroll-wrap-wrap {\n    width: 100%;\n    height: calc(100% - 6vh); }\n\nhtml.tablet history, html.mobile history {\n  padding: 5%;\n  height: 93%; }\n  html.tablet history .diary-title-item, html.mobile history .diary-title-item {\n    border-right: none;\n    background-color: #ffffff;\n    color: #666666;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    html.tablet history .diary-title-item .title-nav, html.mobile history .diary-title-item .title-nav {\n      width: 45%;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      font-size: 4rem; }\n      @media screen and (max-width: 1000px) {\n        html.tablet history .diary-title-item .title-nav, html.mobile history .diary-title-item .title-nav {\n          font-size: 3rem; } }\n      @media screen and (max-width: 800px) {\n        html.tablet history .diary-title-item .title-nav, html.mobile history .diary-title-item .title-nav {\n          font-size: 2.5rem; } }\n      @media screen and (max-width: 600px) {\n        html.tablet history .diary-title-item .title-nav, html.mobile history .diary-title-item .title-nav {\n          font-size: 2rem; } }\n      @media screen and (max-width: 400px) {\n        html.tablet history .diary-title-item .title-nav, html.mobile history .diary-title-item .title-nav {\n          font-size: 1.7rem; } }\n  html.tablet history .scroll-wrap-wrap, html.mobile history .scroll-wrap-wrap {\n    padding-top: 5%;\n    height: calc(100% - 6vh); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center, home .inputContainer, home .slider-wrap .naw-wrap .achiev-img-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, home .inputContainer input, home .slider-wrap .naw-wrap .achiev-img-text {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nhome {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  home .logo-wrap {\n    width: 100%;\n    height: 40%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    home .logo-wrap img {\n      margin-top: 8vh;\n      max-width: 33vw;\n      max-height: 17vh; }\n    home .logo-wrap .tag {\n      width: 70%;\n      height: 4rem;\n      margin-top: 5vh;\n      margin-bottom: 3vh;\n      text-align: center;\n      font-size: 2.5vw;\n      color: #ffffff; }\n    home .logo-wrap span {\n      width: 75%;\n      display: none;\n      opacity: 0;\n      -webkit-transition: opacity 1s ease-in-out;\n      transition: opacity 1s ease-in-out;\n      font-size: 1.3vw;\n      color: #ffffff;\n      text-align: center; }\n    home .logo-wrap .active {\n      display: block;\n      opacity: 0.7; }\n  home .inputContainer {\n    position: absolute;\n    z-index: 100;\n    width: 50%;\n    height: 5%;\n    display: block;\n    -webkit-animation: opac-up 0.5s;\n            animation: opac-up 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n    @media screen and (max-width: 800px) {\n      home .inputContainer {\n        width: 60%;\n        height: 7%; } }\n    home .inputContainer input {\n      background: url(\"/assets/resources/images/home/search.png\") 1% 50% no-repeat;\n      background-size: 4%;\n      background-color: #ffffff;\n      text-indent: 6%;\n      font-size: 1.5rem;\n      color: #666666; }\n      @media screen and (max-width: 1000px) {\n        home .inputContainer input {\n          font-size: 1.3rem; } }\n    home .inputContainer .vert-line-home {\n      position: absolute;\n      left: 50%;\n      top: 100%;\n      width: 1px;\n      background-color: #ffffff;\n      height: 4vw;\n      opacity: 0.7; }\n  home .slider-wrap .naw-wrap .achiev-img-text {\n    position: absolute;\n    font-size: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    home .slider-wrap .naw-wrap .achiev-img-text span {\n      text-align: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      height: 40%;\n      width: 70%;\n      font-size: 80%;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n    home .slider-wrap .naw-wrap .achiev-img-text .achiev-numb {\n      display: block;\n      font-size: 120%; }\n  home .slider-wrap .naw-wrap .img-wrap {\n    background-color: #ffffff; }\n  home .slider-wrap .achiev-text {\n    top: 120%;\n    position: absolute;\n    width: 14vw;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n    home .slider-wrap .achiev-text h1 {\n      text-transform: uppercase;\n      color: #ffffff;\n      font-size: 1vw;\n      margin: 0;\n      text-align: center; }\n    home .slider-wrap .achiev-text .text {\n      margin-top: 10%;\n      line-height: 1.2;\n      color: #ffffff;\n      font-size: 0.8vw;\n      opacity: 0.4; }\n    @media screen and (max-width: 1000px) {\n      home .slider-wrap .achiev-text .text {\n        font-size: 1vw; } }\n  home .hidden-search {\n    -webkit-animation: opac-down 0.5s;\n            animation: opac-down 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\nhtml.tablet home .logo-wrap img, html.mobile home .logo-wrap img {\n  max-width: 45vw;\n  margin-top: 10%; }\n  @media screen and (max-width: 600px) {\n    html.tablet home .logo-wrap img, html.mobile home .logo-wrap img {\n      margin-top: 16%; } }\n\nhtml.tablet home .logo-wrap .tag, html.mobile home .logo-wrap .tag {\n  font-size: 4.5vw;\n  margin: 5vw 0; }\n  @media screen and (max-width: 600px) {\n    html.tablet home .logo-wrap .tag, html.mobile home .logo-wrap .tag {\n      font-size: 5vw;\n      height: 3rem;\n      margin: 8vw 0; } }\n  @media screen and (max-width: 400px) {\n    html.tablet home .logo-wrap .tag, html.mobile home .logo-wrap .tag {\n      height: 2rem;\n      margin: 10vw 0; } }\n\nhtml.tablet home .logo-wrap span, html.mobile home .logo-wrap span {\n  font-size: 2.5vw; }\n  @media screen and (max-width: 600px) {\n    html.tablet home .logo-wrap span, html.mobile home .logo-wrap span {\n      font-size: 3vw; } }\n\nhtml.tablet home .inputContainer, html.mobile home .inputContainer {\n  width: 60vw;\n  height: 6rem; }\n  html.tablet home .inputContainer input, html.mobile home .inputContainer input {\n    font-size: 1.5rem; }\n  @media screen and (max-width: 800px) {\n    html.tablet home .inputContainer, html.mobile home .inputContainer {\n      height: 5rem; }\n      html.tablet home .inputContainer input, html.mobile home .inputContainer input {\n        font-size: 1.3rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet home .inputContainer, html.mobile home .inputContainer {\n      width: 80vw;\n      height: 4rem; }\n      html.tablet home .inputContainer input, html.mobile home .inputContainer input {\n        background-size: 6%;\n        text-indent: 8%; } }\n  @media screen and (max-width: 400px) {\n    html.tablet home .inputContainer, html.mobile home .inputContainer {\n      height: 3rem; }\n      html.tablet home .inputContainer input, html.mobile home .inputContainer input {\n        font-size: 1rem; } }\n  html.tablet home .inputContainer .vert-line-home, html.mobile home .inputContainer .vert-line-home {\n    height: 20vw; }\n\nhtml.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text {\n  top: 150%;\n  width: 75vw; }\n  html.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1 {\n    font-size: 2.7rem; }\n  html.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text .text, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text .text {\n    margin-top: 3%;\n    font-size: 2rem;\n    text-align: center; }\n  @media screen and (max-width: 1000px) {\n    html.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text .text, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text .text {\n      font-size: 2rem; }\n    html.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1 {\n      font-size: 2.3rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text .text, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text .text {\n      font-size: 1.5rem; }\n    html.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1 {\n      font-size: 1.8rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text .text, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text .text {\n      font-size: 1rem; }\n    html.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1 {\n      font-size: 1.3rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1, html.mobile home .slider-wrap > .main-slider > .navig > .navitems > .achiev-text h1 {\n      font-size: 1.3rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, login, signup {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nlogin, signup {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  login .go-to-register, signup .go-to-register {\n    position: absolute;\n    width: 25%;\n    bottom: 15%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    text-align: center;\n    color: #ffffff;\n    font-size: 1.3vh;\n    opacity: 0.7; }\n    login .go-to-register a, signup .go-to-register a {\n      color: #327038;\n      text-decoration: underline; }\n  login .slider-wrap > .main-slider > .navig > .form-type, signup .slider-wrap > .main-slider > .navig > .form-type {\n    border-radius: 0;\n    width: 35vh;\n    height: 25vh; }\n    login .slider-wrap > .main-slider > .navig > .form-type .log-in-form, signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer;\n      height: 100%;\n      width: 90%;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      login .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in, signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        login .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in .fb-log-in-line, signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in .fb-log-in-line {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          width: 100%; }\n          login .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in .fb-log-in-line h5, signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in .fb-log-in-line h5 {\n            opacity: 0.8;\n            margin: 0 5%; }\n          login .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in .fb-log-in-line .half-line, signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in .fb-log-in-line .half-line {\n            width: 45%;\n            height: 1px;\n            background-color: #ffffff;\n            opacity: 0.1; }\n        login .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in .log-in-img-wrap, signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form .facebook-log-in .log-in-img-wrap {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-bottom: 3vh;\n          width: 6vh;\n          height: 6vh;\n          border-radius: 50%;\n          border: 1px dotted #327038; }\n      login .slider-wrap > .main-slider > .navig > .form-type .log-in-form form, signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form form {\n        width: 100%; }\n        login .slider-wrap > .main-slider > .navig > .form-type .log-in-form form input, signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form form input {\n          width: 100%;\n          height: 3.5vh;\n          margin-top: 1vh;\n          border-bottom: 1px solid #ffffff;\n          font-size: 1.2rem;\n          color: #ffffff;\n          opacity: 0.8; }\n      login .slider-wrap > .main-slider > .navig > .form-type .log-in-form img, signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form img {\n        max-height: 70%;\n        max-width: 70%;\n        border-radius: 50%; }\n  login .time-item, signup .time-item {\n    position: absolute;\n    top: 110%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    background-color: #ffffff;\n    color: #000000; }\n    login .time-item span, signup .time-item span {\n      font-size: 1vh; }\n  login .disabled, signup .disabled {\n    pointer-events: none; }\n\nhtml.tablet login .go-to-register, html.tablet signup .go-to-register, html.mobile login .go-to-register, html.mobile signup .go-to-register {\n  width: 70%; }\n\nhtml.tablet login .slider-wrap > .main-slider > .navig > .form-type, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type, html.mobile login .slider-wrap > .main-slider > .navig > .form-type, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type {\n  width: 40rem;\n  height: 40rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet login .slider-wrap > .main-slider > .navig > .form-type, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type, html.mobile login .slider-wrap > .main-slider > .navig > .form-type, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type {\n      width: 30rem;\n      height: 30rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet login .slider-wrap > .main-slider > .navig > .form-type, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type, html.mobile login .slider-wrap > .main-slider > .navig > .form-type, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type {\n      width: 27rem;\n      height: 27rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet login .slider-wrap > .main-slider > .navig > .form-type, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type, html.mobile login .slider-wrap > .main-slider > .navig > .form-type, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type {\n      width: 25rem;\n      height: 25rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet login .slider-wrap > .main-slider > .navig > .form-type, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type, html.mobile login .slider-wrap > .main-slider > .navig > .form-type, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type {\n      width: 20rem;\n      height: 20rem; } }\n  html.tablet login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap {\n    width: 9rem;\n    height: 9rem; }\n    @media screen and (max-width: 1000px) {\n      html.tablet login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap {\n        width: 7.5rem;\n        height: 7.5rem; } }\n    @media screen and (max-width: 800px) {\n      html.tablet login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap {\n        width: 6.5rem;\n        height: 6.5rem; } }\n    @media screen and (max-width: 600px) {\n      html.tablet login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap {\n        width: 5.5rem;\n        height: 5.5rem; } }\n    @media screen and (max-width: 400px) {\n      html.tablet login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.tablet signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile login .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap, html.mobile signup .slider-wrap > .main-slider > .navig > .form-type .log-in-form > .facebook-log-in > .log-in-img-wrap {\n        width: 4.5rem;\n        height: 4.5rem; } }\n\nhtml.tablet login .reg-navig, html.tablet signup .reg-navig, html.mobile login .reg-navig, html.mobile signup .reg-navig {\n  height: 3%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100 {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nnutritional {\n  width: 100%;\n  height: 60vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n  z-index: 500; }\n  nutritional .res-block {\n    position: relative;\n    z-index: 5;\n    width: 50%;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    overflow: hidden; }\n    nutritional .res-block .nutritional-content {\n      width: 100%;\n      height: calc(100% - 6vh);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; }\n    nutritional .res-block .item .text-res-item, nutritional .res-block .item .N-W {\n      position: relative;\n      z-index: 3; }\n    nutritional .res-block .item .text-res-item {\n      opacity: 0.8;\n      width: 45%; }\n    nutritional .res-block .item .N-W {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      font-size: 1.5vh; }\n      nutritional .res-block .item .N-W .img-wrapper {\n        width: 2.5vh;\n        height: 2.5vh;\n        border: 2px solid #ffffff;\n        border-radius: 50%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        text-transform: uppercase; }\n        nutritional .res-block .item .N-W .img-wrapper span {\n          font-size: 1.5vh;\n          position: inherit; }\n    nutritional .res-block .item .percent-item {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n    nutritional .res-block .item-title {\n      cursor: pointer;\n      background-color: #ffffff; }\n      nutritional .res-block .item-title .text-res-item {\n        width: 50%;\n        font-size: 2vh; }\n      nutritional .res-block .item-title .percent-item {\n        color: #000000; }\n  nutritional .first-block {\n    border-right: 1px solid #666666; }\n  nutritional .bg-blured {\n    width: 110%;\n    height: 110%;\n    position: absolute;\n    top: -5%;\n    left: -5%;\n    background-color: rgba(255, 255, 255, 0.5); }\n\nhtml.tablet nutritional, html.mobile nutritional {\n  height: 100vh;\n  padding: 0 3%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  html.tablet nutritional .res-block, html.mobile nutritional .res-block {\n    padding: 0;\n    margin-bottom: 3vh;\n    height: 64vh; }\n    html.tablet nutritional .res-block .item-title, html.mobile nutritional .res-block .item-title {\n      margin-bottom: 3vh; }\n  html.tablet nutritional .first-block, html.mobile nutritional .first-block {\n    height: 27vh;\n    margin-top: 3vh;\n    border-right: none; }\n    html.tablet nutritional .first-block .nutritional-content, html.mobile nutritional .first-block .nutritional-content {\n      height: auto; }\n  html.tablet nutritional .item, html.mobile nutritional .item {\n    height: 6vh; }\n    html.tablet nutritional .item .text-res-item, html.mobile nutritional .item .text-res-item {\n      font-size: 2vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100 {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nsearch-diary {\n  height: 88.9%;\n  width: 100%;\n  color: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  search-diary .choose-task {\n    width: 100%;\n    height: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    search-diary .choose-task .choosen-content-item {\n      width: 100%;\n      height: 33.3%;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      search-diary .choose-task .choosen-content-item .item-text {\n        height: 50%;\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        background: 50% 50% no-repeat;\n        background-size: auto 50%;\n        opacity: 0.8; }\n      search-diary .choose-task .choosen-content-item .items-wrap {\n        height: 50%;\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin: 0 auto; }\n        search-diary .choose-task .choosen-content-item .items-wrap .diary-item > img {\n          max-height: 6vh;\n          max-width: 6vh;\n          border-radius: 50%; }\n        search-diary .choose-task .choosen-content-item .items-wrap .time-item {\n          margin: 0 2%; }\n        search-diary .choose-task .choosen-content-item .items-wrap .date-item {\n          width: 15%;\n          height: 100%;\n          margin: 0 2%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n          search-diary .choose-task .choosen-content-item .items-wrap .date-item span {\n            opacity: 0.8;\n            font-size: 1.3vh; }\n          search-diary .choose-task .choosen-content-item .items-wrap .date-item img {\n            opacity: 0.5;\n            max-width: 40%;\n            cursor: pointer; }\n          search-diary .choose-task .choosen-content-item .items-wrap .date-item input {\n            width: 100%;\n            text-align: center; }\n    search-diary .choose-task .diary .selected {\n      border: 1px dotted #ffffff;\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2); }\n      search-diary .choose-task .diary .selected img {\n        -webkit-transform: scale(0.8);\n                transform: scale(0.8); }\n\nhtml.tablet search-diary, html.mobile search-diary {\n  height: 91%;\n  position: absolute;\n  top: 9%;\n  padding: 0 5% 5%; }\n  html.tablet search-diary .choosen-content-item .item-text, html.mobile search-diary .choosen-content-item .item-text {\n    background-size: auto 30%;\n    font-size: 2.3vh; }\n  html.tablet search-diary .choosen-content-item .items-wrap, html.mobile search-diary .choosen-content-item .items-wrap {\n    width: 100%; }\n    html.tablet search-diary .choosen-content-item .items-wrap .diary-item > img, html.mobile search-diary .choosen-content-item .items-wrap .diary-item > img {\n      max-height: 100%;\n      max-width: 100%; }\n    html.tablet search-diary .choosen-content-item .items-wrap .date-item, html.mobile search-diary .choosen-content-item .items-wrap .date-item {\n      height: 75%; }\n      html.tablet search-diary .choosen-content-item .items-wrap .date-item span, html.mobile search-diary .choosen-content-item .items-wrap .date-item span {\n        font-size: 1.8vh; }\n  html.tablet search-diary .diary .selected, html.mobile search-diary .diary .selected {\n    border-color: #3ec14d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, result-details .res-block .res-det-img-wrap .res-det-img, result-details .res-block .second-block-ingrid .ingrid-count {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nresult-details {\n  width: 100%;\n  height: 54%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #666666; }\n  result-details .res-block .res-det-img-wrap {\n    height: 48vh;\n    width: 100%; }\n    result-details .res-block .res-det-img-wrap .res-det-img img {\n      margin-left: 3.3%;\n      margin-top: 3.3%;\n      width: 45%;\n      float: left; }\n  result-details .res-block .scroll-wrap-wrap, result-details .res-block .scroll-wrap {\n    width: 100%;\n    height: 48vh; }\n  result-details .res-block .res-det-nav, result-details .res-block .second-block-nav, result-details .res-block .second-block-sections-title {\n    overflow: hidden;\n    background-color: #ffffff; }\n    result-details .res-block .res-det-nav .text-res-item, result-details .res-block .second-block-nav .text-res-item, result-details .res-block .second-block-sections-title .text-res-item {\n      width: 60%; }\n  result-details .res-block .res-det-nav {\n    border-right: 1px solid red; }\n    result-details .res-block .res-det-nav input {\n      width: 100%; }\n    result-details .res-block .res-det-nav .text-res-item {\n      position: relative; }\n      result-details .res-block .res-det-nav .text-res-item span {\n        left: 0;\n        top: 70%;\n        position: absolute;\n        font-size: 70%;\n        color: red;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s;\n        transition: opacity 0.5s; }\n  result-details .res-block .second-block-nav {\n    overflow: visible; }\n    result-details .res-block .second-block-nav .N-W {\n      font-weight: bold; }\n      result-details .res-block .second-block-nav .N-W .faq-units {\n        position: absolute;\n        width: 37%;\n        height: 9vh;\n        left: 108%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        cursor: default;\n        opacity: 0;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        background-color: #ffffff;\n        -webkit-transition: opacity 0.4s;\n        transition: opacity 0.4s;\n        color: #666666;\n        font-size: 1.3vh; }\n        result-details .res-block .second-block-nav .N-W .faq-units .faq-units-content {\n          width: 75%;\n          height: 65%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: start;\n              -ms-flex-pack: start;\n                  justify-content: flex-start;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n          result-details .res-block .second-block-nav .N-W .faq-units .faq-units-content .units {\n            position: relative;\n            z-index: 5;\n            height: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between; }\n          result-details .res-block .second-block-nav .N-W .faq-units .faq-units-content .line {\n            width: 1px;\n            height: 100%;\n            margin: 0 10%;\n            background-color: #666666; }\n          result-details .res-block .second-block-nav .N-W .faq-units .faq-units-content .corner {\n            width: 2vh;\n            height: 2vh;\n            background-color: #ffffff;\n            position: absolute;\n            left: -0.3vw;\n            top: 40%;\n            -webkit-transform: rotate(45deg);\n                    transform: rotate(45deg); }\n      result-details .res-block .second-block-nav .N-W .units-hover {\n        cursor: pointer; }\n        result-details .res-block .second-block-nav .N-W .units-hover:hover ~ .faq-units {\n          opacity: 1; }\n    result-details .res-block .second-block-nav .second-block-title {\n      width: 45%;\n      font-size: 1.5vh; }\n    result-details .res-block .second-block-nav .text-res-item {\n      width: 25%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      text-decoration: none;\n      color: #3ec14d; }\n      result-details .res-block .second-block-nav .text-res-item input {\n        width: 100%; }\n  result-details .res-block .second-block-ingrid {\n    color: #ffffff; }\n    result-details .res-block .second-block-ingrid .text-res-item {\n      width: 60%; }\n    result-details .res-block .second-block-ingrid .N-W, result-details .res-block .second-block-ingrid .text-res-item {\n      position: relative;\n      z-index: 2; }\n    result-details .res-block .second-block-ingrid .ingrid-count {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      result-details .res-block .second-block-ingrid .ingrid-count img {\n        margin: 0;\n        max-width: 30%; }\n      result-details .res-block .second-block-ingrid .ingrid-count input {\n        width: 90%;\n        height: 45%;\n        text-align: center; }\n  result-details .res-block .calories .text-res-item {\n    width: 70%; }\n  result-details .res-block .calories .cal-numb {\n    width: 20%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  result-details .confirmed-save {\n    background: url(\"/assets/resources/images/search/save-to-diary-conf.png\") 50% 50% no-repeat;\n    background-size: auto 50%; }\n  result-details .go-back-black, result-details .save-black {\n    -webkit-filter: grayscale(1);\n            filter: grayscale(1);\n    -webkit-transition: -webkit-filter 0.5s;\n    transition: -webkit-filter 0.5s;\n    transition: filter 0.5s;\n    transition: filter 0.5s, -webkit-filter 0.5s; }\n    result-details .go-back-black:hover, result-details .save-black:hover {\n      -webkit-filter: grayscale(0);\n              filter: grayscale(0); }\n  result-details .grayscale-1 {\n    -webkit-filter: grayscale(1);\n            filter: grayscale(1); }\n  result-details .grayscale-0 {\n    -webkit-filter: grayscale(0);\n            filter: grayscale(0); }\n\nhtml.tablet result-details, html.mobile result-details {\n  display: block;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  overflow-y: scroll; }\n  html.tablet result-details .res-block, html.mobile result-details .res-block {\n    margin-top: 5%;\n    position: inherit;\n    height: auto; }\n    html.tablet result-details .res-block .res-det-nav, html.mobile result-details .res-block .res-det-nav {\n      border-right: none; }\n    html.tablet result-details .res-block .res-det-img-wrap, html.mobile result-details .res-block .res-det-img-wrap {\n      height: auto; }\n      html.tablet result-details .res-block .res-det-img-wrap .res-det-img, html.mobile result-details .res-block .res-det-img-wrap .res-det-img {\n        height: auto; }\n        html.tablet result-details .res-block .res-det-img-wrap .res-det-img img, html.mobile result-details .res-block .res-det-img-wrap .res-det-img img {\n          margin: 5% 0 0 0;\n          width: 100%;\n          float: none; }\n    html.tablet result-details .res-block .second-block-nav, html.mobile result-details .res-block .second-block-nav {\n      margin-bottom: 5%; }\n      html.tablet result-details .res-block .second-block-nav .text-res-item, html.mobile result-details .res-block .second-block-nav .text-res-item {\n        width: 40%; }\n      html.tablet result-details .res-block .second-block-nav .second-block-title, html.mobile result-details .res-block .second-block-nav .second-block-title {\n        width: 30%; }\n      html.tablet result-details .res-block .second-block-nav .second-block-title, html.tablet result-details .res-block .second-block-nav .N-W, html.mobile result-details .res-block .second-block-nav .second-block-title, html.mobile result-details .res-block .second-block-nav .N-W {\n        font-size: 4rem; }\n        @media screen and (max-width: 1000px) {\n          html.tablet result-details .res-block .second-block-nav .second-block-title, html.tablet result-details .res-block .second-block-nav .N-W, html.mobile result-details .res-block .second-block-nav .second-block-title, html.mobile result-details .res-block .second-block-nav .N-W {\n            font-size: 3rem; } }\n        @media screen and (max-width: 800px) {\n          html.tablet result-details .res-block .second-block-nav .second-block-title, html.tablet result-details .res-block .second-block-nav .N-W, html.mobile result-details .res-block .second-block-nav .second-block-title, html.mobile result-details .res-block .second-block-nav .N-W {\n            font-size: 2.5rem; } }\n        @media screen and (max-width: 600px) {\n          html.tablet result-details .res-block .second-block-nav .second-block-title, html.tablet result-details .res-block .second-block-nav .N-W, html.mobile result-details .res-block .second-block-nav .second-block-title, html.mobile result-details .res-block .second-block-nav .N-W {\n            font-size: 2rem; } }\n        @media screen and (max-width: 400px) {\n          html.tablet result-details .res-block .second-block-nav .second-block-title, html.tablet result-details .res-block .second-block-nav .N-W, html.mobile result-details .res-block .second-block-nav .second-block-title, html.mobile result-details .res-block .second-block-nav .N-W {\n            font-size: 1.7rem; } }\n    html.tablet result-details .res-block .second-block-sections-title, html.mobile result-details .res-block .second-block-sections-title {\n      margin: 5% 0; }\n    html.tablet result-details .res-block .scroll-wrap-wrap, html.mobile result-details .res-block .scroll-wrap-wrap {\n      margin-bottom: 5%; }\n    html.tablet result-details .res-block .scroll-wrap-wrap, html.tablet result-details .res-block .scroll-wrap, html.mobile result-details .res-block .scroll-wrap-wrap, html.mobile result-details .res-block .scroll-wrap {\n      height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, search-results .res-block .results-not-empty, search-results .first-block .search-result-list {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nsearch-results {\n  width: 100%;\n  height: 54%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  search-results .item {\n    cursor: pointer; }\n    search-results .item .text-res-item {\n      width: 38%;\n      opacity: 0.8;\n      overflow: hidden; }\n    search-results .item:hover {\n      background-color: rgba(2, 141, 15, 0.2); }\n    search-results .item .item-name {\n      width: 30%;\n      margin-right: 2%; }\n  search-results .but {\n    position: absolute;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg); }\n  search-results .res-block .results-block {\n    width: 70%;\n    margin-bottom: 5%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    search-results .res-block .results-block .img-wrap-search {\n      height: 15vh;\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      search-results .res-block .results-block .img-wrap-search img {\n        cursor: pointer;\n        width: 13vh;\n        height: 13vh; }\n  search-results .res-block .res-numb {\n    width: 100%;\n    height: 15vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    search-results .res-block .res-numb h1 {\n      font-size: 10vh;\n      margin: 0; }\n    search-results .res-block .res-numb span {\n      font-size: 3vh; }\n  search-results .res-block .span-text {\n    width: 100%;\n    text-align: center;\n    font-size: 1.5vh;\n    opacity: 0.8;\n    margin-top: 10%; }\n  search-results .res-block .results-not-empty {\n    margin-bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    search-results .res-block .results-not-empty .search-tips {\n      text-align: center;\n      width: 80%;\n      height: 35%; }\n      search-results .res-block .results-not-empty .search-tips h1 {\n        font-size: 2.5rem; }\n      search-results .res-block .results-not-empty .search-tips span {\n        font-size: 1.3rem;\n        opacity: 0.5; }\n      @media screen and (max-width: 1000px) {\n        search-results .res-block .results-not-empty .search-tips h1 {\n          font-size: 1.9rem; }\n        search-results .res-block .results-not-empty .search-tips span {\n          font-size: 1rem; } }\n    search-results .res-block .results-not-empty .res-numb {\n      height: 35%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n  search-results .res-block .faq-line {\n    background-color: #ffffff;\n    margin: 10% 0;\n    color: #666666; }\n    search-results .res-block .faq-line .text-res-item {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      font-weight: bold;\n      width: 70%;\n      -webkit-transition: opacity 1s;\n      transition: opacity 1s; }\n    search-results .res-block .faq-line .N-W {\n      -webkit-transition: -webkit-transform 1s;\n      transition: -webkit-transform 1s;\n      transition: transform 1s;\n      transition: transform 1s, -webkit-transform 1s;\n      position: relative; }\n      search-results .res-block .faq-line .N-W .faq-text {\n        position: absolute;\n        left: 100%;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%);\n        opacity: 0;\n        -webkit-transition: opacity 1s;\n        transition: opacity 1s; }\n      search-results .res-block .faq-line .N-W:hover .faq-text {\n        opacity: 1; }\n      search-results .res-block .faq-line .N-W:hover ~ .N-W {\n        -webkit-transform: translateX(700%);\n                transform: translateX(700%); }\n      search-results .res-block .faq-line .N-W:hover ~ .text-res-item {\n        opacity: 0; }\n  search-results .first-block {\n    border-right: 2px solid rgba(255, 255, 255, 0.15); }\n    search-results .first-block .search-result-list {\n      margin: 0;\n      padding: 0;\n      list-style-type: none;\n      overflow-y: scroll; }\n\nhtml.tablet search-results, html.mobile search-results {\n  height: 86%;\n  margin-bottom: 5%; }\n  html.tablet search-results .res-block .faq-line, html.mobile search-results .res-block .faq-line {\n    margin: 5% 0 0 0; }\n    html.tablet search-results .res-block .faq-line .N-W > img, html.mobile search-results .res-block .faq-line .N-W > img {\n      max-height: 60%;\n      max-width: 60%; }\n  html.tablet search-results .res-block .results-block, html.mobile search-results .res-block .results-block {\n    margin-bottom: 10%; }\n    html.tablet search-results .res-block .results-block .span-text, html.mobile search-results .res-block .results-block .span-text {\n      margin: 5% 0 10% 0;\n      font-size: 3vw; }\n    html.tablet search-results .res-block .results-block .img-wrap-search, html.mobile search-results .res-block .results-block .img-wrap-search {\n      height: 25vw; }\n      html.tablet search-results .res-block .results-block .img-wrap-search img, html.mobile search-results .res-block .results-block .img-wrap-search img {\n        width: 25vw;\n        height: 25vw; }\n  html.tablet search-results .res-block .search-result-list, html.mobile search-results .res-block .search-result-list {\n    height: 90%; }\n  html.tablet search-results .first-block, html.mobile search-results .first-block {\n    border-right: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, search, diary, html.tablet search .search-label-wrap input, html.mobile search .search-label-wrap input {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nsearch, diary {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  search .slider-wrap, diary .slider-wrap {\n    height: 24%; }\n    search .slider-wrap .main-slider > .navig > .navitems > .naw-wrap, diary .slider-wrap .main-slider > .navig > .navitems > .naw-wrap {\n      border: 1px solid rgba(255, 255, 255, 0.5); }\n      search .slider-wrap .main-slider > .navig > .navitems > .naw-wrap img, diary .slider-wrap .main-slider > .navig > .navitems > .naw-wrap img {\n        height: 50%;\n        border-radius: 0; }\n  search .search-label-wrap, diary .search-label-wrap {\n    margin: 7% 0 5% 0;\n    width: 30vh;\n    font-size: 4vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: relative;\n    z-index: 100; }\n    search .search-label-wrap input::-webkit-input-placeholder, diary .search-label-wrap input::-webkit-input-placeholder {\n      font-size: 2vh; }\n\nsearch .search-label-wrap {\n  padding: 0; }\n  search .search-label-wrap input {\n    background: url(\"/assets/resources/images/search/search.png\") 3.5% 50% no-repeat;\n    background-size: 12%;\n    text-indent: 15%;\n    color: #ffffff;\n    font-size: 2.5vw;\n    width: 100%;\n    text-align: center; }\n  search .search-label-wrap img {\n    max-height: 60%; }\n\nhtml.tablet search, html.mobile search {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  html.tablet search .search-label-wrap, html.mobile search .search-label-wrap {\n    margin: 5%;\n    width: 90%;\n    opacity: 1;\n    background-color: #ffffff; }\n    html.tablet search .search-label-wrap input, html.mobile search .search-label-wrap input {\n      background: url(\"/assets/resources/images/home/search.png\") 3.5% 50% no-repeat;\n      -webkit-filter: opacity(75%);\n              filter: opacity(75%);\n      background-size: 7%;\n      background-color: #ffffff;\n      text-indent: 15%;\n      font-size: 60%;\n      color: #9c9a9a;\n      text-align: start; }\n    html.tablet search .search-label-wrap input::-webkit-input-placeholder, html.mobile search .search-label-wrap input::-webkit-input-placeholder {\n      font-size: 60%; }\n    html.tablet search .search-label-wrap img, html.mobile search .search-label-wrap img {\n      max-height: 45%;\n      position: absolute;\n      right: 3.5%;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      -webkit-filter: invert(75%);\n              filter: invert(75%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, side-menu, side-menu .main-menu .side-header .side-header-content {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\nside-menu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 550;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.4); }\n  side-menu .main-menu {\n    width: 88vw;\n    height: 100%;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    background-color: #0d1a0e; }\n    side-menu .main-menu .side-body, side-menu .main-menu .side-footer, side-menu .main-menu .side-header {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 5%; }\n      side-menu .main-menu .side-body img, side-menu .main-menu .side-footer img, side-menu .main-menu .side-header img {\n        max-height: 38%;\n        max-width: 38%;\n        margin-right: 5%;\n        cursor: pointer; }\n      side-menu .main-menu .side-body span, side-menu .main-menu .side-footer span, side-menu .main-menu .side-header span {\n        text-transform: capitalize;\n        font-size: 2.3vh; }\n    side-menu .main-menu .side-header {\n      padding: 0;\n      width: 100%;\n      height: 12vw;\n      position: relative;\n      background-color: #0f2110;\n      overflow: hidden; }\n      side-menu .main-menu .side-header .side-header-content {\n        position: absolute;\n        padding: 0 5%;\n        left: 0;\n        top: 0;\n        z-index: 2; }\n        side-menu .main-menu .side-header .side-header-content .side-header-top, side-menu .main-menu .side-header .side-header-content .side-header-bottom {\n          width: 100%;\n          height: 12vw;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n          side-menu .main-menu .side-header .side-header-content .side-header-top .img-wrap-left, side-menu .main-menu .side-header .side-header-content .side-header-top .img-wrap-right, side-menu .main-menu .side-header .side-header-content .side-header-bottom .img-wrap-left, side-menu .main-menu .side-header .side-header-content .side-header-bottom .img-wrap-right {\n            height: 100%;\n            width: 50%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n            side-menu .main-menu .side-header .side-header-content .side-header-top .img-wrap-left img, side-menu .main-menu .side-header .side-header-content .side-header-top .img-wrap-right img, side-menu .main-menu .side-header .side-header-content .side-header-bottom .img-wrap-left img, side-menu .main-menu .side-header .side-header-content .side-header-bottom .img-wrap-right img {\n              max-width: 100%;\n              max-height: 40%; }\n          side-menu .main-menu .side-header .side-header-content .side-header-top .img-wrap-left, side-menu .main-menu .side-header .side-header-content .side-header-bottom .img-wrap-left {\n            -webkit-box-pack: start;\n                -ms-flex-pack: start;\n                    justify-content: flex-start; }\n            side-menu .main-menu .side-header .side-header-content .side-header-top .img-wrap-left img, side-menu .main-menu .side-header .side-header-content .side-header-bottom .img-wrap-left img {\n              margin-right: 10%; }\n          side-menu .main-menu .side-header .side-header-content .side-header-top .img-wrap-right, side-menu .main-menu .side-header .side-header-content .side-header-bottom .img-wrap-right {\n            -webkit-box-pack: end;\n                -ms-flex-pack: end;\n                    justify-content: flex-end; }\n            side-menu .main-menu .side-header .side-header-content .side-header-top .img-wrap-right img, side-menu .main-menu .side-header .side-header-content .side-header-bottom .img-wrap-right img {\n              margin-right: 0; }\n        side-menu .main-menu .side-header .side-header-content .side-header-body {\n          width: 100%;\n          height: calc(100% - 24vw);\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center; }\n          side-menu .main-menu .side-header .side-header-content .side-header-body img {\n            max-height: 50%;\n            border-radius: 50%; }\n          side-menu .main-menu .side-header .side-header-content .side-header-body span {\n            font-size: 3vh;\n            margin-top: 10%; }\n      side-menu .main-menu .side-header .side-header-avatar {\n        position: absolute;\n        height: 110%;\n        width: 110%;\n        left: -5%;\n        top: -5%;\n        z-index: 1;\n        -webkit-filter: blur(5px);\n                filter: blur(5px);\n        background-size: cover !important; }\n    side-menu .main-menu .side-body {\n      height: calc(100% - 12vw);\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      padding-top: 5%; }\n      side-menu .main-menu .side-body .side-body-item {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: 100%;\n        height: 7vh; }\n    side-menu .main-menu .loggedin {\n      height: 50%; }\n    side-menu .main-menu .side-footer {\n      height: 9vh;\n      position: absolute;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      bottom: 0;\n      left: 0; }\n      side-menu .main-menu .side-footer .loggin, side-menu .main-menu .side-footer .signup {\n        width: 50%;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        side-menu .main-menu .side-footer .loggin span, side-menu .main-menu .side-footer .signup span {\n          font-size: 1.8vh; }\n      side-menu .main-menu .side-footer .signup {\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n        side-menu .main-menu .side-footer .signup img {\n          margin-left: 10%;\n          margin-right: 0; }\n      side-menu .main-menu .side-footer .loggin {\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start; }\n        side-menu .main-menu .side-footer .loggin img {\n          margin-right: 10%; }\n  side-menu .close-btn {\n    width: 12vw;\n    height: 12vw;\n    background: #3ec14d url(\"/assets/resources/images/search/delete.png\") 50% 50% no-repeat;\n    background-size: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@keyframes opac-down {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -100; } }\n\n@-webkit-keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opac-up {\n  0% {\n    opacity: 0;\n    z-index: 100; }\n  100% {\n    opacity: 1; } }\n\n.position-center {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.w-h-100, app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .change-height {\n  width: 100%;\n  height: 100%; }\n\n.posa-w-100 {\n  width: 100%;\n  position: absolute; }\n\napp-root > .app-wrap > signup .reg-navig {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  bottom: 13%;\n  width: 30.5%;\n  height: 3%; }\n  app-root > .app-wrap > signup .reg-navig li {\n    width: 13.7%; }\n\napp-root > .app-wrap > signup .slider-wrap {\n  height: 60%; }\n  app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap {\n    border: 1px dotted #ffffff; }\n    app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .change-height {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .change-height .units-wrap {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        width: 100%; }\n        app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .change-height .units-wrap input {\n          height: 100%;\n          width: 20%;\n          margin: 0 5%; }\n        app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .change-height .units-wrap span {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 1.5vh; }\n      app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .change-height .units-wrap, app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .change-height img, app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .change-height input {\n        height: 20%; }\n      app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .change-height img {\n        opacity: 0.7; }\n    app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .item-label {\n      font-size: 1.2vh; }\n    app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .input-wrap {\n      height: 100%;\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .input-wrap span, app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .input-wrap input {\n        font-size: 2vh; }\n      app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .input-wrap input {\n        width: 100%;\n        text-align: center; }\n      app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .input-wrap img {\n        height: auto;\n        max-height: 30%;\n        max-width: 30%;\n        opacity: 0.5; }\n      app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .input-wrap .age-input-wrap {\n        width: 80%;\n        height: 80%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .input-wrap .age-input-wrap .age-input {\n          height: 100%;\n          width: 33%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -ms-flex-pack: distribute;\n              justify-content: space-around;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n          app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .naw-wrap .input-wrap .age-input-wrap .age-input img {\n            max-width: 80%; }\n  app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .element-active {\n    border: 1px dotted #327038;\n    background-image: url(\"/assets/resources/images/login/done.png\") !important; }\n    app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .element-active .item-label {\n      position: absolute;\n      bottom: 110%; }\n    app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .navitems .element-active .item-value {\n      position: absolute;\n      top: 110%;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      width: 300%;\n      text-align: center; }\n  app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .form-type {\n    height: 23vh; }\n  app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .calories {\n    width: 0;\n    height: 0;\n    opacity: 0; }\n  app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .scale-x-2 {\n    height: 14vw;\n    width: 14vw;\n    opacity: 1; }\n  app-root > .app-wrap > signup .slider-wrap .main-slider > .navig .nav-item-label {\n    position: absolute;\n    bottom: 105%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    width: 500%;\n    text-align: center;\n    color: #ffffff;\n    font-size: 3vh;\n    opacity: 0.8;\n    text-transform: initial; }\n\nhtml.tablet signup .reg-navig, html.mobile signup .reg-navig {\n  width: 90%; }\n\nhtml.tablet signup .slider-wrap > .main-slider > .navig .nav-item-label, html.mobile signup .slider-wrap > .main-slider > .navig .nav-item-label {\n  font-size: 3rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .nav-item-label, html.mobile signup .slider-wrap > .main-slider > .navig .nav-item-label {\n      font-size: 2.7rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .nav-item-label, html.mobile signup .slider-wrap > .main-slider > .navig .nav-item-label {\n      font-size: 2.5rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .nav-item-label, html.mobile signup .slider-wrap > .main-slider > .navig .nav-item-label {\n      font-size: 2.3rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .nav-item-label, html.mobile signup .slider-wrap > .main-slider > .navig .nav-item-label {\n      font-size: 2rem; } }\n\nhtml.tablet signup .slider-wrap > .main-slider > .navig .calories, html.mobile signup .slider-wrap > .main-slider > .navig .calories {\n  width: 0;\n  height: 0;\n  opacity: 0; }\n\nhtml.tablet signup .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile signup .slider-wrap > .main-slider > .navig .scale-x-2 {\n  width: 30rem;\n  height: 30rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile signup .slider-wrap > .main-slider > .navig .scale-x-2 {\n      width: 27rem;\n      height: 27rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile signup .slider-wrap > .main-slider > .navig .scale-x-2 {\n      width: 23rem;\n      height: 23rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile signup .slider-wrap > .main-slider > .navig .scale-x-2 {\n      width: 20rem;\n      height: 20rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .scale-x-2, html.mobile signup .slider-wrap > .main-slider > .navig .scale-x-2 {\n      width: 17rem;\n      height: 17rem; } }\n\nhtml.tablet signup .slider-wrap > .main-slider > .navig .form-type, html.mobile signup .slider-wrap > .main-slider > .navig .form-type {\n  height: 35rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .form-type, html.mobile signup .slider-wrap > .main-slider > .navig .form-type {\n      height: 25rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .form-type, html.mobile signup .slider-wrap > .main-slider > .navig .form-type {\n      height: 22rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .form-type, html.mobile signup .slider-wrap > .main-slider > .navig .form-type {\n      height: 18rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .form-type, html.mobile signup .slider-wrap > .main-slider > .navig .form-type {\n      height: 15rem; } }\n\nhtml.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span {\n  font-size: 1.5rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span {\n      font-size: 1.3rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span {\n      font-size: 1.2rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span {\n      font-size: 1.1rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-label, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .item-value, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .change-height > .units-wrap > span {\n      font-size: 1rem; } }\n\nhtml.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input {\n  font-size: 2.5rem; }\n  @media screen and (max-width: 1000px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input {\n      font-size: 2.2rem; } }\n  @media screen and (max-width: 800px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input {\n      font-size: 1.9rem; } }\n  @media screen and (max-width: 600px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input {\n      font-size: 1.6rem; } }\n  @media screen and (max-width: 400px) {\n    html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.tablet signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > input, html.mobile signup .slider-wrap > .main-slider > .navig .navitems > .naw-wrap .input-wrap > .change-height > input {\n      font-size: 1.3rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrap\">\n  <canvas id=\"cvs-slider\" [ngStyle]=\"{'margin-top': appData.sliderPosition.state}\" #slider [class.sliderInvisible]=\"!sliderVis\" (window:resize)=\"onResize($event)\"></canvas>\n  <main-header [hidden]=\"!footHeadVis\"></main-header>\n  <router-outlet></router-outlet>\n  <main-footer [hidden]=\"!footHeadVis\" [class.side-menu-open]=\"openMenu === 'in'\"></main-footer>\n  <side-menu [@slideInOut]=\"openMenu\"></side-menu>\n  <div class=\"btn-side-mnu\" (click)=\"sideMenuOpen()\" [class.hide-btn]=\"openMenu === 'in'\"></div>\n</div>\n"

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-header\" *ngIf=\"!isMobile\">\n  <div class=\"calendar-nav\" (click)=\"moveBack()\">\n    <img src=\"./assets/resources/images/search/remove.png\" alt=\"\" >\n  </div>\n</div>\n\n<span class=\"pr\" (click)=\"changeMonth(-1)\" *ngIf=\"!isMobile\">previous</span>\n<span class=\"nx\" (click)=\"changeMonth(1)\" *ngIf=\"!isMobile\">next</span>\n\n<div class=\"calendar\" *ngIf=\"!isMobile\">\n  <div class=\"day\" [class.cols-week-6]=\"monthArr.length > 35\" *ngFor=\"let day of monthArr\"  [routerLink]=\"['/date', day.timeStamp]\">\n    <div class=\"week-month\">\n      <img  src=\"./assets/resources/images/calendar/week-white.png\" alt=\"\" *ngIf=\"day.day == 0\">\n      <img  src=\"./assets/resources/images/calendar/month-white.png\" alt=\"\" *ngIf=\"day.date == lastDateOfMonth\">\n    </div>\n    <div class=\"day-number\">\n      <div class=\"week-day\">\n        {{daysOfWeek[day.day]}}\n      </div>\n      <span>{{day.date}}</span>\n    </div>\n    <div class=\"day-diaries\">\n      <div class=\"diary-item\" *ngFor=\"let diary of diaryArr\">\n        <div class=\"svg-wrap\">\n          <svg viewBox=\"0,0,108,108\">\n            <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"4\" [attr.d]=\"day[diary._id]\"/>\n          </svg>\n        </div>\n        <div class=\"img\" [style.background-image]=\"'url(' + diary.img + ')'\"></div>\n      </div>\n      <div class=\"diary-item diary-add\" style=\"filter: opacity(50%);\" *ngIf=\"diaryArr.length < 5\" [routerLink]=\"['/profile']\">\n        <img src=\"./assets/resources/images/search/add.png\" alt=\"\" >\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"mob-calendar-wrap\" *ngIf=\"isMobile\">\n  <div class=\"calendar-mob\" >\n    <ul>\n      <li class=\"days\">Mo</li>\n      <li class=\"days\">Tu</li>\n      <li class=\"days\">We</li>\n      <li class=\"days\">Th</li>\n      <li class=\"days\">Fr</li>\n      <li class=\"days\">Sa</li>\n      <li class=\"days\">Su</li>\n    </ul>\n    <div class=\"weeks\">\n      <div class=\"day\" [class.cols-week-6]=\"monthArr.length > 35\" [class.active]=\"selectedDay === day\" *ngFor=\"let day of monthArr\"  (click)=\"selectDay(day)\">\n        <div class=\"day-number\">\n          <span>{{day.date}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"calendar-mob\" >\n\n    <div class=\"date-wrap\">\n      <div class=\"date-numb\">\n        {{selectedDay.date}}\n      </div>\n      <span>Diaries</span>\n    </div>\n\n    <div class=\"day-diaries\">\n      <div class=\"diary-item\" *ngFor=\"let diary of diaryArr\"  [routerLink]=\"['/date', selectedDay.timeStamp]\">\n        <div class=\"svg-wrap\">\n          <svg viewBox=\"0,0,108,108\">\n            <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"4\" [attr.d]=\"selectedDay[diary._id]\"/>\n          </svg>\n        </div>\n        <div class=\"img\" [style.background-image]=\"'url(' + diary.img + ')'\"></div>\n      </div>\n      <div class=\"diary-item diary-add\" *ngIf=\"diaryArr.length < 5\" [routerLink]=\"['/profile']\">\n        <img src=\"./assets/resources/images/search/add.png\" alt=\"\" >\n      </div>\n    </div>\n\n    <div class=\"filters-wrap\">\n      <div class=\"filter\" >\n        <img src=\"./assets/resources/images/calendar/month-white.png\" alt=\"\" [hidden]=\"monthFilter\" (click)=\"monthFilter = !monthFilter; weekFilter = false;\">\n        <img src=\"./assets/resources/images/calendar/month-green.png\" alt=\"\" [hidden]=\"!monthFilter\" (click)=\"monthFilter = !monthFilter\">\n      </div>\n      <div class=\"filter\" >\n        <img src=\"./assets/resources/images/calendar/week-white.png\" alt=\"\" [hidden]=\"weekFilter\" (click)=\"weekFilter = !weekFilter; monthFilter = false;\">\n        <img src=\"./assets/resources/images/calendar/week-green.png\" alt=\"\" [hidden]=\"!weekFilter\" (click)=\"weekFilter = !weekFilter\">\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"calendar-footer\" [class.footer-to-top]=\"isMobile\">\n  <div class=\"changable-month\">\n    <div class=\"img-wrap\" (click)=\"changeMonth(-1)\">\n      <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" >\n    </div>\n    <span>{{months[month]}}</span>\n    <div class=\"img-wrap\" (click)=\"changeMonth(1)\">\n      <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" >\n    </div>\n  </div>\n  <div class=\"changable-year\" >\n    <div class=\"img-wrap\" (click)=\"changeYear(-1)\">\n      <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" >\n    </div>\n    <span>{{year}}</span>\n    <div class=\"img-wrap\" (click)=\"changeYear(1)\">\n      <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" >\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-header\">\n  <div class=\"calendar-nav\" >\n    <img src=\"./assets/resources/images/calendar/month-white.png\" alt=\"\" [hidden]=\"monthFilter\" (click)=\"monthFilter = !monthFilter; weekFilter = false;\">\n    <img src=\"./assets/resources/images/calendar/month-green.png\" alt=\"\" [hidden]=\"!monthFilter\" (click)=\"monthFilter = !monthFilter\">\n  </div>\n  <div class=\"calendar-nav\" (click)=\"moveBack()\" *ngIf=\"!isMobile\">\n    <img src=\"./assets/resources/images/search/remove.png\" alt=\"\" >\n  </div>\n  <div class=\"calendar-nav\" >\n    <img src=\"./assets/resources/images/calendar/week-white.png\" alt=\"\" [hidden]=\"weekFilter\" (click)=\"weekFilter = !weekFilter; monthFilter = false;\">\n    <img src=\"./assets/resources/images/calendar/week-green.png\" alt=\"\" [hidden]=\"!weekFilter\" (click)=\"weekFilter = !weekFilter\">\n  </div>\n</div>\n\n<div class=\"date-header-block\">\n  <div class=\"date-header-item\">\n    <div class=\"month-week-day\">\n      <span [hidden]=\"weekFilter || monthFilter\">Monday</span>\n      <span [hidden]=\"!weekFilter\">Weekly</span>\n      <img src=\"./assets/resources/images/diary/arr-down-black.png\" style=\"transform: rotate(90deg)\" alt=\"\" [hidden]=\"!monthFilter\" (click)=\"changeTime(-1)\">\n      <span [hidden]=\"!monthFilter\" >september</span>\n      <img src=\"./assets/resources/images/diary/arr-down-black.png\" style=\"transform: rotate(-90deg)\" alt=\"\" [hidden]=\"!monthFilter\" (click)=\"changeTime(1)\">\n    </div>\n    <span class=\"name\">John Snow</span>\n  </div>\n  <span class=\"background-text\" [hidden]=\"weekFilter || monthFilter\">19</span>\n  <span class=\"background-text\" [hidden]=\"!weekFilter\">19-25</span>\n  <span class=\"background-text\" [hidden]=\"!monthFilter\" style=\"font-size: 8vh; height: 70%;\">september</span>\n</div>\n\n<div class=\"slider-wrap\" (window:resize)=\"onResize($event)\">\n  <div class=\"main-slider\">\n\n    <div class=\"time-item-wrap\" [hidden]=\"!selectedElement\">\n      <div class=\"time-item addfood\" (click)=\"moveSearchView()\">\n        <img src=\"./assets/resources/images/search/add.png\" alt=\"\">\n        <span>add food</span>\n      </div>\n      <div class=\"time-item breakfast\" [class.time-selected]=\"pointsTimeItems.selectedTime === 1\" [style.transform]=\"pointsTimeItems.breakfast.point\" >\n        <div class=\"time-item-wrap\" (click)=\"selectTime(1)\">\n          <img src=\"./assets/resources/images/search/breakfast-green.png\" alt=\"\" >\n          <span>breakfast</span>\n        </div>\n        <img class=\"close-food\" src=\"./assets/resources/images/search/delete.png\" alt=\"\" [hidden]=\"pointsTimeItems.selectedTime !== 1\" (click)=\"selectTime(0)\">\n      </div>\n      <div class=\"time-item dinner\" [class.time-selected]=\"pointsTimeItems.selectedTime === 2\" [style.transform]=\"pointsTimeItems.dinner.point\" >\n        <div class=\"time-item-wrap\" (click)=\"selectTime(2)\">\n          <img src=\"./assets/resources/images/search/dinner-green.png\" alt=\"\"  >\n          <span>dinner</span>\n        </div>\n        <img class=\"close-food\" src=\"./assets/resources/images/search/delete.png\" alt=\"\" [hidden]=\"pointsTimeItems.selectedTime !== 2\" (click)=\"selectTime(0)\">\n      </div>\n      <div class=\"time-item lunch\" [class.time-selected]=\"pointsTimeItems.selectedTime === 3\" [style.transform]=\"pointsTimeItems.lunch.point\" >\n        <div class=\"time-item-wrap\" (click)=\"selectTime(3)\">\n          <img src=\"./assets/resources/images/search/lunch-green.png\" alt=\"\"  >\n          <span>lunch</span>\n        </div>\n        <img class=\"close-food\" src=\"./assets/resources/images/search/delete.png\" alt=\"\" [hidden]=\"pointsTimeItems.selectedTime !== 3\" (click)=\"selectTime(0)\">\n      </div>\n      <div class=\"time-item snack\" [class.time-selected]=\"pointsTimeItems.selectedTime === 4\" [style.transform]=\"pointsTimeItems.snack.point\" >\n        <div class=\"time-item-wrap\" (click)=\"selectTime(4)\">\n          <img src=\"./assets/resources/images/search/snack-green.png\" alt=\"\"  >\n          <span>snack</span>\n        </div>\n        <img class=\"close-food\" src=\"./assets/resources/images/search/delete.png\" alt=\"\" [hidden]=\"pointsTimeItems.selectedTime !== 4\" (click)=\"selectTime(0)\">\n      </div>\n    </div>\n\n    <div class=\"slider-left-btn\" *ngIf=\"!isMobile\">\n      <img src=\"./assets/resources/images/search/go-back-green.png\" alt=\"\" (click)=\"changeTime(-1)\">\n    </div>\n    <div class=\"slider-right-btn\" *ngIf=\"!isMobile\">\n      <img src=\"./assets/resources/images/search/go-back-green.png\" alt=\"\" (click)=\"changeTime(1)\">\n    </div>\n\n    <div class=\"navig\" #navig>\n      <div #diary4 class=\"navitems\" [class.selectedEl]=\"selectedElement === diary4\" (click)=\"moveItems(diary4)\">\n        <div class=\"naw-wrap\" >\n          <div class=\"svg-wrap\" [hidden]=\"selectedElement === diary4\">\n            <svg viewBox=\"0,0,108,108\" >\n              <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"4\" [attr.d]=\"days[0].LineCalories\"/>\n            </svg>\n          </div>\n          <div class=\"calories-border\">\n            <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary4\">\n              <svg viewBox=\"0,0,106,106\" >\n                <path id=\"arc1\" fill=\"none\" stroke=\"#3a8845\" stroke-width=\"2\" [attr.d]=\"days[0].LineCalories\"/>\n              </svg>\n            </div>\n            <div class=\"macros-border\">\n              <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary4\">\n                <svg viewBox=\"0,0,106,106\" >\n                  <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"2\" [attr.d]=\"days[0].LineMacro\"/>\n                </svg>\n              </div>\n              <div class=\"micros-border\">\n                <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary4\">\n                  <svg viewBox=\"0,0,106,106\" >\n                    <path id=\"arc1\" fill=\"none\" stroke=\"#3ec14d\" stroke-width=\"2\" [attr.d]=\"days[0].LineMicro\"/>\n                  </svg>\n                </div>\n                <div class=\"img\" [style.background-image]=\"'url(' + (diaryArr[3] ? diaryArr[3].img : nullDiary.img) + ')'\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div #diary3 class=\"navitems\" [class.selectedEl]=\"selectedElement == diary3\" (click)=\"moveItems(diary3)\">\n        <div class=\"naw-wrap\" >\n          <div class=\"svg-wrap\" [hidden]=\"selectedElement === diary3\">\n            <svg viewBox=\"0,0,108,108\" >\n              <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"4\" [attr.d]=\"days[0].LineCalories\"/>\n            </svg>\n          </div>\n          <div class=\"calories-border\">\n            <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary3\">\n              <svg viewBox=\"0,0,106,106\" >\n                <path id=\"arc1\" fill=\"none\" stroke=\"#3a8845\" stroke-width=\"2\" [attr.d]=\"days[0].LineCalories\"/>\n              </svg>\n            </div>\n            <div class=\"macros-border\">\n              <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary3\">\n                <svg viewBox=\"0,0,106,106\" >\n                  <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"2\" [attr.d]=\"days[0].LineMacro\"/>\n                </svg>\n              </div>\n              <div class=\"micros-border\">\n                <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary3\">\n                  <svg viewBox=\"0,0,106,106\" >\n                    <path id=\"arc1\" fill=\"none\" stroke=\"#3ec14d\" stroke-width=\"2\" [attr.d]=\"days[0].LineMicro\"/>\n                  </svg>\n                </div>\n                <div class=\"img\" [style.background-image]=\"'url(' + (diaryArr[2] ? diaryArr[2].img : nullDiary.img) + ')'\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div #diary1 class=\"navitems\" [class.selectedEl]=\"selectedElement == diary1\" (click)=\"moveItems(diary1)\">\n        <div class=\"naw-wrap\" >\n          <div class=\"svg-wrap\" [hidden]=\"selectedElement === diary1\">\n            <svg viewBox=\"0,0,108,108\" >\n              <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"4\" [attr.d]=\"days[0].LineCalories\"/>\n            </svg>\n          </div>\n          <div class=\"calories-border\">\n            <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary1\">\n              <svg viewBox=\"0,0,106,106\" >\n                <path id=\"arc1\" fill=\"none\" stroke=\"#3a8845\" stroke-width=\"2\" [attr.d]=\"days[0].LineCalories\"/>\n              </svg>\n            </div>\n            <div class=\"macros-border\">\n              <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary1\">\n                <svg viewBox=\"0,0,106,106\" >\n                  <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"2\" [attr.d]=\"days[0].LineMacro\"/>\n                </svg>\n              </div>\n              <div class=\"micros-border\">\n                <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary1\">\n                  <svg viewBox=\"0,0,106,106\" >\n                    <path id=\"arc1\" fill=\"none\" stroke=\"#3ec14d\" stroke-width=\"2\" [attr.d]=\"days[0].LineMicro\"/>\n                  </svg>\n                </div>\n                <div class=\"img\" [style.background-image]=\"'url(' + (diaryArr[0] ? diaryArr[0].img : nullDiary.img) + ')'\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div #diary2 class=\"navitems\" [class.selectedEl]=\"selectedElement == diary2\" (click)=\"moveItems(diary2)\">\n        <div class=\"naw-wrap\" >\n          <div class=\"svg-wrap\" [hidden]=\"selectedElement === diary2\">\n            <svg viewBox=\"0,0,108,108\" >\n              <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"4\" [attr.d]=\"days[0].LineCalories\"/>\n            </svg>\n          </div>\n          <div class=\"calories-border\">\n            <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary2\">\n              <svg viewBox=\"0,0,106,106\" >\n                <path id=\"arc1\" fill=\"none\" stroke=\"#3a8845\" stroke-width=\"2\" [attr.d]=\"days[0].LineCalories\"/>\n              </svg>\n            </div>\n            <div class=\"macros-border\">\n              <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary2\">\n                <svg viewBox=\"0,0,106,106\" >\n                  <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"2\" [attr.d]=\"days[0].LineMacro\"/>\n                </svg>\n              </div>\n              <div class=\"micros-border\">\n                <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary2\">\n                  <svg viewBox=\"0,0,106,106\" >\n                    <path id=\"arc1\" fill=\"none\" stroke=\"#3ec14d\" stroke-width=\"2\" [attr.d]=\"days[0].LineMicro\"/>\n                  </svg>\n                </div>\n                <div class=\"img\" [style.background-image]=\"'url(' + (diaryArr[1] ? diaryArr[1].img : nullDiary.img) + ')'\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div #diary5 class=\"navitems\" [class.selectedEl]=\"selectedElement == diary5\" (click)=\"moveItems(diary5)\">\n        <div class=\"naw-wrap\" >\n          <div class=\"svg-wrap\" [hidden]=\"selectedElement === diary5\">\n            <svg viewBox=\"0,0,108,108\" >\n              <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"4\" [attr.d]=\"days[0].LineCalories\"/>\n            </svg>\n          </div>\n          <div class=\"calories-border\">\n            <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary5\">\n              <svg viewBox=\"0,0,106,106\" >\n                <path id=\"arc1\" fill=\"none\" stroke=\"#3a8845\" stroke-width=\"2\" [attr.d]=\"days[0].LineCalories\"/>\n              </svg>\n            </div>\n            <div class=\"macros-border\">\n              <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary5\">\n                <svg viewBox=\"0,0,106,106\" >\n                  <path id=\"arc1\" fill=\"none\" stroke=\"#33a442\" stroke-width=\"2\" [attr.d]=\"days[0].LineMacro\"/>\n                </svg>\n              </div>\n              <div class=\"micros-border\">\n                <div class=\"svg-wrap\" [hidden]=\"selectedElement !== diary5\">\n                  <svg viewBox=\"0,0,106,106\" >\n                    <path id=\"arc1\" fill=\"none\" stroke=\"#3ec14d\" stroke-width=\"2\" [attr.d]=\"days[0].LineMicro\"/>\n                  </svg>\n                </div>\n                <div class=\"img\" [style.background-image]=\"'url(' + (diaryArr[4] ? diaryArr[4].img : nullDiary.img) + ')'\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"bottom-inf\">\n  <span [hidden]=\"pointsTimeItems.selectedTime || appData.nutritionalStateOpen.state\">Nutritional breakdown</span>\n  <div class=\"bottom-inf-wrap\" [class.open-inf]=\"appData.nutritionalStateOpen.state\">\n    <nutritional [hidden]=\"pointsTimeItems.selectedTime\"></nutritional>\n    <food [hidden]=\"!pointsTimeItems.selectedTime\" *ngIf=\"!isMobile\"></food>\n    <div class=\"bg-hide-screen\" [hidden]=\"!appData.nutritionalStateOpen.state\" (click)=\"closeNutritional()\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<div class=\"diaries-select-item\">\n  <div class=\"title\">Edit or add new diary</div>\n</div>\n<div class=\"diaries-select-item\">\n  <div class=\"diary-item\" [class.selected]=\"selectedDiary === diary\" *ngFor=\"let diary of diaryArr\" (mouseover)=\"selectDiary(diary)\">\n    <a [routerLink]=\"['/diary/selected-diary', diary._id]\">\n      <div class=\"img\" [style.background-image]=\"'url(' + diary.img + ')'\"></div>\n    </a>\n  </div>\n  <div class=\"diary-item\" *ngIf=\"diaryArr.length<5\">\n    <a [routerLink]=\"['/diary/selected-diary', 'create']\">\n      <img src=\"./assets/resources/images/search/add.png\" alt=\"\" style=\"-webkit-filter: opacity(25%); filter: opacity(25%);\">\n    </a>\n  </div>\n</div>\n<div class=\"diaries-select-item\">\n  <div class=\"diary-name\">\n    {{selectedDiary.firstName}} {{selectedDiary.secondName}}\n  </div>\n</div>"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-wrap\" [ngStyle]=\"{'margin-top': appData.sliderPosition.state}\" (window:resize)=\"onResize($event)\" [hidden]=\"isMobile\">\n  <div class=\"main-slider\">\n    <div class=\"navig\" #navig>\n      <div #search class=\"navitems\" >\n        <div class=\"naw-wrap\" [routerLink]=\"['/search/search-results/' + appData.searchValue.state]\">\n          <img src=\"./assets/resources/images/search/search.png\" alt=\"\" >\n        </div>\n      </div>\n      <div #diary  class=\"navitems\" >\n        <div class=\"naw-wrap\" >\n          <div class=\"img-wrap\"  style=\"background-color: #ffffff; width: 80%;height: 80%;border-radius: 50%; display: flex; justify-content: center;align-items: center; \">\n            <img src=\"./assets/resources/images/search/diary-black.png\" alt=\"\" >\n          </div>\n        </div>\n      </div>\n      <div #calendar class=\"navitems\" >\n        <div class=\"naw-wrap\" [routerLink]=\"['/calendar']\">\n          <img src=\"./assets/resources/images/search/calendar.png\" alt=\"\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"search-label-wrap\" *ngIf=\"!isMobile\">\n  <span>Diary</span>\n</div>\n\n<div class=\"diary-wrap\">\n  <div class=\"res-block\" *ngIf=\"!isMobile\">\n    <history></history>\n  </div>\n\n  <div class=\"res-block\">\n    <div class=\"item  diary-title-item\">\n      <div class=\"text-res-item\">Diaries</div>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<div class=\"select-title\" (window:resize)=\"onResize($event)\">\n  <span [hidden]=\"presentElement != elements[0]\">Enter an info</span>\n  <span [hidden]=\"presentElement != elements[1]\">Choose a gender</span>\n  <span [hidden]=\"presentElement != elements[2]\">Choose a height</span>\n  <span [hidden]=\"presentElement != elements[3]\">Choose a weight</span>\n  <span [hidden]=\"presentElement != elements[4]\">Choose a date of birth</span>\n  <span [hidden]=\"presentElement != elements[5]\" >Choose activity</span>\n  <span [hidden]=\"presentElement != elements[6]\">Recommended daily calories</span>\n</div>\n\n<div class=\"select-value\" [class.h-40]=\"presentElement == elements[6] && !isMobile\">\n  <div class=\"info sel-diar-item\" [hidden]=\"presentElement != elements[0]\">\n    <div class=\"photo\">\n      <label class=\"custom-file-upload\" [ngStyle]=\"{'background-image': 'url(' + diaryInf.img + ')'}\">\n        <span [hidden]=\"id !== 'create'\">Add photo</span>\n        <input type=\"file\" capture=\"camera\" accept=\"image/*\" (change)=\"loadPhoto($event)\">\n      </label>\n    </div>\n    <form action=\"\" >\n      <input type=\"text\" placeholder=\"Enter a First Name\"  value=\"{{ diaryInf.firstName }}\" (focusout)=\"diaryInf.firstName = changeInfoService.changeFirstName($event.target.value)\">\n      <input type=\"text\" placeholder=\"Enter a Last Name\"  value=\"{{ diaryInf.lastName }}\" (focusout)=\"diaryInf.lastName = changeInfoService.changeLastName($event.target.value)\">\n    </form>\n  </div>\n\n  <div class=\"gender sel-diar-item\" [hidden]=\"presentElement != elements[1]\">\n    <div class=\"input-wrap\" >\n      <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.gender = changeInfoService.changeGender(diaryInf.gender)\" alt=\"\">\n      <span >{{diaryInf.gender}}</span>\n      <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.gender = changeInfoService.changeGender(diaryInf.gender)\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"height sel-diar-item\" [hidden]=\"presentElement != elements[2]\">\n    <div class=\"input-wrap\" *ngIf=\"heightInput\">\n      <div class=\"change-height\">\n        <div class=\"units-wrap\">\n          <input type=\"radio\" name='koefH' value=\"30.48\" style=\"width: 10%;\"checked><span>ft</span>\n          <input type=\"radio\" name='koefH' value=\"1\" style=\"width: 10%;\"><span>cm</span>\n        </div>\n        <input #newHeight type=\"number\" value=\"\" [focus]=\"heightInput\">\n        <img src=\"./assets/resources/images/search/save-white.png\"  (click)=\"changeInputHeight(newHeight.value)\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"input-wrap\" [hidden]=\"heightInput\">\n      <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.height = changeInfoService.spinHeight(1)\" alt=\"\">\n      <input type=\"text\" value=\"{{diaryInf.height}}\" (click)=\"heightInput = true\" readonly style=\"cursor: pointer;\">\n      <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.height = changeInfoService.spinHeight(-1)\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"weight sel-diar-item\" [hidden]=\"presentElement != elements[3]\">\n    <div class=\"input-wrap\" >\n      <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.weight = changeInfoService.spinWeight(1)\" alt=\"\">\n      <input type=\"text\" value=\"{{diaryInf.weight}}\" (focusout)=\"diaryInf.weight = changeInfoService.changeWeight($event.target.value)\" (focus)=\"diaryInf.weight = ''\" placeholder=\"kg\">\n      <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.weight = changeInfoService.spinWeight(-1)\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"age sel-diar-item\" [hidden]=\"presentElement != elements[4]\">\n    <div class=\"input-wrap\">\n      <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.date.day = changeInfoService.spinDate(1, 'day')\" alt=\"\">\n      <input type=\"number\" value=\"{{diaryInf.date.day}}\" (focusout)=\"diaryInf.date.day = changeInfoService.changeDay($event.target.value)\" (focus)=\"diaryInf.date.day = ''\" placeholder=\"day\">\n      <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.date.day = changeInfoService.spinDate(-1, 'day')\" alt=\"\">\n    </div>\n    <div class=\"input-wrap\">\n      <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.date.month = changeInfoService.spinDate(1, 'month')\" alt=\"\">\n      <input type=\"number\" value=\"{{diaryInf.date.month}}\" (focusout)=\"diaryInf.date.month = changeInfoService.changeMonth($event.target.value)\" (focus)=\"diaryInf.date.month = ''\" placeholder=\"month\">\n      <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.date.month = changeInfoService.spinDate(-1, 'month')\" alt=\"\">\n    </div>\n    <div class=\"input-wrap\">\n      <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.date.year = changeInfoService.spinDate(1, 'year')\" alt=\"\">\n      <input type=\"number\"  value=\"{{diaryInf.date.year}}\" (focusout)=\"diaryInf.date.year = changeInfoService.changeYear($event.target.value)\" (focus)=\"diaryInf.date.year = ''\" placeholder=\"year\">\n      <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.date.year = changeInfoService.spinDate(-1, 'year')\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"activity sel-diar-item\" [hidden]=\"presentElement != elements[5]\">\n    <div class=\"input-wrap\">\n      <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.activity = changeInfoService.changeActivity(1, diaryInf.activity)\" alt=\"\">\n      <span >{{diaryInf.activity}}</span>\n      <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.activity = changeInfoService.changeActivity(-1, diaryInf.activity)\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"calories sel-diar-item\" [hidden]=\"presentElement != elements[6]\">\n    <div class=\"input-wrap\">\n      <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.calories = changeInfoService.spinCalories(1)\" alt=\"\">\n      <input type=\"number\"  value=\"{{diaryInf.calories}}\"  (focusout)=\"diaryInf.calories = changeInfoService.changeCalories($event.target.value)\" (focus)=\"diaryInf.calories = ''\" placeholder=\"calories\">\n      <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.calories = changeInfoService.spinCalories(-1)\" alt=\"\">\n    </div>\n  </div>\n</div>\n\n<div class=\"item\" [hidden]=\"presentElement == elements[6]\">\n  <img src=\"./assets/resources/images/search/save-white.png\"  (click)=\"goToElement( elements[presentElement.id+1], presentElement )\" alt=\"\">\n</div>\n\n<div class=\"item\">\n  <ul class=\"reg-navig\" >\n    <li class=\"reg-navig-item\"  [class.element-active]=\"elements[0].confirmed\" (click)=\"goToElement(elements[0], null)\">\n      <div class=\"done\" [hidden]=\"presentElement != elements[6]\"></div>\n      <h5>Infos</h5>\n    </li>\n    <li class=\"reg-navig-item\"  [class.element-active]=\"elements[1].confirmed\" (click)=\"goToElement(elements[1], elements[0])\">\n      <div class=\"done\" [hidden]=\"presentElement != elements[6]\"></div>\n      <h5>Gender</h5>\n    </li>\n    <li class=\"reg-navig-item\"  [class.element-active]=\"elements[2].confirmed\" (click)=\"goToElement(elements[2], elements[1])\">\n      <div class=\"done\" [hidden]=\"presentElement != elements[6]\"></div>\n      <h5>Height</h5>\n    </li>\n    <li class=\"reg-navig-item\"  [class.element-active]=\"elements[3].confirmed\" (click)=\"goToElement(elements[3], elements[2])\">\n      <div class=\"done\" [hidden]=\"presentElement != elements[6]\"></div>\n      <h5>Weight</h5>\n    </li>\n    <li class=\"reg-navig-item\"  [class.element-active]=\"elements[4].confirmed\" (click)=\"goToElement(elements[4], elements[3])\">\n      <div class=\"done\" [hidden]=\"presentElement != elements[6]\"></div>\n      <h5>Age</h5>\n    </li>\n    <li class=\"reg-navig-item\"  [class.element-active]=\"elements[5].confirmed\" (click)=\"goToElement(elements[5], elements[4])\">\n      <div class=\"done\" [hidden]=\"presentElement != elements[6]\"></div>\n      <h5>Activity</h5>\n    </li>\n  </ul>\n</div>\n\n<div class=\"last-confirm\" [hidden]=\"presentElement != elements[6]\">\n  <div class=\"btn-blocks\" (click)=\"saveDiary(true)\">\n    <span>Confirm</span>\n  </div>\n  <div class=\"btn-blocks\" (click)=\"saveDiary(false)\">\n    <span>Cancel</span>\n  </div>\n</div>"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "<div class=\"time-food\" [hidden]=\"!isMobile && appData.selectedFoodTime.state !== 1\">\n  <div class=\"item title-item\" [hidden]=\"!isMobile\">\n    <div class=\"second-block-title\" >Breakfast</div>\n    <div class=\"text-res-item w-30 addfood\" style=\"cursor: pointer;\">add food</div>\n    <div class=\"N-W\">\n      <img src=\"./assets/resources/images/search/add-green.png\" alt=\"\">\n    </div>\n    <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n  </div>\n\n  <div class=\"wrapper-food\" *ngIf=\"!isMobile\" slimScroll  width=\"100%\" height=\"100%\"  position=\"left\" size=\"2px\" color=\"#fff\" opacity=0.5 railVisible=true alwaysVisible=true railColor=\"#ff0000\" railOpacity=0.8 distance=\"{{halfWindow}}px\">\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n  </div>\n\n  <div class=\"wrapper-food\" *ngIf=\"isMobile\" >\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"time-food\" [hidden]=\"!isMobile && appData.selectedFoodTime.state !== 2\">\n  <div class=\"item title-item\" [hidden]=\"!isMobile\">\n    <div class=\"second-block-title\" >Dinner</div>\n    <div class=\"text-res-item w-30 addfood\" style=\"cursor: pointer;\">add food</div>\n    <div class=\"N-W\">\n      <img src=\"./assets/resources/images/search/add-green.png\" alt=\"\">\n    </div>\n    <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n  </div>\n\n  <div class=\"wrapper-food\" *ngIf=\"!isMobile\" slimScroll  width=\"100%\" height=\"100%\"  position=\"left\" size=\"2px\" color=\"#fff\" opacity=0.5 railVisible=true alwaysVisible=true railColor=\"#ff0000\" railOpacity=0.8 distance=\"{{halfWindow}}px\">\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n  </div>\n\n  <div class=\"wrapper-food\" *ngIf=\"isMobile\" >\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"time-food\" [hidden]=\"!isMobile && appData.selectedFoodTime.state !== 3\">\n  <div class=\"item title-item\" [hidden]=\"!isMobile\">\n    <div class=\"second-block-title\" >Lunch</div>\n    <div class=\"text-res-item w-30 addfood\" style=\"cursor: pointer;\">add food</div>\n    <div class=\"N-W\">\n      <img src=\"./assets/resources/images/search/add-green.png\" alt=\"\">\n    </div>\n    <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n  </div>\n\n  <div class=\"wrapper-food\" *ngIf=\"!isMobile\" slimScroll  width=\"100%\" height=\"100%\"  position=\"left\" size=\"2px\" color=\"#fff\" opacity=0.5 railVisible=true alwaysVisible=true railColor=\"#ff0000\" railOpacity=0.8 distance=\"{{halfWindow}}px\">\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n  </div>\n\n  <div class=\"wrapper-food\" *ngIf=\"isMobile\" >\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"time-food\" [hidden]=\"!isMobile && appData.selectedFoodTime.state !== 4\">\n  <div class=\"item title-item\" [hidden]=\"!isMobile\">\n    <div class=\"second-block-title\" >Snack</div>\n    <div class=\"text-res-item w-30 addfood\" style=\"cursor: pointer;\">add food</div>\n    <div class=\"N-W\">\n      <img src=\"./assets/resources/images/search/add-green.png\" alt=\"\">\n    </div>\n    <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n  </div>\n\n  <div class=\"wrapper-food\" *ngIf=\"!isMobile\" slimScroll  width=\"100%\" height=\"100%\"  position=\"left\" size=\"2px\" color=\"#fff\" opacity=0.5 railVisible=true alwaysVisible=true railColor=\"#ff0000\" railOpacity=0.8 distance=\"{{halfWindow}}px\">\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n  </div>\n\n  <div class=\"wrapper-food\" *ngIf=\"isMobile\" >\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item w-60\">Hamburger light</div>\n      <div class=\"text-res-item w-20\" href=\"\" >1000 cal</div>\n      <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<div class=\"social-footer-wrap\">\n  <a class=\"twitt\" href=\"https://twitter.com/\">\n    <img src=\"./assets/resources/images/footer/twitter.png\" alt=\"\">\n  </a>\n  <a class=\"fb\" href=\"https://www.facebook.com/\">\n    <img src=\"./assets/resources/images/footer/facebook.png\" alt=\"\">\n  </a>\n</div>\n\n<div class=\"email-footer-wrap\" >\n  <div class=\"email\">\n    <img src=\"./assets/resources/images/footer/message2-128.png\" alt=\"\">\n    <span *ngIf=\"!isMobile\">{{email}}</span>\n  </div>\n</div>"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"header-logo\">\n  <a (click)=\"sideMenuOpen()\">\n    <img src=\"./assets/resources/images/header/logo.png\" alt=\"\">\n  </a>\n</div>\n\n<div class=\"header-auth\" >\n  <a class=\"sign-up\" [routerLink]=\"auth ? ['/diary'] : ['/sign-up']\" *ngIf=\"!auth || !isMobile\">\n    <img [src]=\"auth ? './assets/resources/images/search/calendar.png' : './assets/resources/images/header/sign-up.png'\" alt=\"\">\n  </a>\n  <a class=\"log-in\" [routerLink]=\"auth ? ['/profile'] : ['/login']\">\n    <img [src]=\"auth ? userData.diaries[0].img : './assets/resources/images/header/log-in.png'\" alt=\"\" [style.border-radius.%]=\"auth ? 50 : 0\">\n  </a>\n</div>"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<div class=\"item diary-title-item\" >\n  <div class=\"text-res-item title-nav\" *ngIf=\"!isMobile\">Recently edited</div>\n  <div class=\"text-res-item title-nav\" *ngIf=\"isMobile\">History</div>\n  <div class=\"text-res-item f-e\">sort by date</div>\n  <div class=\"N-W \"><img src=\"./assets/resources/images/diary/arr-down-black.png\" alt=\"\" style=\"max-width: 40%;\"></div>\n</div>\n<div class=\"scroll-wrap-wrap\" >\n  <div class=\"scroll-wrap\" slimScroll  width=\"100%\" height=\"100%\"  position=\"right\" size=\"2px\" color=\"#fff\" opacity=1 railVisible=true alwaysVisible=true railColor=\"#fff\" railOpacity=0.2 distance=\"-1px\">\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item\" >Hamburger</div>\n      <div class=\"text-res-item f-e\">March 27 2017</div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item\" >Hamburger</div>\n      <div class=\"text-res-item f-e\">March 27 2017</div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item\" >Hamburger</div>\n      <div class=\"text-res-item f-e\">March 27 2017</div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item\" >Hamburger</div>\n      <div class=\"text-res-item f-e\">March 27 2017</div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item\" >Hamburger</div>\n      <div class=\"text-res-item f-e\">March 27 2017</div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item\" >Hamburger</div>\n      <div class=\"text-res-item f-e\">March 27 2017</div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item\" >Hamburger</div>\n      <div class=\"text-res-item f-e\">March 27 2017</div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item\" >Hamburger</div>\n      <div class=\"text-res-item f-e\">March 27 2017</div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\n      <div class=\"text-res-item\" >Hamburger</div>\n      <div class=\"text-res-item f-e\">March 27 2017</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-wrap\" (click)=\"logout()\">\n  <img src=\"./assets/resources/images/main-logo.png\" alt=\"\">\n  <h1 class=\"tag\">Not All Calories Are Equal</h1>\n  <span [class.active]=\"sliderDown\" >100 calories of ghee are not the same as 100 calories of carrots …so why are you counting calories?</span>\n</div>\n\n<div class=\"inputContainer\"  [class.hidden-search]=\"!sliderDown\">\n  <input  [(ngModel)]=\"appData.searchValue.state\" placeholder=\"Find your recipe, ingredient or ...\" (keyup.enter)=\"moveSearchView()\" >\n  <div class=\"vert-line-home\" [hidden]=\"selectedElement !== search\"></div>\n</div>\n\n<div class=\"slider-wrap\" [ngStyle]=\"{'margin-top': appData.sliderPosition.state}\" (window:resize)=\"onResize($event)\" >\n  <div class=\"main-slider\">\n    <div class=\"navig\" #navig>\n\n      <div #slideComp1 [class.scale-x-2]=\"selectedElement == slideComp1\" class=\"navitems\" >\n        <div class=\"naw-wrap\" (click)=\"moveItems(slideComp1)\">\n          <img src=\"./assets/resources/images/home/achiev.png\" alt=\"\" >\n          <div class=\"achiev-img-text\">\n            <span>SDKFasdasdasdaJ</span>\n            <span class=\"achiev-numb\">38</span>\n          </div>\n        </div>\n        <div class=\"achiev-text\" [hidden]=\"selectedElement !== slideComp1\">\n          <h1>SITE OF THE DAY</h1>\n          <div class=\"text\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</div>\n        </div>\n      </div>\n\n      <div #search class=\"navitems\" >\n        <div class=\"naw-wrap\" (click)=\"moveItems(search)\" >\n          <div class=\"img-wrap\" >\n            <img src=\"./assets/resources/images/home/search.png\" alt=\"\" >\n          </div>\n        </div>\n      </div>\n\n      <div #slideComp3 [class.scale-x-2]=\"selectedElement == slideComp3\" class=\"navitems\" >\n        <div class=\"naw-wrap\" (click)=\"moveItems(slideComp3)\">\n          <img src=\"./assets/resources/images/home/achiev.png\" alt=\"\" >\n          <div class=\"achiev-img-text\">\n            <span>SDKFasdasdasdaJ</span>\n            <span class=\"achiev-numb\">38</span>\n          </div>\n        </div>\n        <div class=\"achiev-text\" [hidden]=\"selectedElement !== slideComp3\">\n          <h1>SITE OF THE DAY</h1>\n          <div class=\"text\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-wrap\" [ngStyle]=\"{'margin-top': appData.sliderPosition.state}\" (window:resize)=\"onResize($event)\">\n  <div class=\"main-slider\">\n    <div class=\"navig\" #navig>\n      <div #infos class=\"navitems form-type\">\n        <div class=\"log-in-form\">\n          <div class=\"facebook-log-in\">\n            <div class=\"log-in-img-wrap\">\n              <img src=\"./assets/resources/images/login/fb.png\" alt=\"\">\n            </div>\n            <div class=\"fb-log-in-line\">\n              <div class=\"half-line\"></div>\n              <h5>or</h5>\n              <div class=\"half-line\"></div>\n            </div>\n          </div>\n\n          <form [formGroup]=\"loginForm\" novalidate>\n            <div class=\"form-group\">\n              <div class=\"no-valid\" *ngIf=\"loginForm.controls['email'].invalid && loginForm.controls['email'].touched\">Email is not required</div>\n              <input name=\"email\" formControlName=\"email\" placeholder=\"Enter your Name or Email\" >\n            </div>\n            <div class=\"form-group\">\n              <div class=\"no-valid\" *ngIf=\"loginForm.controls['password'].invalid && loginForm.controls['password'].touched\">Enter password</div>\n              <input  name=\"password\" formControlName=\"password\" type=\"password\" placeholder=\"Enter your Password\">\n            </div>\n          </form>\n\n          <div class=\"time-item\" [class.disabled]=\"loginForm.invalid\" (click)=\"logIn()\" style=\"top: 100%\">\n            <img src=\"./assets/resources/images/login/btn-next.png\" alt=\"\">\n            <span>log in</span>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"calendar-header\" *ngIf=\"!isMobile\">\n  <div class=\"calendar-nav\" (click)=\"moveBack()\">\n    <img src=\"./assets/resources/images/search/remove.png\" alt=\"\" >\n  </div>\n</div>\n\n<div class=\"tag-log-in\">Log in and start exploring your life</div>\n\n<div class=\"go-to-register\">\n  Login became easier! Log in and start enjoying our service!\n  If you don’t have an account, please <a [routerLink]=\"['/sign-up']\">register</a> first.\n</div>\n\n"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div class=\"res-block first-block\">\n  <div class=\"item item-title\" (click)=\"toggleState()\">\n    <div class=\"bg-green\"></div>\n    <div class=\"text-res-item\" href=\"\">Macroelements</div>\n    <div class=\"text-res-item percent-item\" href=\"\" >2 / 3</div>\n  </div>\n\n  <div class=\"nutritional-content\">\n    <div class=\"item\">\n      <div class=\"N-W\">\n        <div class=\"img-wrapper\">\n          <span>p</span>\n        </div>\n      </div>\n      <div class=\"text-res-item\" href=\"\">Protein</div>\n      <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n      <div class=\"bg-red\" [hidden]=\"auth\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\">\n        <div class=\"img-wrapper\">\n          <span>f</span>\n        </div>\n      </div>\n      <div class=\"text-res-item\" href=\"\">Fats</div>\n      <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n      <div class=\"bg-red\"></div>\n    </div>\n    <div class=\"item\">\n      <div class=\"N-W\">\n        <div class=\"img-wrapper\">\n          <span>c</span>\n        </div>\n      </div>\n      <div class=\"text-res-item\" href=\"\">Carbs</div>\n      <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n      <div class=\"bg-red\"></div>\n    </div>\n  </div>\n\n</div>\n<div class=\"res-block\">\n  <div class=\"item item-title\" (click)=\"toggleState()\">\n    <div class=\"bg-green\"></div>\n    <div class=\"text-res-item\" href=\"\">Microelements</div>\n    <div class=\"text-res-item percent-item\" href=\"\" >19 / 22</div>\n  </div>\n\n  <div class=\"nutritional-content\">\n\n    <div class=\"scroll-wrap\" slimScroll  width=\"100%\" height=\"100%\"  position=\"left\" size=\"2px\" color=\"#fff\" opacity=1 railVisible=true alwaysVisible=true railColor=\"#666\" railOpacity=0.2 distance=\"-1px\">\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n      <div class=\"item\">\n        <div class=\"N-W\">\n          <div class=\"img-wrapper\"><span>a</span></div>\n        </div>\n        <div class=\"text-res-item\" href=\"\">Vitamin A</div>\n        <div class=\"text-res-item percent-item\" href=\"\">34%</div>\n        <div class=\"bg-red\"></div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<div class=\"bg-blured\" [hidden]=\"isMobile\"></div>"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div class=\"choose-task\" >\n\n  <div class=\"diary choosen-content-item\" >\n    <div class=\"item-text\" style=\"background-image: url('/assets/resources/images/search/diary-green.png');\">Choose a diary</div>\n    <div class=\"items-wrap\">\n      <div class=\"diary-item time-item\" [class.selected]=\"selectedDiary === diary\" *ngFor=\"let diary of diaryArr\" (mouseover)=\"selectDiary(diary)\">\n        <div class=\"img\" [style.background-image]=\"'url(' + diary.img + ')'\"></div>\n      </div>\n      <div class=\"diary-item time-item\" style=\"filter: opacity(50%); border: none\" *ngIf=\"diaryArr.length < 5\" [routerLink]=\"['/diary/selected-diary/create']\">\n        <img src=\"./assets/resources/images/search/add.png\" alt=\"\" >\n      </div>\n    </div>\n  </div>\n\n  <div class=\"time choosen-content-item\" >\n    <div class=\"item-text\" style=\"background-image: url('/assets/resources/images/search/clock-green.png');\">Choose a time</div>\n    <div class=\"items-wrap\">\n      <div class=\"time-item\" [class.time-selected]=\"selectedTime === 'breakfast'\" (mouseover)=\"selectTime('breakfast')\">\n        <img src=\"./assets/resources/images/search/breakfast-green.png\" alt=\"\">\n        <span>breakfast</span>\n      </div>\n      <div class=\"time-item\" [class.time-selected]=\"selectedTime === 'lunch'\" (mouseover)=\"selectTime('lunch')\">\n        <img src=\"./assets/resources/images/search/lunch-green.png\" alt=\"\">\n        <span>lunch</span>\n      </div>\n      <div class=\"time-item\" [class.time-selected]=\"selectedTime === 'dinner'\" (mouseover)=\"selectTime('dinner')\">\n        <img src=\"./assets/resources/images/search/dinner-green.png\" alt=\"\">\n        <span>dinner</span>\n      </div>\n      <div class=\"time-item\" [class.time-selected]=\"selectedTime === 'snack'\" (mouseover)=\"selectTime('snack')\">\n        <img src=\"./assets/resources/images/search/snack-green.png\" alt=\"\">\n        <span>snack</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"date choosen-content-item\" >\n    <div class=\"item-text\" style=\"background-image: url('/assets/resources/images/search/calendar-green-full.png');\">Choose a date</div>\n    <div class=\"items-wrap\">\n      <div class=\"date-item\">\n        <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"spin(1, selectedDate.day, daysInMonth)\" alt=\"\">\n        <span>{{selectedDate.day.number}}</span>\n        <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"spin(-1, selectedDate.day, daysInMonth)\" alt=\"\">\n      </div>\n      <div class=\"date-item\">\n        <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"spin(1, selectedDate.month, monthes.length)\" alt=\"\">\n        <span>{{monthes[selectedDate.month.number - 1]}}</span>\n        <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"spin(-1, selectedDate.month, monthes.length)\" alt=\"\">\n      </div>\n      <div class=\"date-item\">\n        <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"spin(1, selectedDate.year)\" alt=\"\">\n        <span>{{selectedDate.year.number}}</span>\n        <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"spin(-1, selectedDate.year)\" alt=\"\">\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<div class=\"last-confirm\">\n  <div class=\"btn-blocks\" (click)=\"confirm()\">\n    <span *ngIf=\"!isMobile\">Confirm</span>\n    <span *ngIf=\"isMobile\">Add to calendar</span>\n  </div>\n  <div class=\"btn-blocks\" (click)=\"cancel()\">\n    <span>Cancel</span>\n  </div>\n</div>\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"res-block\" [class.confirmed-save]=\"appData.saveFoodToDiary.state === 'added' && !isMobile\" [hidden]=\"isMobile && addIngridient\">\r\n\r\n  <div class=\"res-det-nav item\">\r\n    <div class=\"N-W\"><img src=\"./assets/resources/images/search/recipe-black.png\" alt=\"\"></div>\r\n    <div class=\"text-res-item\">\r\n      <input type=\"text\" [(ngModel)]=\"newRecipe.title\" [readonly]=\"diaryActive\" (keyup)=\"checkRecipeEdited()\" (focus)=\"alertUniqTitle = false; alertSaveRecipe = false\">\r\n      <span [class.op-1]=\"alertUniqTitle\">This name already taken</span>\r\n      <span [class.op-1]=\"alertSaveRecipe\">Change name and save recipe</span>\r\n    </div>\r\n    <div class=\"N-W\">\r\n      <img class=\"go-back-black\" src=\"./assets/resources/images/search/go-back-green.png\" alt=\"\" (click)=\"moveBack()\">\r\n    </div>\r\n    <div class=\"N-W\" >\r\n      <img [class.grayscale-1]=\"!diaryActive\" src=\"./assets/resources/images/search/calendar-green.png\" alt=\"\" (click)=\"auth ? toggleDiaryActivity() : movetoLogin()\">\r\n    </div>\r\n    <div class=\"N-W\">\r\n      <img [class.grayscale-1]=\"!recipeEdited\" src=\"./assets/resources/images/search/reset-green.png\" alt=\"\"  [hidden]=\"(newRecipe.title !== recipe.title) || (!newRecipe._id)\" (click)=\"resetRecipe()\">\r\n      <img class=\"save-black\" src=\"./assets/resources/images/search/save-green.png\" alt=\"\" [hidden]=\"(newRecipe.title === recipe.title) && (newRecipe._id)\" (click)=\"auth ? saveNewRecipe() : movetoLogin()\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"res-det-img-wrap\" [hidden]=\"diaryActive || (appData.saveFoodToDiary.state === 'added' && !isMobile)\">\r\n    <div class=\"res-det-img\"  *ngIf=\"!isMobile\" slimScroll  width=\"100%\" height=\"100%\"  size=\"2px\" color=\"#fff\" opacity=1 railVisible=true alwaysVisible=true railColor=\"#fff\" railOpacity=0.2 distance=\"-1px\">\r\n      <img src=\"{{img}}\" *ngFor=\"let img of newRecipe.images\" alt=\"\">\r\n    </div>\r\n    <div class=\"res-det-img\"  *ngIf=\"isMobile\">\r\n      <img src=\"{{img}}\" *ngFor=\"let img of newRecipe.images\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n  <search-diary [hidden]=\"!diaryActive\"></search-diary>\r\n</div>\r\n\r\n\r\n<div class=\"res-block\" [hidden]=\"isMobile && diaryActive\">\r\n  <div class=\"second-block-nav item\">\r\n    <div class=\"second-block-title\" [hidden]=\"addIngridient\">{{isMobile ? 'Recipe' : 'Recipe / Ingredients'}}</div>\r\n    <div class=\"N-W\" [hidden]=\"!addIngridient\"><a href=\"\" ><img src=\"./assets/resources/images/search/search-black.png\" alt=\"\"></a></div>\r\n    <div class=\"text-res-item w-60\" [hidden]=\"!addIngridient\" style=\"justify-content: flex-start; color: #616469;\">\r\n      <input type=\"text\" value=\"\" >\r\n    </div>\r\n    <div class=\"text-res-item\" href=\"\" [hidden]=\"addIngridient\" (click)=\"addIngridient = true;\" style=\"cursor: pointer;\">add ingredient</div>\r\n    <div class=\"N-W\">\r\n      <img src=\"./assets/resources/images/search/add-green.png\" alt=\"\" [hidden]=\"addIngridient\" (click)=\"addIngridient = true;\">\r\n      <img src=\"./assets/resources/images/search/go-back-green.png\" alt=\"\" [hidden]=\"!addIngridient\" (click)=\"addIngridient = false;\">\r\n    </div>\r\n    <div class=\"N-W\"><span>N</span></div>\r\n    <div class=\"N-W\">\r\n      <span class=\"units-hover\">W</span>\r\n      <div class=\"faq-units\" *ngIf=\"!isMobile\">\r\n        <div class=\"faq-units-content\">\r\n          <div class=\"units\">\r\n            <span>g</span>\r\n            <span>kg</span>\r\n            <span>ts</span>\r\n          </div>\r\n          <div class=\"line\"></div>\r\n          <div class=\"units\">\r\n            <span>grams</span>\r\n            <span>kilograms</span>\r\n            <span>tablespoons</span>\r\n          </div>\r\n          <div class=\"corner\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--we cant edit recipe if diaryActive and if we edit recipe on each edit we need to use checkRecipeEdited() function-->\r\n\r\n  <div class=\"scroll-wrap-wrap\" [hidden]=\"addIngridient\">\r\n    <div class=\"scroll-wrap\" *ngIf=\"!isMobile\" slimScroll  width=\"100%\" height=\"100%\"  position=\"left\" size=\"2px\" color=\"#fff\" opacity=1 railVisible=true alwaysVisible=true railColor=\"#fff\" railOpacity=0.2 distance=\"-1px\">\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n\r\n      <div class=\"second-block-sections-title item\" >\r\n        <div class=\"bg-green\" [hidden]=\"!auth\"></div>\r\n        <span class=\"unlock\" [hidden]=\"auth\">to unlock the deficiency, please <a  [routerLink]=\"['/login']\">log in</a></span>\r\n      </div>\r\n\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W cal-numb\"><span>5120cal</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W cal-numb\"><span>5120cal</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W cal-numb\"><span>5120cal</span></div>\r\n      </div>\r\n\r\n      <div class=\"second-block-sections-title item\" >\r\n        <div class=\"bg-green\" [hidden]=\"!auth\"></div>\r\n        <span class=\"unlock\" [hidden]=\"auth\">to unlock the deficiency, please <a>log in</a></span>\r\n      </div>\r\n\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Protein</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Fats</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Carbs</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n\r\n      <div class=\"second-block-sections-title item\" >\r\n        <div class=\"bg-green\" [hidden]=\"!auth\"></div>\r\n        <span class=\"unlock\" [hidden]=\"auth\">to unlock the deficiency, please <a>log in</a></span>\r\n      </div>\r\n\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Vitamin A</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Vitamin B</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Vitamin C</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"scroll-wrap\" *ngIf=\"isMobile\">\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n\r\n      <div class=\"second-block-sections-title item\" >\r\n        <div class=\"bg-green\" [hidden]=\"!auth\"></div>\r\n        <span class=\"unlock\" [hidden]=\"auth\">to unlock the deficiency, please <a>log in</a></span>\r\n      </div>\r\n\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W cal-numb\"><span>5120cal</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W cal-numb\"><span>5120cal</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W cal-numb\"><span>5120cal</span></div>\r\n      </div>\r\n\r\n      <div class=\"second-block-sections-title item\" >\r\n        <div class=\"bg-green\" [hidden]=\"!auth\"></div>\r\n        <span class=\"unlock\" [hidden]=\"auth\">to unlock the deficiency, please <a>log in</a></span>\r\n      </div>\r\n\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Protein</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Fats</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Carbs</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n\r\n      <div class=\"second-block-sections-title item\" >\r\n        <div class=\"bg-green\" [hidden]=\"!auth\"></div>\r\n        <span class=\"unlock\" [hidden]=\"auth\">to unlock the deficiency, please <a>log in</a></span>\r\n      </div>\r\n\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Vitamin A</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Vitamin B</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid calories item\" >\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Vitamin C</div>\r\n        <div class=\"N-W cal-numb\"><span>30%</span></div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"scroll-wrap-wrap\" [hidden]=\"!addIngridient\">\r\n    <div class=\"scroll-wrap\" *ngIf=\"!isMobile\" slimScroll  width=\"100%\" height=\"100%\"  position=\"left\" size=\"2px\" color=\"#fff\" opacity=1 railVisible=true alwaysVisible=true railColor=\"#fff\" railOpacity=0.2 distance=\"-1px\">\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"scroll-wrap\" *ngIf=\"isMobile\">\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n      <div class=\"second-block-ingrid item\">\r\n        <div class=\"N-W\"><a href=\"\" ><img src=\"./assets/resources/images/search/ingridients.png\" alt=\"\"></a></div>\r\n        <div class=\"text-res-item\">Bun</div>\r\n        <div class=\"N-W\" ><img src=\"./assets/resources/images/search/delete.png\" alt=\"\"></div>\r\n        <div class=\"N-W\">\r\n          <div class=\"ingrid-count\">\r\n            <img src=\"./assets/resources/images/login/arr-up.png\" alt=\"\" (click)=\"spin($event, 1)\">\r\n            <input type=\"text\" value=\"1\" >\r\n            <img src=\"./assets/resources/images/login/arr-down.png\" alt=\"\" (click)=\"spin($event, -1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"N-W\"><span>30g</span></div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<div class=\"res-block first-block\"  [hidden]=\"(isMobile && searchData.length == 0)\">\n\n  <div class=\"results-block\" *ngIf=\"searchData.length == 0\">\n    <div class=\"res-numb\">\n      <h1>0</h1>\n      <span>results found</span>\n    </div>\n    <div class=\"span-text\">\n      Sorry, we didn’t find any recipe and ingredient in our database by name “hamburger”.\n    </div>\n  </div>\n\n  <div slimScroll  width=\"100%\" distance=\"0px\" height=\"100%\"  size=\"2px\" color=\"#fff\" opacity=1 railVisible=true alwaysVisible=true railColor=\"#fff\" railOpacity=0.2 class=\"search-result-list\" *ngIf=\"searchData.length > 0\">\n\n    <div class=\"item\" *ngFor=\"let recipe of searchData\" [routerLink]=\"['/search/result-details', recipe._id]\">\n      <div class=\"N-W\"><img src=\"./assets/resources/images/search/recipe.png\" alt=\"\"></div>\n      <div class=\"text-res-item item-name\">{{recipe.title}}</div>\n      <div class=\"text-res-item\">{{recipe.source}}</div>\n      <div class=\"N-W\"><img src=\"./assets/resources/images/search/res-calendar.png\" alt=\"\"></div>\n      <div class=\"N-W\"><img src=\"./assets/resources/images/search/edit.png\" alt=\"\"></div>\n    </div>\n\n  </div>\n\n  <div class=\"faq-line item\" *ngIf=\"isMobile\">\n    <div class=\"N-W\">\n      <img src=\"./assets/resources/images/search/ingridients-black.png\" alt=\"\">\n      <div class=\"faq-text\">ingridients</div>\n    </div>\n    <div class=\"N-W\">\n      <img src=\"./assets/resources/images/search/recipe-black.png\" alt=\"\">\n      <div class=\"faq-text\">recipe</div>\n    </div>\n    <div class=\"N-W\">\n      <img src=\"./assets/resources/images/search/calendar-black.png\" alt=\"\">\n      <div class=\"faq-text\">calendar</div>\n    </div>\n    <div class=\"text-res-item\">FAQ</div>\n  </div>\n</div>\n\n<span class=\"but\" [hidden]=\"!searchEmpty\" *ngIf=\"!isMobile\">but</span>\n\n<div class=\"res-block\" [hidden]=\"(isMobile && searchData.length > 0)\">\n\n  <div class=\"results-block\" *ngIf=\"searchData.length == 0\">\n    <div class=\"img-wrap-search\">\n      <img src=\"./assets/resources/images/search/add.png\" alt=\"\" (click)=\"moveSearchView()\">\n    </div>\n    <div class=\"span-text\" >\n      You can add your favorite recipe right now and make the world a happier!\n    </div>\n  </div>\n\n  <div class=\"results-block results-not-empty\" *ngIf=\"searchData.length > 0\">\n    <div class=\"res-numb res-numb-top\">\n      <h1>{{searchData.length}}</h1>\n      <span>{{searchData.length == 1 ? 'result' : 'results'}} found</span>\n    </div>\n    <div class=\"faq-line item\">\n      <div class=\"N-W\">\n        <img src=\"./assets/resources/images/search/ingridients-black.png\" alt=\"\">\n        <div class=\"faq-text\">ingridients</div>\n      </div>\n      <div class=\"N-W\">\n        <img src=\"./assets/resources/images/search/recipe-black.png\" alt=\"\">\n        <div class=\"faq-text\">recipe</div>\n      </div>\n      <div class=\"N-W\">\n        <img src=\"./assets/resources/images/search/calendar-black.png\" alt=\"\">\n        <div class=\"faq-text\">calendar</div>\n      </div>\n      <div class=\"text-res-item\">FAQ</div>\n    </div>\n    <div class=\"search-tips\">\n      <h1>\n        Search tips\n      </h1>\n      <div class=\"span-text\">\n        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-wrap\" [ngStyle]=\"{'margin-top': appData.sliderPosition.state }\" (window:resize)=\"onResize($event)\" [hidden]=\"isMobile\">\n  <div class=\"main-slider\">\n    <div class=\"navig\" #navig>\n      <div #home class=\"navitems\" >\n        <div class=\"naw-wrap\" [routerLink]=\"['/']\">\n          <img src=\"./assets/resources/images/search/home.png\" alt=\"\" >\n        </div>\n      </div>\n      <div #search  class=\"navitems\" >\n        <div class=\"naw-wrap\" >\n          <div class=\"img-wrap\"  style=\"background-color: #ffffff; width: 80%;height: 80%;border-radius: 50%; display: flex; justify-content: center;align-items: center; \">\n            <img src=\"./assets/resources/images/home/search.png\" alt=\"\" >\n          </div>\n        </div>\n      </div>\n      <div #calendar class=\"navitems\" [routerLink]=\"['/calendar']\">\n        <div class=\"naw-wrap\" >\n          <img src=\"./assets/resources/images/search/calendar.png\" alt=\"\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"search-label-wrap item\" [hidden]=\"isMobile && !appData.searchInputVisible.state\">\n  <input type=\"text\"  [(ngModel)]=\"appData.searchValue.state\" placeholder=\"tap to find your recipe\" (keyup.enter)=\"changeSearch()\">\n  <img src=\"./assets/resources/images/search/remove.png\" alt=\"\" *ngIf=\"!isMobile\" (click)=\"clearInput()\">\n  <img src=\"./assets/resources/images/search/delete.png\" alt=\"\" *ngIf=\"isMobile\" (click)=\"clearInput()\">\n</div>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-menu\">\n  <div class=\"side-header\" [class.loggedin]=\"loggedin\" >\n    <div class=\"side-header-content\">\n      <div class=\"side-header-top\">\n        <div class=\"img-wrap-left\">\n          <img src=\"./assets/resources/images/header/logo.png\" alt=\"\" [routerLink]=\"['/']\" (click)=\"sideMenuClose()\">\n          <img src=\"./assets/resources/images/sidemenu/logo.png\" alt=\"\" style=\"max-height: 28%; cursor: none;\">\n        </div>\n        <div class=\"img-wrap-right\">\n          <img src=\"./assets/resources/images/search/search.png\" alt=\"\" [routerLink]=\"['/search']\" (click)=\"sideMenuClose()\">\n        </div>\n      </div>\n      <div class=\"side-header-body\" *ngIf=\"loggedin\">\n        <img src=\"{{avatarImg}}\" alt=\"\" [routerLink]=\"['/profile']\" (click)=\"sideMenuClose()\">\n        <span [routerLink]=\"['/profile']\" (click)=\"sideMenuClose()\">{{avatarName}}</span>\n      </div>\n      <div class=\"side-header-bottom\">\n        <div class=\"img-wrap-left\">\n          <img src=\"./assets/resources/images/sidemenu/logout-green.png\" alt=\"\">\n          <span>log out</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"side-header-avatar\" *ngIf=\"loggedin\" [ngStyle]=\"{'background': 'linear-gradient( rgba(13, 26, 14, 0.9), rgba(13, 26, 14, 0.9) ), url(' + avatarImg + ') 50% 50% no-repeat'}\"></div>\n  </div>\n  <div class=\"side-body\" [class.loggedin]=\"loggedin\">\n    <div class=\"side-body-item\">\n      <img src=\"./assets/resources/images/sidemenu/diary-green.png\" alt=\"\" [routerLink]=\"['/diary']\" (click)=\"sideMenuClose()\">\n      <span [routerLink]=\"['/diary']\" (click)=\"sideMenuClose()\">diary</span>\n    </div>\n    <div class=\"side-body-item\">\n      <img src=\"./assets/resources/images/sidemenu/calendar-green.png\" alt=\"\" [routerLink]=\"['/calendar']\" (click)=\"sideMenuClose()\">\n      <span   [routerLink]=\"['/calendar']\" (click)=\"sideMenuClose()\">calendar</span>\n    </div>\n    <div class=\"side-body-item\">\n      <img src=\"./assets/resources/images/sidemenu/defiency-green.png\" alt=\"\"    [routerLink]=\"['/diary']\" (click)=\"sideMenuClose()\">\n      <span   [routerLink]=\"['/diary']\" (click)=\"sideMenuClose()\">nutritional breakdown</span>\n    </div>\n    <div class=\"side-body-item\">\n      <img src=\"./assets/resources/images/sidemenu/history-green.png\" alt=\"\" [routerLink]=\"['/history']\" (click)=\"sideMenuClose()\">\n      <span   [routerLink]=\"['/history']\" (click)=\"sideMenuClose()\">history</span>\n    </div>\n  </div>\n\n  <div class=\"side-footer\" [hidden]=\"loggedin\">\n    <div class=\"loggin\" [routerLink]=\"['/login']\" (click)=\"sideMenuClose()\">\n      <img src=\"./assets/resources/images/sidemenu/login-green.png\" alt=\"\">\n      <span>log in</span>\n    </div>\n    <div class=\"signup\" [routerLink]=\"['/sign-up']\" (click)=\"sideMenuClose()\">\n      <span>sign up</span>\n      <img src=\"./assets/resources/images/sidemenu/signup-green.png\" alt=\"\">\n    </div>\n  </div>\n</div>\n<div class=\"close-btn\" (click)=\"sideMenuClose()\"></div>"

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-wrap\" [ngStyle]=\"{'margin-top': appData.sliderPosition.state}\" (window:resize)=\"onResize($event)\">\n  <div class=\"main-slider\">\n    <div class=\"slider-left-btn\" [hidden]=\"selectedElement === infos\" (click)=\"goToElement(params.elementsArr[0], null)\" *ngIf=\"!isMobile\">\n      <img src=\"./assets/resources/images/search/go-back-green.png\" alt=\"\" >\n    </div>\n\n    <div class=\"navig\" #navig>\n      <div #infos class=\"navitems\" data-num=\"0\" [class.form-type]=\"selectedElement === infos\">\n        <div class=\"naw-wrap\" (click)=\"goToElement(params.elementsArr[0], null)\" [hidden]=\"selectedElement === infos\" style=\"background-image: url('assets/resources/images/login/infos.png')!important;\" [class.element-active]=\"params.elementsArr[0].confirmed\">\n          <div class=\"item-label\" style=\"bottom: auto;\">infos</div>\n        </div>\n        <div class=\"log-in-form\" [hidden]=\"selectedElement !== infos\">\n\n          <form #signupForm=\"ngForm\" novalidate >\n            <div class=\"form-group\">\n              <div class=\"no-valid\" [hidden]=\"firstName.valid || (firstName.untouched && !signupForm.submitted)\">Enter your First Name</div>\n              <input type=\"text\" name=\"firstName\" [ngModel]=\"newAccount.firstName\" placeholder=\"Enter your First Name\" required minlength=\"3\" maxlength=\"20\" #firstName=\"ngModel\"\n                     (focusout)=\"diaryInf.firstName = changeInfoService.changeFirstName(signupForm.value.firstName)\">\n            </div>\n            <div class=\"form-group\">\n              <div class=\"no-valid\" [hidden]=\"lastName.valid || (lastName.untouched && !signupForm.submitted)\">Enter your Last Name</div>\n              <input type=\"text\" name=\"lastName\" [ngModel]=\"newAccount.lastName\" placeholder=\"Enter your Last Name\" required minlength=\"3\" maxlength=\"20\" #lastName=\"ngModel\"\n                     (focusout)=\"diaryInf.lastName = changeInfoService.changeLastName(newAccount.lastName)\">\n            </div>\n            <div class=\"form-group\">\n              <div class=\"no-valid\" [hidden]=\"email.valid || (email.untouched && !signupForm.submitted)\">Enter your Email</div>\n              <input type=\"text\" name=\"email\" [ngModel]=\"newAccount.email\" placeholder=\"Enter your Email\"\n                     required  #email=\"ngModel\" pattern=\"[a-zA-Z_0-9]+@[a-zA-Z_0-9]+?\\.[a-zA-Z0-9]{2,3}\">\n            </div>\n            <div class=\"form-group\">\n              <div class=\"no-valid\" [hidden]=\"password.valid || (password.untouched && !signupForm.submitted)\">Enter your Password</div>\n              <input type='password' name=\"password\" [ngModel]=\"newAccount.password\" placeholder=\"Enter your Password\"\n                     required minlength=\"5\" maxlength=\"15\" validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n            </div>\n            <div class=\"form-group\">\n              <div class=\"no-valid\" [hidden]=\"confirmPassword.valid || (confirmPassword.untouched && !signupForm.submitted)\">Confirm your Password</div>\n              <input type='password' name=\"confirmPassword\" [ngModel]=\"newAccount.confirmPassword\" placeholder=\"Confirm your Password\"\n                     required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\n            </div>\n          </form>\n\n          <div class=\"time-item\" (click)=\"goToElement(params.elementsArr[1], params.elementsArr[0])\" >\n            <img src=\"./assets/resources/images/login/btn-next.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n      <div #photo class=\"navitems\" data-num=\"1\" [class.scale-x-2]=\"selectedElement === photo\">\n        <div class=\"naw-wrap \" (click)=\"goToElement(params.elementsArr[1], params.elementsArr[0])\" [hidden]=\"selectedElement == photo\" [class.element-active]=\"params.elementsArr[1].confirmed\">\n          <div class=\"item-label\">photo</div>\n        </div>\n        <div class=\"naw-wrap\" [hidden]=\"selectedElement !== photo\">\n          <div class=\"nav-item-label\">\n            Choose a photo\n          </div>\n          <div class=\"input-wrap\">\n              <label class=\"custom-file-upload\" [ngStyle]=\"{'background-image': 'url(' + diaryInf.img + ')'}\">\n                <span>Add photo</span>\n                <input type=\"file\" capture=\"camera\" accept=\"image/*\" (change)=\"loadPhoto($event)\">\n              </label>\n          </div>\n          <div class=\"time-item\" (click)=\"goToElement(params.elementsArr[2], params.elementsArr[1])\">\n            <img src=\"./assets/resources/images/login/btn-next.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n      <div #gender class=\"navitems\" data-num=\"2\" [class.scale-x-2]=\"selectedElement === gender\">\n        <div class=\"naw-wrap \" (click)=\"goToElement(params.elementsArr[2], params.elementsArr[1])\" [hidden]=\"selectedElement == gender\" style=\"background-image: url('assets/resources/images/login/gender.png');\" [class.element-active]=\"params.elementsArr[2].confirmed\">\n          <div class=\"item-label\">gender</div>\n          <div class=\"item-value\" [hidden]=\"!params.elementsArr[2].confirmed\">{{diaryInf.gender}}</div>\n        </div>\n        <div class=\"naw-wrap\" [hidden]=\"selectedElement !== gender\">\n          <div class=\"nav-item-label\">\n            Choose a gender\n          </div>\n          <div class=\"input-wrap\">\n            <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.gender = changeInfoService.changeGender(diaryInf.gender)\" alt=\"\">\n            <span >{{diaryInf.gender}}</span>\n            <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.gender = changeInfoService.changeGender(diaryInf.gender)\" alt=\"\">\n          </div>\n          <div class=\"time-item\" (click)=\"goToElement(params.elementsArr[3], params.elementsArr[2])\">\n            <img src=\"./assets/resources/images/login/btn-next.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n      <div #height class=\"navitems\" data-num=\"3\" [class.scale-x-2]=\"selectedElement === height\">\n        <div class=\"naw-wrap\" (click)=\"goToElement(params.elementsArr[3], params.elementsArr[2])\" [hidden]=\"selectedElement === height\" style=\"background-image: url('assets/resources/images/login/weight.png');\" [class.element-active]=\"params.elementsArr[3].confirmed\">\n          <div class=\"item-label\">height</div>\n          <div class=\"item-value\" [hidden]=\"!params.elementsArr[3].confirmed\">{{diaryInf.height}}</div>\n        </div>\n        <div class=\"naw-wrap\" [hidden]=\"selectedElement !== height\" >\n          <div class=\"nav-item-label\">\n            Choose a height\n          </div>\n          <div class=\"input-wrap\" *ngIf=\"heightInput\">\n            <div class=\"change-height\">\n              <div class=\"units-wrap\">\n                <input type=\"radio\" name='koefH' value=\"30.48\" style=\"width: 10%;\"checked><span>ft</span>\n                <input type=\"radio\" name='koefH' value=\"1\" style=\"width: 10%;\"><span>cm</span>\n              </div>\n              <input #newHeight type=\"number\" value=\"\" [focus]=\"heightInput\">\n              <img src=\"./assets/resources/images/search/save-white.png\"  (click)=\"changeInputHeight(newHeight.value)\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"input-wrap\" [hidden]=\"heightInput\">\n            <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.height = changeInfoService.spinHeight(1)\" alt=\"\">\n            <input value=\"{{diaryInf.height}}\" (click)=\"heightInput = true\" readonly style=\"cursor: pointer;\">\n            <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.height = changeInfoService.spinHeight(-1)\" alt=\"\">\n          </div>\n          <div class=\"time-item\" (click)=\"goToElement(params.elementsArr[4], params.elementsArr[3])\">\n            <img src=\"./assets/resources/images/login/btn-next.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n      <div #weight class=\"navitems\" data-num=\"4\" [class.scale-x-2]=\"selectedElement === weight\">\n        <div class=\"naw-wrap\" (click)=\"goToElement(params.elementsArr[4], params.elementsArr[3])\" [hidden]=\"selectedElement == weight\" style=\"background-image: url('assets/resources/images/login/weight.png');\" [class.element-active]=\"params.elementsArr[4].confirmed\">\n          <div class=\"item-label\">weight</div>\n          <div class=\"item-value\" [hidden]=\"!params.elementsArr[4].confirmed\">{{diaryInf.weight}}</div>\n        </div>\n        <div class=\"naw-wrap\" [hidden]=\"selectedElement !== weight\">\n          <div class=\"nav-item-label\">\n            Choose a weight\n          </div>\n          <div class=\"input-wrap\">\n            <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.weight = changeInfoService.spinWeight(1)\" alt=\"\">\n            <input type=\"text\" value=\"{{diaryInf.weight}}\" (focusout)=\"diaryInf.weight = changeInfoService.changeWeight($event.target.value)\" (focus)=\"diaryInf.weight = ''\" placeholder=\"kg\">\n            <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.weight = changeInfoService.spinWeight(-1)\" alt=\"\">\n          </div>\n          <div class=\"time-item\" (click)=\"goToElement(params.elementsArr[5], params.elementsArr[4])\">\n            <img src=\"./assets/resources/images/login/btn-next.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n      <div #age class=\"navitems\" data-num=\"5\" [class.scale-x-2]=\"selectedElement === age\">\n        <div class=\"naw-wrap\" (click)=\"goToElement(params.elementsArr[5], params.elementsArr[4])\" [hidden]=\"selectedElement == age\" style=\"background-image: url('assets/resources/images/login/age.png');\" [class.element-active]=\"params.elementsArr[5].confirmed\">\n          <div class=\"item-label\">age</div>\n          <div class=\"item-value\" [hidden]=\"!params.elementsArr[5].confirmed\">{{diaryInf.date.day}}.{{diaryInf.date.month}}.{{diaryInf.date.year}}</div>\n        </div>\n        <div class=\"naw-wrap\"  [hidden]=\"selectedElement !== age\" >\n          <div class=\"nav-item-label\">\n            Choose a date of birth\n          </div>\n          <div class=\"input-wrap\">\n            <div class=\"age-input-wrap\">\n              <div class=\"age-input\">\n                <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.date.day = changeInfoService.spinDate(1, 'day')\" alt=\"\">\n                <input type=\"number\" value=\"{{diaryInf.date.day}}\" (focusout)=\"diaryInf.date.day = changeInfoService.changeDay($event.target.value)\" (focus)=\"diaryInf.date.day = ''\" placeholder=\"day\">\n                <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.date.day = changeInfoService.spinDate(-1, 'day')\" alt=\"\">\n              </div>\n              <div class=\"age-input\">\n                <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.date.month = changeInfoService.spinDate(1, 'month')\" alt=\"\">\n                <input type=\"number\" value=\"{{diaryInf.date.month}}\" (focusout)=\"diaryInf.date.month = changeInfoService.changeMonth($event.target.value)\" (focus)=\"diaryInf.date.month = ''\" placeholder=\"month\">\n                <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.date.month = changeInfoService.spinDate(-1, 'month')\" alt=\"\">\n              </div>\n              <div class=\"age-input\">\n                <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.date.year = changeInfoService.spinDate(1, 'year')\" alt=\"\">\n                <input type=\"number\"  value=\"{{diaryInf.date.year}}\" (focusout)=\"diaryInf.date.year = changeInfoService.changeYear($event.target.value)\" (focus)=\"diaryInf.date.year = ''\" placeholder=\"year\">\n                <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.date.year = changeInfoService.spinDate(-1, 'year')\" alt=\"\">\n              </div>\n            </div>\n          </div>\n          <div class=\"time-item\" (click)=\"goToElement(params.elementsArr[6], params.elementsArr[5])\">\n            <img src=\"./assets/resources/images/login/btn-next.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n      <div #activity class=\"navitems\" data-num=\"6\" [class.scale-x-2]=\"selectedElement === activity\">\n        <div class=\"naw-wrap\" (click)=\"goToElement(params.elementsArr[6], params.elementsArr[5])\" [hidden]=\"selectedElement == activity\" style=\"background-image: url('assets/resources/images/login/activity.png');\" [class.element-active]=\"params.elementsArr[6].confirmed\">\n          <div class=\"item-label\">activity</div>\n          <div class=\"item-value\" [hidden]=\"!params.elementsArr[6].confirmed\">{{diaryInf.activity}}</div>\n        </div>\n        <div class=\"naw-wrap\" [hidden]=\"selectedElement !== activity\" >\n          <div class=\"nav-item-label\">\n            Choose activity\n          </div>\n          <div class=\"input-wrap\">\n            <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.activity = changeInfoService.changeActivity(1, diaryInf.activity)\" alt=\"\">\n            <span >{{diaryInf.activity}}</span>\n            <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.activity = changeInfoService.changeActivity(-1, diaryInf.activity)\" alt=\"\">\n          </div>\n          <div class=\"time-item\" (click)=\"goToElement(params.elementsArr[7], params.elementsArr[6])\">\n            <img src=\"./assets/resources/images/login/btn-next.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n      <div #calories class=\"navitems\"  data-num=\"7\" [class.scale-x-2]=\"selectedElement === calories\">\n\n        <div class=\"naw-wrap\" (click)=\"goToElement(params.elementsArr[7], params.elementsArr[6])\" [hidden]=\"selectedElement == calories\" [class.element-active]=\"params.elementsArr[7].confirmed\">\n          <div class=\"item-label\">calories</div>\n          <div class=\"item-value\" [hidden]=\"!params.elementsArr[7].confirmed\">{{diaryInf.calories}}</div>\n        </div>\n\n        <div class=\"naw-wrap\" [hidden]=\"selectedElement !== calories\">\n          <div class=\"nav-item-label\">\n            Recommended daily calories\n          </div>\n          <div class=\"input-wrap\">\n            <img src=\"./assets/resources/images/login/arr-up.png\" (click)=\"diaryInf.calories = changeInfoService.spinCalories(1)\" alt=\"\">\n            <input type=\"number\"  value=\"{{diaryInf.calories}}\"  (focusout)=\"diaryInf.calories = changeInfoService.changeCalories($event.target.value)\" (focus)=\"diaryInf.calories = ''\" placeholder=\"calories\">\n            <img src=\"./assets/resources/images/login/arr-down.png\"  (click)=\"diaryInf.calories = changeInfoService.spinCalories(-1)\" alt=\"\">\n          </div>\n          <div class=\"time-item\" [class.disabled]=\"!signupForm.valid\" (click)=\"finishReg()\">\n            <img src=\"./assets/resources/images/login/btn-next.png\" alt=\"\">\n            <span>finish</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"tag-log-in\">Register a new account</div>\n\n<ul class=\"reg-navig\" >\n  <li class=\"reg-navig-item\"  [class.element-active]=\"params.elementsArr[0].confirmed\" (click)=\"goToElement(params.elementsArr[0], null)\"><h5>Infos</h5></li>\n  <li class=\"reg-navig-item\"  [class.element-active]=\"params.elementsArr[1].confirmed\" (click)=\"goToElement(params.elementsArr[1], params.elementsArr[0])\"><h5>Photos</h5></li>\n  <li class=\"reg-navig-item\"  [class.element-active]=\"params.elementsArr[2].confirmed\" (click)=\"goToElement(params.elementsArr[2], params.elementsArr[1])\"><h5>Gender</h5></li>\n  <li class=\"reg-navig-item\"  [class.element-active]=\"params.elementsArr[3].confirmed\" (click)=\"goToElement(params.elementsArr[3], params.elementsArr[2])\"><h5>Height</h5></li>\n  <li class=\"reg-navig-item\"  [class.element-active]=\"params.elementsArr[4].confirmed\" (click)=\"goToElement(params.elementsArr[4], params.elementsArr[3])\"><h5>Weight</h5></li>\n  <li class=\"reg-navig-item\"  [class.element-active]=\"params.elementsArr[5].confirmed\" (click)=\"goToElement(params.elementsArr[5], params.elementsArr[4])\"><h5>Age</h5></li>\n  <li class=\"reg-navig-item\"  [class.element-active]=\"params.elementsArr[6].confirmed\" (click)=\"goToElement(params.elementsArr[6], params.elementsArr[5])\"><h5>Activity</h5></li>\n</ul>"

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);


/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedGuardService = (function () {
    function LoggedGuardService(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    LoggedGuardService.prototype.canActivate = function (route, state) {
        if (!this.storageService.get("token") && !this.storageService.getSession("token")) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    LoggedGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === 'function' && _b) || Object])
    ], LoggedGuardService);
    return LoggedGuardService;
    var _a, _b;
}());
//# sourceMappingURL=C:/web/nut3/src/logged-guard.service.js.map

/***/ })

},[595]);
//# sourceMappingURL=main.bundle.js.map