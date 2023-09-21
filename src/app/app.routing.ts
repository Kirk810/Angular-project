import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'pagina', component: PaginaComponent},
  {path: 'pagina/:nombre/:apellidos', component: PaginaComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
