import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'boards',
        pathMatch: 'full'
    },
    {
        path: 'boards',
        loadComponent: () => import('./pages/boards/boards.component').then(m => m.BoardsComponent)
    },
    {
        path: 'board',
        loadComponent: () => import('./pages/board/board.component').then(m => m.BoardComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent)
    },

];
