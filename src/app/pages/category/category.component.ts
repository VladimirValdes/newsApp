import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  

  public news: any[] = [];
  public category = "";
  constructor( private activedRouter: ActivatedRoute,
               private newsService: NewsService) { }

  ngOnInit(): void {

    this.activedRouter.params.subscribe( ({ name }) => {
        this.category = name;

        this.newsService.newCategory.emit(this.category);
    })
  }


}
