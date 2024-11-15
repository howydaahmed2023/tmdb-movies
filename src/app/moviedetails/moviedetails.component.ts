import { Component, OnInit} from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { movieDetail } from '../interface/tmdb';
import {NgbRatingConfig,NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { CastSlideShowComponent } from '../shared/cast-slide-show/cast-slide-show.component';
import { Cast } from '../interface/credit';

@Component({
  selector: 'app-moviedetails',
  standalone: true,
  imports: [CommonModule,RouterLink,NgbRatingModule,CastSlideShowComponent],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit {

   moviedata:any |movieDetail[];
   cast:Cast[]=[];
constructor(private api:TmdbService,private activatedRoute:ActivatedRoute, private router:Router,config: NgbRatingConfig){
   // customize default values of ratings used by this component tree
  config.max = 10;
  config.readonly = true;
}
  ngOnInit(): void {
   const {id} = this.activatedRoute.snapshot.params;
//console.log (id)
this.api.getMovieDetail(id).subscribe((movie:any)=>{
  //console.log(movie)
  if(!movie){
    this.router.navigateByUrl('/')
    return
  }
  this.moviedata = movie 
}
  )



  this.api.getCast(id).subscribe(cast=>{
    this.cast=cast;
    console.log(this.cast)
  }
   )
  }
   
    
      
    
      

 

}
