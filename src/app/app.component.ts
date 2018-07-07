import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-light bg-light navbar-expand">
      <a class="navbar-brand" href="#">
        <img src="/assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        Angular - Service Hackernews
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" routerLink="top/1">Top</a>
          <a class="nav-item nav-link" routerLink="new/1">New</a>
          <a class="nav-item nav-link" routerLink="show/1">Show</a>
          <a class="nav-item nav-link" routerLink="ask/1">Ask</a>
          <a class="nav-item nav-link" routerLink="jobs/1">Jobs</a>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
