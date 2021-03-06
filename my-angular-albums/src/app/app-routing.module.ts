import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddAlbumComponent } from './albums/add-album/add-album.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "albums", // Angular 8 Notation with Promise
    loadChildren: () => import('./albums/albums.module')
                        .then(mod => {
                        console.log('in promise loadChildren');
                        return mod.AlbumsModule;
                        }),
  },
  { path: "add-album", component: AddAlbumComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
