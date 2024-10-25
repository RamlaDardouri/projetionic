import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./add-plat/add-plat.module').then((m) => m.AddPlatPageModule),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./detail-plat/detail-plat.module').then(
        (m) => m.DetailPlatPageModule
      ),
  },
  {
    path: 'update-plat/:id', // Add :id here to expect an ID parameter
    loadChildren: () => import('./update-plat/update-plat.module').then( m => m.UpdatePlatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
