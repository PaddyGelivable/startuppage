import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseService } from './shared/base-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'startpage';

  constructor(private translate: TranslateService,
    baseService: BaseService) {
      // fallback language
      translate.setDefaultLang('en-US');
      translate.use(baseService.getLanguage());
}
}
