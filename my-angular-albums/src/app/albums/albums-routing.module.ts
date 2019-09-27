import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AddAlbumComponent } from './add-album/add-album.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: AlbumListComponent },
  { path: "albums/:id", component: AlbumDetailsComponent },
  { path: "add-album", component: AddAlbumComponent }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlbumsRoutingModule { }
