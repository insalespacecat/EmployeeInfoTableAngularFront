import {RouterModule, Routes} from '@angular/router';
import {InfoViewComponent} from './components/info-view/info-view.component';
import {AboutPageComponent} from './components/about-page/about-page.component';

const routes: Routes = [
  {
    path: '', component: InfoViewComponent,
  },
  {
    path: 'about', component: AboutPageComponent
  }

];

export const AppRoutes = RouterModule.forRoot(routes);
