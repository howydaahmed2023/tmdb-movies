import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from '../../interface/credit';
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cast-slide-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cast-slide-show.component.html',
  styleUrl: './cast-slide-show.component.css'
})
export class CastSlideShowComponent implements OnInit, AfterViewInit {


@Input() cast:any |Cast[];

ngAfterViewInit() {
const swiper = new Swiper('.swiper',{
    slidesPerView:5.3,
    freeMode:true,
    spaceBetween:15
  })
}

ngOnInit(): void {
 console.log(this.cast)
}
}
