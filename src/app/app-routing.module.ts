import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout/layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
    import('./core/components/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'main',
    component: LayoutComponent,
    children: [
      {
        path: 'communities',
        loadChildren: () =>
          import('./core/components/layout/pages/communities/communities.module').then((m) => m.CommunitiesModule)
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./core/components/layout/pages/events/events.module').then((m) => m.EventsModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./core/components/layout/pages/profile/profile.module').then((m) => m.ProfileModule)
      },
      {
        path: '',
        redirectTo: 'communities',
        pathMatch: 'full'
      }]
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
