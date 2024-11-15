import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  
  
  movieSearch(text:string){
text = text.trim();
if(text.length === 0){
  return;
}
this.router.navigate(['/searchpage',text])
  }


}
