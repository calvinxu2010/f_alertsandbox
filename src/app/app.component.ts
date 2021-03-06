import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <img id="logo" align = left src="../assets/image/logo.png"/>
    <h1>{{title}}</h1>
    <div class="panel panel-primary login-form" ng-controller="loginCtrl">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12" >
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <form class="form-horizontal" name="form">
              <div class="form-group">
                <label class="col-md-2 control-lable">User Email</label>
                <div class="col-md-10">
                  <input type="email" class="form-control" placeholder="Please enter your email address" ng-model="userInfo.email" name="email" required>
                  <span ng-show="form.email.$error.required">Email required</span>
                  <br/>
                  <span ng-show="form.email.$error.email">Email format is wrong</span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-2 control-lable">Password</label>
                <div class="col-md-10">
                  <input type="password" class="form-control" placeholder="Only letters, Numbers, underscores, and cannot begin with Numbers" ng-model="userInfo.password" required>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-10 col-md-offset-2">
                  <a ui-sref="booklist({bookType:0})" class="btn btn-success" ng-disabled="form.$invalid">Login</a>
                  <button class="btn btn-default" ng-click="setFormData()" ng-disabled="form.$invalid">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <!--<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/alert" routerLinkActive="active">Alert</a>-->
      <a routerLink="/report" routerLinkActive="active">Report</a>
      <a routerLink="/configuration" routerLinkActive="active">Configuration</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIU AlertSandBox';
}
