import { Component } from '@angular/core';

@Component({
    selector:"telugu-album",
    templateUrl:"./telugu-album.component.html"
})
export class TeluguAlbumComponent{
    telugualbum=[
        {
            id:101,
            image:"assets/images/Telugu/t1.jpg",
            albumName: "Telugu1"

        },
        {
            id:102,
            image:"assets/images/Telugu/t2.jpg",
            albumName: "Telugu2"

        },
        {
            id:103,
            image:"assets/images/Telugu/t3.jpg",
            albumName: "Telugu3"

        },
        {
            id:104,
            image:"assets/images/Telugu/t4.jpg",
            albumName:"Telugu4"
        }

    ]

}