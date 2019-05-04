import { Component } from '@angular/core';

@Component({
    selector:"hindi-album",
    templateUrl:"./hindi-album.component.html"
})
export class HindiAlbumComponent{
    hindialbum=[
        {
            id:101,
            image:"assets/images/Hindi/h1.jpg",
            albumName: "Hindi1"

        },
        {
            id:102,
            image:"assets/images/Hindi/h2.jpg",
            albumName: "Hindi2"

        },
        {
            id:103,
            image:"assets/images/Hindi/h3.jpg",
            albumName: "Hindi3"

        },
        {
            id:104,
            image:"assets/images/Hindi/h4.jpg",
            albumName:"Hindi4"
        }


    ]



}