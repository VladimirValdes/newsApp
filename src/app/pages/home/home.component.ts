import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {


  public newsCategories: any[] = [];

  constructor( private newsService: NewsService,
               private sidebarService: SidebarService) { }

  ngOnInit(): void {

    this.sidebarService.menu.forEach( (opt, index ) => {
      this.newsService.getNewsByCategory(opt.titulo, '',4).subscribe ( articles => {

        const category = {
          titulo: opt.titulo,
          articles
        }
        this.newsCategories.splice( index, 0, category );
      })

    });

    console.log(this.newsCategories);

  }

}
