import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, Observer } from 'rxjs';
import { readFileSync } from 'fs';

export function universalLoader(): TranslateLoader {
  return {
    getTranslation: (lang: string) => {
      return new Observable((observer: Observer<object>) => {
        observer.next(JSON.parse(readFileSync(`./dist/ssr-starter/browser/assets/i18n/${lang}.json`, 'utf8')));
        observer.complete();
      });
    }
  } as TranslateLoader;
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: universalLoader }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
