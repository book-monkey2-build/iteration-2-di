webpackJsonp([6,14],{603:function(t,e,n){"use strict";var i=n(1),o=n(744),r=n(740),a=n(735),s=n(692),c=n(748),l=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(){}return t=l([n.i(i.NgModule)({declarations:[s.a],imports:[o.a,r.a,a.a,c.a]}),u("design:paramtypes",[])],t)}();e.default=f},679:function(t,e,n){"use strict";var i=n(739);n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i.a});var o=function(){function t(t,e,n,i,o,r,a,s){this.isbn=t,this.title=e,this.authors=n,this.published=i,this.subtitle=o,this.rating=r,this.thumbnails=a,this.description=s}return t}()},688:function(t,e,n){"use strict";var i=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.listOn=!0,this.detailsOn=!1}return t.prototype.showList=function(){this.listOn=!0,this.detailsOn=!1},t.prototype.showDetails=function(t){this.book=t,this.listOn=!1,this.detailsOn=!0},t=o([n.i(i.Component)({selector:"bm-root",template:'\n    <bm-book-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></bm-book-list>\n    <bm-book-details *ngIf="detailsOn" (showListEvent)="showList()" [book]="book"></bm-book-details>\n  '}),r("design:paramtypes",[])],t)}()},689:function(t,e,n){"use strict";var i=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([n.i(i.Component)({selector:"bm-root",template:"<bm-book-list></bm-book-list>"}),r("design:paramtypes",[])],t)}()},690:function(t,e,n){"use strict";var i=n(743);n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i.a});var o=function(){function t(t,e,n,i,o,r,a,s){this.isbn=t,this.title=e,this.authors=n,this.published=i,this.subtitle=o,this.rating=r,this.thumbnails=a,this.description=s}return t}()},691:function(t,e,n){"use strict";var i=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([n.i(i.Component)({selector:"bm-root",template:"<bm-book-list></bm-book-list>"}),r("design:paramtypes",[])],t)}()},692:function(t,e,n){"use strict";var i=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([n.i(i.Component)({template:'\n    <div class="ui three small ordered steps">\n      <a [routerLink]="[\'book-list\']" routerLinkActive="active" class="step">\n        <div class="content">\n          <div class="title">Listenansicht</div>\n        </div>\n      </a>\n      <a [routerLink]="[\'book-list-refactored\']" routerLinkActive="active"  class="step">\n        <div class="content">\n          <div class="title">Verbesserte Listenansicht</div>\n        </div>\n      </a>\n      <a [routerLink]="[\'book-details\']" routerLinkActive="active" class="step">\n        <div class="content">\n          <div class="title">Detailansicht</div>\n        </div>\n      </a>\n    </div>\n    <div class="ui raised padded container segment">\n      <router-outlet></router-outlet>\n    </div>\n  '}),r("design:paramtypes",[])],t)}()},735:function(t,e,n){"use strict";var i=n(78),o=n(1),r=n(688),a=n(738),s=n(737),c=n(736);n.d(e,"a",function(){return f});var l=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(){}return t=l([n.i(o.NgModule)({declarations:[r.a,a.a,s.a,c.a],imports:[i.a],providers:[],bootstrap:[r.a]}),u("design:paramtypes",[])],t)}()},736:function(t,e,n){"use strict";var i=n(1),o=n(679);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.showListEvent=new i.EventEmitter}return t.prototype.getRating=function(t){return new Array(t)},t.prototype.showBookList=function(){this.showListEvent.emit(null)},r([n.i(i.Input)(),a("design:type","function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object)],t.prototype,"book",void 0),r([n.i(i.Output)(),a("design:type",Object)],t.prototype,"showListEvent",void 0),t=r([n.i(i.Component)({selector:"bm-book-details",template:n(799)}),a("design:paramtypes",[])],t);var e}()},737:function(t,e,n){"use strict";var i=n(1),o=n(679);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return r([n.i(i.Input)(),a("design:type","function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object)],t.prototype,"book",void 0),t=r([n.i(i.Component)({selector:"a.bm-book-list-item",template:n(800)}),a("design:paramtypes",[])],t);var e}()},738:function(t,e,n){"use strict";var i=n(1),o=n(679);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.showDetailsEvent=new i.EventEmitter}return t.prototype.ngOnInit=function(){this.books=[new o.a("9783864903571","Angular 2",["Johannes Hoppe","Danny Koppenhagen","Ferdinand Malcher","Gregor Woiwode"],new Date(2016,5,26),"Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen",5,[new o.b("http://goo.gl/nDi0Fc","Buchcover")],"Dieses Buch vermittelt einen Schnelleinstieg in Angular 2..."),new o.a("9783864901546","AngularJS",["Philipp Tarasiewicz","Robin Böhm"],new Date(2014,5,29),"Eine praktische Einführung",5,[new o.b("https://goo.gl/Y5lFVE","Buchcover")],"Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...")]},t.prototype.showDetails=function(t){this.showDetailsEvent.emit(t)},r([n.i(i.Output)(),a("design:type",Object)],t.prototype,"showDetailsEvent",void 0),t=r([n.i(i.Component)({selector:"bm-book-list",template:n(801)}),a("design:paramtypes",[])],t)}()},739:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t,e){this.url=t,this.title=e}return t}()},740:function(t,e,n){"use strict";var i=n(78),o=n(1),r=n(689),a=n(742),s=n(741);n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){}return t=c([n.i(o.NgModule)({declarations:[r.a,a.a,s.a],imports:[i.a],providers:[],bootstrap:[r.a]}),l("design:paramtypes",[])],t)}()},741:function(t,e,n){"use strict";var i=n(1),o=n(690);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return r([n.i(i.Input)(),a("design:type","function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object)],t.prototype,"book",void 0),t=r([n.i(i.Component)({selector:"a.bm-book-list-item",template:n(802)}),a("design:paramtypes",[])],t);var e}()},742:function(t,e,n){"use strict";var i=n(1),o=n(690);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t.prototype.ngOnInit=function(){this.books=[new o.a("9783864903571","Angular 2",["Johannes Hoppe","Danny Koppenhagen","Ferdinand Malcher","Gregor Woiwode"],new Date(2016,5,26),"Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen",5,[new o.b("http://goo.gl/nDi0Fc","Buchcover")],"Dieses Buch vermittelt einen Schnelleinstieg in Angular 2..."),new o.a("9783864901546","AngularJS",["Philipp Tarasiewicz","Robin Böhm"],new Date(2014,5,29),"Eine praktische Einführung",5,[new o.b("https://goo.gl/Y5lFVE","Buchcover")],"Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...")]},t=r([n.i(i.Component)({selector:"bm-book-list",template:n(803)}),a("design:paramtypes",[])],t)}()},743:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t,e){this.url=t,this.title=e}return t}()},744:function(t,e,n){"use strict";var i=n(78),o=n(1),r=n(691),a=n(745);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t=s([n.i(o.NgModule)({declarations:[r.a,a.a],imports:[i.a],providers:[],bootstrap:[r.a]}),c("design:paramtypes",[])],t)}()},745:function(t,e,n){"use strict";var i=n(1),o=n(746);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t.prototype.ngOnInit=function(){this.books=[new o.a("9783864903571","Angular 2",["Johannes Hoppe","Danny Koppenhagen","Ferdinand Malcher","Gregor Woiwode"],new Date(2016,5,26),"Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen",5,[new o.b("http://goo.gl/nDi0Fc","Buchcover")],"Dieses Buch vermittelt einen Schnelleinstieg in Angular 2..."),new o.a("9783864901546","AngularJS",["Philipp Tarasiewicz","Robin Böhm"],new Date(2014,5,29),"Eine praktische Einführung",5,[new o.b("https://goo.gl/Y5lFVE","Buchcover")],"Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...")]},t=r([n.i(i.Component)({selector:"bm-book-list",template:n(804)}),a("design:paramtypes",[])],t)}()},746:function(t,e,n){"use strict";var i=n(747);n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i.a});var o=function(){function t(t,e,n,i,o,r,a,s){this.isbn=t,this.title=e,this.authors=n,this.published=i,this.subtitle=o,this.rating=r,this.thumbnails=a,this.description=s}return t}()},747:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t,e){this.url=t,this.title=e}return t}()},748:function(t,e,n){"use strict";var i=n(1),o=n(185),r=n(692),a=n(691),s=n(689),c=n(688);n.d(e,"a",function(){return d});var l=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=[{path:"",component:r.a,children:[{path:"",redirectTo:"book-list",pathMatch:"full"},{path:"book-list",component:a.a},{path:"book-list-refactored",component:s.a},{path:"book-details",component:c.a}]}],d=function(){function t(){}return t=l([n.i(i.NgModule)({imports:[o.a.forChild(f)],exports:[o.a],providers:[]}),u("design:paramtypes",[])],t)}()},799:function(t,e){t.exports='<div class="ui grid" *ngIf="book">\n  <div class="four wide column">\n    <img class="ui large image" [src]="book.thumbnails[0].url">\n  </div>\n  <div class="twelve wide column">\n    <h1 class="ui header">{{ book.title }}</h1>\n    <h3 class="ui header">{{ book.subtitle }}</h3>\n    <div class="ui divider"></div>\n    <div class="ui grid">\n      <div class="four wide column">\n        <h4 class="ui header">Autoren</h4>\n        <span *ngFor="let author of book.authors; let l=last">\n          {{ author }}<span *ngIf="!l">, </span>\n        </span>\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">ISBN</h4>\n        {{ book.isbn }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Erschienen</h4>\n        {{ book.published }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Rating</h4>\n        <i *ngFor="let i of getRating(book.rating)" class="yellow star icon"></i>\n      </div>\n    </div>\n  </div>\n  <div class="sixteen wide column">\n    <h3 class="ui header">Beschreibung</h3>\n    {{ book.description }}\n  </div>\n  <div class="sixteen wide column">\n    <div class="ui small images">\n      <img *ngFor="let thumbnail of book.thumbnails" [src]="thumbnail.url">\n    </div>\n  </div>\n</div>\n\n<button (click)="showBookList()" class="ui red button">Zurück zur Buchliste</button>\n'},800:function(t,e){t.exports='<img class="ui tiny image" [src]="book?.thumbnails && book?.thumbnails[0]?.url">\n<div class="content">\n  <div class="header">{{ book.title }}</div>\n  <div class="description"> {{ book.subtitle }} </div>\n  <div class="metadata">\n    <span *ngFor="let author of book.authors; let l=last">\n      {{ author }}<span *ngIf="!l">, </span>\n    </span>\n  </div>\n  <div class="extra">ISBN {{ book.isbn }}</div>\n</div>\n'},801:function(t,e){t.exports='<div class="ui middle aligned selection divided list">\n  <a class="bm-book-list-item item"\n      *ngFor="let b of books" [book]="b"\n      (click)="showDetails(b)">\n  </a>\n</div>\n'},802:function(t,e){t.exports='<img class="ui tiny image" [src]="book?.thumbnails && book?.thumbnails[0]?.url">\n<div class="content">\n  <div class="header">{{ book.title }}</div>\n  <div class="description"> {{ book.subtitle }} </div>\n  <div class="metadata">\n    <span *ngFor="let author of book.authors; let l=last">\n      {{ author }}<span *ngIf="!l">, </span>\n    </span>\n  </div>\n  <div class="extra">ISBN {{ book.isbn }}</div>\n</div>\n'},803:function(t,e){t.exports='<div class="ui middle aligned selection divided list">\n  <a class="bm-book-list-item item" *ngFor="let b of books" [book]="b"></a>\n</div>\n'},804:function(t,e){t.exports='<div class="ui middle aligned selection divided list">\n  <a *ngFor="let book of books" class="item">\n    <img class="ui tiny image" [src]="book?.thumbnails && book?.thumbnails[0]?.url">\n    <div class="content">\n      <div class="header">{{ book.title }}</div>\n      <div class="description"> {{ book.subtitle }} </div>\n      <div class="metadata">\n        <span *ngFor="let author of book.authors; let l=last">\n          {{ author }}<span *ngIf="!l">, </span>\n        </span>\n      </div>\n      <div class="extra">ISBN {{ book.isbn }}</div>\n    </div>\n  </a>\n</div>\n'}});