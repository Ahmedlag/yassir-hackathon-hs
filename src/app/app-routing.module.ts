import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrance',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'entrance',
    loadChildren: () => import('./pages/entrance/entrance.module').then( m => m.EntrancePageModule)
  },
  {
    path: 'flow',
    loadChildren: () => import('./pages/flow/flow.module').then( m => m.FlowPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'done',
    loadChildren: () => import('./pages/done/done.module').then( m => m.DonePageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./pages/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'request-details',
    loadChildren: () => import('./pages/request-details/request-details.module').then( m => m.RequestDetailsPageModule)
  },
  {
    path: 'jobber-details',
    loadChildren: () => import('./pages/jobber-details/jobber-details.module').then( m => m.JobberDetailsPageModule)
  },
  {
    path: 'hire',
    loadChildren: () => import('./pages/hire/hire.module').then( m => m.HirePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
