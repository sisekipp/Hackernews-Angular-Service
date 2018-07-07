import {Routes} from '@angular/router';


export const appRoutes: Routes = [
  {
    path: 'top/:page',
    loadChildren: '../app/top/top.module#TopModule'
  },
  {
    path: 'new/:page',
    loadChildren: '../app/new/newest.module#NewestModule'
  },
  {
    path: 'show/:page',
    loadChildren: '../app/show/show.module#ShowModule'
  },
  {
    path: 'ask/:page',
    loadChildren: '../app/ask/ask.module#AskModule'
  },
  {
    path: 'jobs/:page',
    loadChildren: '../app/jobs/jobs.module#JobsModule'
  },
  { path: '',
    pathMatch: 'full',
    redirectTo: 'top/1'
  }
];
