import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HindiAlbumComponent } from './hindi-album.component';

@NgModule({
    declarations:[
        HindiAlbumComponent
    ],

    imports:[
        BrowserModule
    ],

    exports:[
        HindiAlbumComponent
    ]

})
export class HindiAlbumModule{

}