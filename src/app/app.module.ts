import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformComponent } from './platform/platform.component';
import { MetaLoader, MetaModule, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

export const HttpLoaderFactory = (httpClient: HttpClient) => new TranslateHttpLoader(httpClient);

export const MetaFactory = (translate: TranslateService) =>
  new MetaStaticLoader({
    callback: (key: string) => translate.get(key),
    pageTitlePositioning: PageTitlePositioning.AppendPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'ssr-starter',
  })

@NgModule({
  declarations: [
    AppComponent,
    PlatformComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: MetaFactory,
      deps: [TranslateService]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
