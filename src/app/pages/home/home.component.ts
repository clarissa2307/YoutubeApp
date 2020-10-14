import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private YoutubeService: YoutubeService) { }

  ngOnInit(){
   this.YoutubeService.getVideos()
       .subscribe( resp => {
         console.log( resp );
       })
  }

}
