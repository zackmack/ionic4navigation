import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'next',
    loadChildren: () => import('./next/next.module').then( m => m.NextPageModule)
  },
  {
    path: 'next1',
    loadChildren: () => import('./next1/next1.module').then( m => m.Next1PageModule)
  },
  {
    path: 'next2',
    loadChildren: () => import('./next2/next2.module').then( m => m.Next2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
