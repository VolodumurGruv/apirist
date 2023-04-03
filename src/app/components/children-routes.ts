import { Route } from '@angular/router';

export const CHILDREN_ROUTES: Route[] = [
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'families',
    loadComponent: () =>
      import('./families/families.component').then((m) => m.FamiliesComponent),
  },
  {
    path: 'info',
    loadComponent: () =>
      import('./info/info.component').then((m) => m.InfoComponent),
  },
  {
    path: 'addfamily',
    loadComponent: () =>
      import('./add-family/add-family.component').then(
        (m) => m.AddFamilyComponent
      ),
  },
];
