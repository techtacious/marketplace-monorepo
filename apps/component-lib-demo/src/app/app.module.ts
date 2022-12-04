import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { ComponentLibModule } from '@marketplace-monorepo/component-lib';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DemoComponent],
  imports: [
    BrowserModule,
    ComponentLibModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
