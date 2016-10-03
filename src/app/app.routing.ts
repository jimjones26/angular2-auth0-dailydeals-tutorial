import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_services/auth-guard.service';

import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/deals',
    pathMatch: 'full'
  },
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent,
    canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [PublicDealsComponent, PrivateDealsComponent];
