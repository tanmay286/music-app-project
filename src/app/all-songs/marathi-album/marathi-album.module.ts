import { NgModule } from "@angular/core";
import { MarathiAlbumComponent } from './mararthi-album.component';
import { BrowserModule } from '@angular/platform-browser';
// import { marathiAlbumRoutes } from './marathi-album.routes';
// import { RouterModule } from '@angular/router';

@NgModule({

    declarations:[
        MarathiAlbumComponent
    ],
    imports:[
       BrowserModule,
    //    RouterModule.forChild(marathiAlbumRoutes)
    ],
    exports:[
        MarathiAlbumComponent,
        // RouterModule
    ]


})

export class MarathiAlbumModule{
    
    
}