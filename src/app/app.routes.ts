import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';  // Si sidebar es una vista separada
import { HeaderComponent } from './header/header.component';  // Si header es una vista separada
import { FormComponent } from './new-vista/form/form.component';
import { PlayMusicComponent } from './new-vista/play-music/play-music.component';

export const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'header', component: HeaderComponent },  // Si header es una ruta individual
  { path: 'sidebar', component: SidebarComponent }, // Si sidebar es una ruta 
  {path:'inicio_de_sesion',component:FormComponent},
  {path:'play-music',component:PlayMusicComponent}
];



