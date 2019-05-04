import { Component } from '@angular/core';

@Component({
    selector:"all-songs",
    templateUrl:"./all-songs.component.html"
})
export class AllSongsComponent{

    songs= [
        { 
            id:101,
            image: "assets/images/v1.jpg",
            songName: "one"    
        },
        { 
            id:102,
            image: "assets/images/v2.jpg",
            songName: "two"    
        },
        { 
            id:103,
            image: "assets/images/v3.jpg",
            songName: "three"    
        },
        { 
            id:104,
            image: "assets/images/v4.jpg",
            songName: "four"    
        },
        { 
            id:105,
            image: "assets/images/v5.jpg",
            songName: "five"    
        },
        { 
            id:106,
            image: "assets/images/v1.jpg",
            songName: "six"    
        },
        { 
            id:107,
            image: "assets/images/v2.jpg",
            songName: "seven"    
        },
        { 
            id:108,
            image: "assets/images/v3.jpg",
            songName: "eight"    
        },
        { 
            id:109,
            image: "assets/images/v4.jpg",
            songName: "nine"    
        },
        { 
            id:110,
            image: "assets/images/v5.jpg",
            songName: "ten"    
        }
        
    ]
}