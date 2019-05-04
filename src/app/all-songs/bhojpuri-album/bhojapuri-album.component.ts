import { Component } from '@angular/core';

@Component({
    selector:"bhojpuri-album",
    templateUrl:"./bhojpuri-album.component.html"
})
export class BhojpuriAlbumComponent{
    bhojpurialbum=[
        {
            id:101,
            image:"assets/images/Bhojpuri/b1.jpg",
            albumName: "Telugu1"

        },
        {
            id:102,
            image:"assets/images/Bhojpuri/b2.jpg",
            albumName: "Telugu2"

        }
       

    ]

}