import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  swiper!: Swiper;

  @Input() category: string = '';
  news: any[] = [];

  constructor( private newsService: NewsService) { }



  ngOnInit(): void {
    this.newsService.newCategory.subscribe( category => {
         this.getNews( category );
    })

    this.getNews( this.category );
  }

  ngAfterViewInit(): void {

    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      observer: true,
      observeParents: true
    
      // // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    
      // // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
    
  }

  getNews( category: string) {
    this.newsService.getNewsByCategory(category).subscribe( news  => {
      this.news = news;

      console.log( this.news );
    })
}




}
