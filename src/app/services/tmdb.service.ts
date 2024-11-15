import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map, of, tap } from 'rxjs';
import { movieDetail } from '../interface/tmdb';
import { environment } from '../../environments/environment';
import { Movie, TmdbResponse } from '../interface/tmdbmovies';
import { Cast, Credits } from '../interface/credit';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiURL = 'https://api.themoviedb.org/3';
  private apiKEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGFjODU2NDdmNjNmYmJkM2VmNDZmZmExODk1YTY3YyIsInN1YiI6IjY1YjJiNDcxNmVlY2VlMDE0NzM0NTQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOCAlTYufMUERHYu2KXln36jq9Z_Tp5ItgkSUmmkmhw';
  private headers = {Authorization:`Bearer ${this.apiKEY}`} ;
  private tmdbpage = 1;
  public tmdb = false
  constructor(private http:HttpClient) { }
 //getMovies():Observable<Movie[]>{
  //if(this.tmdb){
   // return of([])
 // }
  //this.tmdb = true;
   //return this.http.get<Movie[]>('https://api.themoviedb.org/3//movie/now_playing?api_key=c0ac85647f63fbbd3ef46ffa1895a67c&language=en-US&page=1')
 //}
    
 // }
 // getTopRated():Observable<movieDetail>{
   // return this.http.get<movieDetail>('https://api.themoviedb.org/3/discover/movie?api_key=c0ac85647f63fbbd3ef46ffa1895a67c&language=en-US&page=1' );
 // }
 // getMoviebyId(){
  //  return this.http.get('https://api.themoviedb.org/3/movie?${id}&api_key=c0ac85647f63fbbd3ef46ffa1895a67c' )

 // }
  getTmdb():Observable<Movie[]>{
    if (this.tmdb) {
      return of([]);
    }

    this.tmdb=true;
    return this.http.get<TmdbResponse>(`${this.apiURL}/movie/now_playing?language=en-US&page=${this.tmdbpage}`,{headers:this.headers} ).pipe(
      map((response:any)=> response.results),
      tap(()=>{
        this.tmdbpage+=1;
        this.tmdb =false;
      })

    )
    
     
  } 
  //https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
  getmovieSearch(text:string):Observable<Movie[]>{
    return this.http.get<TmdbResponse>(`${this.apiURL}/search/movie?query=${text}&language=en-US&page=1`,{headers:this.headers}).pipe(
      map((response:any)=> response.results)
    )
   

  }
  getMovieDetail(id:string){
return this.http.get<movieDetail>(`${this.apiURL}/movie/${id}`,{headers:this.headers})
  }
  
  getCast(id:string):Observable<Cast[]>{
    return this.http.get<Credits>(`${this.apiURL}/movie/${id}/credits`,{headers:this.headers}).pipe(
      map(res=>res.cast)
    )

  }
  resetTmdbpage(){
    this.tmdbpage =1;
  }


} 

