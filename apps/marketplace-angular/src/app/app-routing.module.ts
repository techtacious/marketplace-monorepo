import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/landing/landing.module').then((m) => m.LandingModule),
      },
      {
        path: 'signin',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
