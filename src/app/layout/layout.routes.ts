import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const LAYOUT_ROUTES: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'boards',
          pathMatch: 'full'
        },
        {
          path: 'boards',
          loadChildren: () => import('@boards/boards.routes').then((m) => m.BOARDS_ROUTES),
        },
        {
          path: 'profile',
          loadChildren: () => import('@profile/profile.routes').then((m) => m.PROFILE_ROUTES),
        },
        {
          path: 'users',
          loadChildren: () => import('@users/users.routes').then((m) => m.USERS_ROUTES),
        },
      ],
    },
  ];