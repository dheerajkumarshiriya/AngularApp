import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginFormComponent } from './login-form/login-form.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { CountryComponent } from './country/country.component'
import { CasesComponent } from './country/cases/cases.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthGuard } from './auth-guard.service'
import { DetailsComponent } from './country/cases/details/details.component'

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'country',
    component: CountryComponent,
    children: [
      {
        path: 'cases',
        component: CasesComponent
      }
    ]
  },
  {
    path: 'case-details',
    component: DetailsComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
