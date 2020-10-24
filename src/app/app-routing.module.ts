import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { PlatformComponent } from './platform/platform.component';

const routes: Routes = [{
    path: '',
    canActivateChild: [MetaGuard],
    children: [
      {
        path: '',
        component: PlatformComponent,
        data: {
          meta: {
            title: 'Sweet home',
            description: 'Home, home sweet home... and what?'
          }
        }
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
