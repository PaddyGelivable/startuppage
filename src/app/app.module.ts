import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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

const translateHttpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: BaseService, useFactory: serviceFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
