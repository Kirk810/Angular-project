import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Mycomponent } from './components/my.component/my-component.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { MovieComponent } from './components/movie/movie.component';
import { EsParPipe } from './pipes/espar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Mycomponent,
    MoviesComponent,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    MovieComponent,
    EsParPipe,
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
