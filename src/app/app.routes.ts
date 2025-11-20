import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: ":codeShareId",
        loadComponent: () => import('./layout/layout').then(m => m.Layout)
    },
    {
        path: "",
        loadComponent: () => import('./layout/layout').then(m => m.Layout)
    },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
