import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from '@auth0/auth0-angular'
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, AuthButtonComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'golfer-geek.us.auth0.com',
      clientId: 'DqDFsmpuW5RPgFzWkE9OR7XBsOATBxr1',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
