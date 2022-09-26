import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiSharedModule } from '@bg-hoard/store/ui-shared';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MatCardModule, HttpClientModule, RouterModule.forRoot([
{
path: 'game/:id', // <---- HERE
loadChildren: () =>
    import('@bg-hoard/store/feature-game-detail').then(
            (m) => m.StoreFeatureGameDetailModule
          )
}
  ]), UiSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
