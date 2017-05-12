import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <img id="logo" align = left src="../assets/image/logo.png"/>
    <h1>{{title}}</h1>
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
