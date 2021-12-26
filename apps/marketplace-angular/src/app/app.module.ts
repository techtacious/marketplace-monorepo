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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
