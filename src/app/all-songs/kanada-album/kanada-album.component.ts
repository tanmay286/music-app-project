import { Component } from '@angular/core';

@Component({
    selector:"kanada-album",
    templateUrl:"./kanada-album.component.html"
})
export class KanadaAlbumComponent{
    kanadaalbum=[
        {
            id:101,
            image:"assets/images/Kannad/k1.jpg",
            albumName: "Kanada1"

        },
        {
            id:102,
            image:"assets/images/Kannad/k2.jpg",
            albumName: "Kanada2"

        }


    ]



}