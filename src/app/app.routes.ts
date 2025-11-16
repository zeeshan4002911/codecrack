import { Routes } from '@angular/router';
import { App } from './app';
// import { EditorView } from './editor-view/editor-view';
// import { DiffCheckerView } from './diff-checker-view/diff-checker-view';

export const routes: Routes = [
    { path: "", component: App },
    // { path: "editor", component: EditorView },
    // { path: "diff-checker", component: DiffCheckerView },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
