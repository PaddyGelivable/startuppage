import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ExtendedWindow } from './shared/extended-window';
import { SolutionproviderService } from './shared/solutionprovider.service';
import { BaseService } from './shared/base-service';
import { MockServiceService } from './shared/mock-service.service';

const serviceFactory = () => {
  const backendClient = (window as ExtendedWindow).cefCustomObject;
  const enviormentIsDestop = backendClient != null;

  return (enviormentIsDestop) ? new SolutionproviderService(backendClient) : new MockServiceService();
};

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: BaseService, useFactory: serviceFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
