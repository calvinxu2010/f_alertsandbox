"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'FIU AlertSandBox';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <img id=\"logo\" align = left src=\"../assets/image/logo.png\"/>\n    <h1>{{title}}</h1>\n    <div class=\"panel panel-primary login-form\" ng-controller=\"loginCtrl\">\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" >\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <form class=\"form-horizontal\" name=\"form\">\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-lable\">User Email</label>\n                <div class=\"col-md-10\">\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Please enter your email address\" ng-model=\"userInfo.email\" name=\"email\" required>\n                  <span ng-show=\"form.email.$error.required\">Email required</span>\n                  <br/>\n                  <span ng-show=\"form.email.$error.email\">Email format is wrong</span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-lable\">Password</label>\n                <div class=\"col-md-10\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Only letters, Numbers, underscores, and cannot begin with Numbers\" ng-model=\"userInfo.password\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-10 col-md-offset-2\">\n                  <a ui-sref=\"booklist({bookType:0})\" class=\"btn btn-success\" ng-disabled=\"form.$invalid\">Login</a>\n                  <button class=\"btn btn-default\" ng-click=\"setFormData()\" ng-disabled=\"form.$invalid\">\n                    Register\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <nav>\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      <!--<a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n      <a routerLink=\"/alert\" routerLinkActive=\"active\">Alert</a>-->\n      <a routerLink=\"/report\" routerLinkActive=\"active\">Report</a>\n      <a routerLink=\"/configuration\" routerLinkActive=\"active\">Configuration</a>\n      <a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map