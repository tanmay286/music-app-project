import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { MarathiAlbumModule } from './all-songs/marathi-album/marathi-album.module';
import { AllSongsModule } from './all-songs/all-songs.module';
import { TeluguAlbumModule } from './all-songs/telugu-album/telugu-album.module';
import { HindiAlbumModule } from './all-songs/hindi-album/hindi-album.module';
import { GujaratAlbumModule } from './all-songs/gujarat-album/gujarat-album.module';
import { BhojpuriAlbumModule } from './all-songs/bhojpuri-album/bhojapuri-album.module';
import { KanadaAlbumModule } from './all-songs/kanada-album/kanada-album.module';
// import { appRoutes } from './app.routers';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent],

  imports: [
    BrowserModule,
    MainModule,
    AllSongsModule,
    MarathiAlbumModule,
    HindiAlbumModule,
    TeluguAlbumModule,
    GujaratAlbumModule,
    BhojpuriAlbumModule,
    KanadaAlbumModule,
    // RouterModule.forRoot(appRoutes)
  ]

  
 
})
export class AppModule { }
