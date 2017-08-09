import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";

// import { SigninComponent } from "./auth/signin.component";
// import { SignupComponent } from "./auth/signup.component";
// import { LogoutComponent } from "./auth/logout.component";

import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";

import { AuthService } from "./auth/auth.service";

import { routing } from "./app.routing";

import { MessageModule } from "./messages/message.module";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [BrowserModule, routing, HttpModule, MessageModule],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}