import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ApiModule,
  Configuration,
  ConfigurationParameters,
} from '@marketplace-monorepo/openapi';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth/auth.effects';
import { authReducer } from './state/auth/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const configurationFactory = () => {
  const configParams: ConfigurationParameters = {
    basePath: environment.apiBaseUrl,
  };
  return new Configuration(configParams);
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot(configurationFactory),
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
