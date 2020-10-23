import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en']);
    this.translateService.use('en');
  }
}
