import { Route } from '@angular/router';
import { FullComponent } from '@quarsso/material-pro/layouts/full/full.component';
import { navItems } from './pages/sidebar-data';
import { MsalGuard } from '@azure/msal-angular';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Accounting',
    component: FullComponent,
    canActivate: [MsalGuard],
    data: { menu: navItems },
    loadChildren: () =>
      import('./pages/pages.routes').then((m) => m.remoteRoutes),
  },
];
