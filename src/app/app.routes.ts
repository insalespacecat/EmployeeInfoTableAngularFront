import {RouterModule, Routes} from '@angular/router';
import {InfoViewComponent} from './components/info-view/info-view.component';

const routes: Routes = [
  {
    path: '', component: InfoViewComponent
  },
  {
    path: 'edit', component: InfoViewComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
