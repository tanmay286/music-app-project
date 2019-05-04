import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BhojpuriAlbumComponent } from './bhojapuri-album.component';

@NgModule({
    declarations:[
        BhojpuriAlbumComponent
    ],

    imports:[
        BrowserModule
    ],

    exports :[
        BhojpuriAlbumComponent
    ]
})

export class BhojpuriAlbumModule{

}