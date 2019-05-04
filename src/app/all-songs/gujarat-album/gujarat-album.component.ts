import { Component } from '@angular/core';

@Component({
    selector:"gujrat-album",
    templateUrl:"./gujarat-album.component.html"
})
export class GujaratAlbumComponent{
    gujratalbum=[
        {
            id:101,
            image:"assets/images/Gujarat/g1.jpg",
            albumName: "Gujarat1"

        },
        {
            id:102,
            image:"assets/images/Gujarat/g2.jpg",
            albumName: "Gujarat2"

        }


    ]



}