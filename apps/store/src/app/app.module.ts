import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiSharedModule } from '@bg-hoard/ui-shared';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MatCardModule, UiSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
