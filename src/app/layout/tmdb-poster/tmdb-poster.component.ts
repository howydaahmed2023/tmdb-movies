import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../../interface/tmdbmovies';
import { Router, RouterLink } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tmdb-poster',
  standalone: true,
  imports: [CommonModule,RouterLink,NgbRatingModule],
  templateUrl: './tmdb-poster.component.html',
  styleUrl: './tmdb-poster.component.css'
})
export class TmdbPosterComponent implements OnInit {
  @Input() movies?:Movie[];
 
  constructor( private router: Router) {}
    // customize default values of ratings used by this component tree
  
  

  ngOnInit() {
    console.log(this.movies)
  }

  getStars(voteAverage:number){

    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);
  
  }
  onMovieClick(movie:Movie){
    this.router.navigate( ['/moviedetail',movie.id] )
  }
}
