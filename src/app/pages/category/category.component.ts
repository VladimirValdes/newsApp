import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public article = {
        source: {
          id: "ansa",
          name: "ANSA.it"
        },
        author: "ANSA.it",
        title: "Nigeria: oltre 70 studenti di liceo rapiti da uomini armati - Ultima Ora",
        description: "Uomini armati hanno rapito oltre 70 studenti di liceo nel nordovest della Nigeria. Lo riferisce la\r\npolizia. (ANSA)",
        url: "http://www.ansa.it/sito/notizie/topnews/2021/09/01/nigeria-oltre-70-studenti-di-liceo-rapiti-da-uomini-armati_c5fc00ea-d631-4687-af9a-b2cdeca1aaa7.html",
        urlToImage: "https://www.ansa.it/webimages/img_700/2015/4/15/e418b2996e01d3f56b929f7b65400780.jpg",
        publishedAt: "2021-09-01T19:06:00Z",
        content: "(ANSA) - ROMA, 01 SET - Uomini armati hanno rapito oltre 70\r\nstudenti di liceo nel nordovest della Nigeria. Lo riferisce la\r\npolizia.Gli aggressori hanno preso d'assalto una scuola superiore\r\nvicino … [+890 chars]"
    }

  constructor() { }

  ngOnInit(): void {
  }

}
