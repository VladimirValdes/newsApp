import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';
  oldSearchTerm: string = '';
  public news: any[] = [];

  constructor( private activeRoute: ActivatedRoute,
               private newsService: NewsService) { }


  ngOnInit(): void {
    this.activeRoute.params.subscribe( ({ term }) => {

      if ( term !== this.oldSearchTerm) {
        this.newsService.newCategory.emit(term);
      }

      this.searchTerm = term;
      this.oldSearchTerm = this.searchTerm;

     
      console.log(' I am here again')

  })
  }

}
