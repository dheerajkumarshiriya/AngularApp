import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ClickToClose } from './click-to-close-directive/click-to-close-directive'

import { LoggingService } from './logging.service'
import { HeaderComponent } from './header/header.component'
import { CountryComponent } from './country/country.component'
import { CasesComponent } from './country/cases/cases.component'
import { FooterComponent } from './footer/footer.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppRoutingModule } from './app-routing.module'
import { AuthGuard } from './auth-guard.service'
import { DetailsComponent } from './country/cases/details/details.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { EditCountryComponent } from './edit-country/edit-country.component'
import { EditService } from './edit-country.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    ClickToClose,
    HeaderComponent,
    CountryComponent,
    CasesComponent,
    FooterComponent,
    PageNotFoundComponent,
    DetailsComponent,
    SignUpComponent,
    EditCountryComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  providers: [LoggingService, AuthGuard, EditService],
  bootstrap: [AppComponent]
})
export class AppModule {}
