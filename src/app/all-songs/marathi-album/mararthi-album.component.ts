import { Component } from '@angular/core';

@Component({

    selector:"marathi-album",
    templateUrl:"./marathi-album.component.html"

})
export class MarathiAlbumComponent{

    marathialbum=[
        {
            id:101,
            image:"assets/images/Marathi/m1.jpg",
            albumName: "Marathi1"

        },
        {
            id:102,
            image:"assets/images/Marathi/m2.jpg",
            albumName: "Marathi2"

        },
        {
            id:103,
            image:"assets/images/Marathi/m3.jpg",
            albumName: "Marathi3"

        },


    ]
}