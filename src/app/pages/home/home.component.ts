import { AfterViewInit, Component, HostListener, OnInit, inject } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import { movieDetail } from '../../interface/tmdb';
import { Router, RouterLink } from '@angular/router';
import { Movie } from '../../interface/tmdbmovies';

import Swiper from 'swiper';
import { TmdbPosterComponent } from '../../layout/tmdb-poster/tmdb-poster.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,TmdbPosterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterViewInit {
 
  movies: Movie[]=[];
  loadedMoviesIds = new Set<number>()
  mySwiper?:Swiper;
private moviesrc = inject(TmdbService);
@HostListener('window:scroll',['$event'])
onScroll(){
  const pos= (document.documentElement.scrollTop || document.body.scrollTop)*1300
  const max= (document.documentElement.scrollHeight || document.body.scrollHeight)
  // console.log(pos,max)
  if(pos > max){
    //this.loadTmdb()
   // this.loadMoreMovies()
   if (this.moviesrc.tmdb) {return;}
   this.moviesrc.getTmdb().subscribe(movies=>{

     this.movies.push(...movies);


   })
  }
}
constructor(private router:Router,moviesrc:TmdbService){}
ngOnInit(): void {
 this.loadTmdb();

}
ngAfterViewInit(): void {
  this.mySwiper = new Swiper('.swiper',{
    loop:true
  });
}

loadTmdb(){
  this.moviesrc.getTmdb().subscribe(
    (res)=>{
    //   console.log(res)
      this.movies = res 
      this.updateLoadedMovieIds();
     
    }
  )
}
//loadMoreMovies(){
  //this.moviesrc.getTmdb().subscribe(
    //(res)=>{
    //  const newMovies = res.filter(movie=>!this.loadedMoviesIds.has(movie.id));
    //  this.movies.push(...newMovies);
    //  this.updateLoadedMovieIds()
     
  //  })
  //  }
    updateLoadedMovieIds(){
      this.movies.forEach(movie=>this.loadedMoviesIds.add(movie.id));
    }

onSlidePrev(){
  this.mySwiper?.slidePrev();
}

onSlideNext(){
  this.mySwiper?.slideNext();
}


onMovieCLick(movie:Movie){
  this.router.navigate( ['/moviedetail',movie.id] )
}
ngOnDestroy(){
  this.moviesrc.resetTmdbpage();
}
}