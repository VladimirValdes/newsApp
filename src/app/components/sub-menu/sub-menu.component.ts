import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  public opt = [
    {
      name: 'All',
      sortBy: 'publishedAt',
      active: false
    },
    {
      name: 'Relevancy',
      sortBy: 'relevancy',
      active: false

    },
    {
      name: 'Popularity',
      sortBy: 'Popularity',
      active: false

    }
  ]

  
  public activeLink = false;

  @Input() category: string = '';
  @Output() news = new EventEmitter<string[]>();

  constructor( private newsService: NewsService) { }

  ngOnInit(): void {

    // Unsubscribe here !!!!!
    this.newsService.newCategory.subscribe( category => {

        const activeOpt = this.opt.filter( el => el.active === true);


        const { sortBy } = activeOpt[0];
        this.getNews(category, sortBy, );

    });

    this.getNews(this.category);

  }

  
  getNews( category: string, sortBy = 'publishedAt') {

    this.opt.forEach( el => ( el.sortBy == sortBy) ? el.active = true : el.active = false );

    this.activeLink = true;
    this.newsService.getNewsByCategory(category, sortBy, 9 ).subscribe( news  => {
      this.news.emit(news);

      console.log(`-----${ category } sortBy ${ sortBy }---`)

    })
}

}


