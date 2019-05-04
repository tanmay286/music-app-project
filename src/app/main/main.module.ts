import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { MarathiAlbumModule } from '../all-songs/marathi-album/marathi-album.module';
import { RouterModule } from '@angular/router';

@NgModule({
   declarations:[
       MainComponent
   ],
   imports:[
    BrowserModule,
    // MarathiAlbumModule,
    // RouterModule.forChild(mainRoutes)
    
   ],
   exports:[
       MainComponent
    //    RouterModule
   ]
})
export class MainModule{

}