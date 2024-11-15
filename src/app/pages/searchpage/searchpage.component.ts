import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../interface/tmdbmovies';
import { CommonModule } from '@angular/common';
import { TmdbPosterComponent } from '../../layout/tmdb-poster/tmdb-poster.component';

@Component({
  selector: 'app-searchpage',
  standalone: true,
  imports: [CommonModule,TmdbPosterComponent],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.css'
})
export class SearchpageComponent implements OnInit {
  text:string= '';
  movies:Movie[]=[];
 noexist:boolean=false;
  constructor(private activatedRoute : ActivatedRoute ,private api : TmdbService){}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
    console.log(params['text'])
    this.text=params['text'];

    this.api.getmovieSearch(params['text']).subscribe((movies)=>{
      if(movies.length > 0){
        this.movies=movies ;
       // console.log(this.movies);
        this.noexist = false
      }else{
        this.noexist = true;
      }
     
      
    })
   })
  }
  

}
