import { Component } from '@angular/core';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssr-starter';
  constructor(private i18nService: I18nService) { }
}
