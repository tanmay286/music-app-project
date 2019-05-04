import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KanadaAlbumComponent } from './kanada-album.component';

@NgModule({
    declarations:[
        KanadaAlbumComponent
    ],

    imports:[
        BrowserModule
    ],

    exports:[
        KanadaAlbumComponent
    ]

})
export class KanadaAlbumModule{

}