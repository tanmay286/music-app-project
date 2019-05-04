import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllSongsComponent } from './all-songs.component';
import { MarathiAlbumComponent } from './marathi-album/mararthi-album.component';

@NgModule({
    declarations: [
        AllSongsComponent,
      ],
      imports: [
        BrowserModule
      ],
      providers: [],
      exports:[
        AllSongsComponent,
      ],
      bootstrap: []
})
export class AllSongsModule{}