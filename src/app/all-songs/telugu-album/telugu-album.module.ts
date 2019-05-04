import { NgModule } from '@angular/core';
import { TeluguAlbumComponent } from './telugu-album.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations:[
        TeluguAlbumComponent
    ],

    imports:[
        BrowserModule
    ],

    exports :[
        TeluguAlbumComponent
    ]
})
export class TeluguAlbumModule{

}