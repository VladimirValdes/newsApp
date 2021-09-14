import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public articles = [
    {
      source: {
        "id": null,
        "name": "New York Times"
      },
      author: "Aishvarya Kavi",
      title: "Justice Department Says U.S. Will ‘Protect’ Texas Women Seeking Abortions",
      description: "The statement from Attorney General Merrick B. Garland did not directly challenge a new Texas law that banned nearly all abortions in the state.",
      url: "https://www.nytimes.com/2021/09/06/us/texas-abortion-justice-dept-garland.html",
      urlToImage: "https://static01.nyt.com/images/2021/09/06/us/politics/06dc-dojtexas/06dc-dojtexas-facebookJumbo.jpg",
      publishedAt: "2021-09-06T22:13:13Z",
      content: "Mr. Garlands statement did not go into detail on what support from federal law enforcement for those seeking abortions would look like, though he said that the Justice Department had reached out to t… [+1588 chars]"
    },
    {
      source: {
        "id": null,
        "name": "New York Times"
      },
      author: "Dana Rubinstein",
      title: "'Executive Assistant #1' Says Cuomo 'Broke the Law'",
      description: "“What he did to me was a crime,” said Brittany Commisso, identified in a report from the state attorney general as “Executive Assistant #1.”",
      url: "https://www.nytimes.com/2021/08/08/nyregion/cuomo-executive-assistant-sexual-harassment.html",
      urlToImage: "https://static01.nyt.com/images/2021/08/08/business/08cuomo-accuser/08cuomo-accuser-facebookJumbo.jpg",
      publishedAt: "2021-08-10T17:15:10Z",
      content: "Ms. Commisso said Mr. Cuomo also kissed her repeatedly, including at least once on the lips, and rubbed her buttocks.\r\nOn Nov. 16, according to the report, one of Mr. Cuomos aides directed Ms. Commis… [+2209 chars]"
    },
    {
      source: {
        "id": "bbc-news",
        "name": "BBC News"
      },
      author: null,
      title: "Watch moment US military declares final flight out of Afghanistan",
      description: "Top US general reveals last US aircraft took off from Hamid Karzai Airport ahead of deadline for withdrawal.",
      url: "https://www.bbc.co.uk/news/av/world-us-canada-58389751",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/4A09/production/_120335981_p09tm2jq.jpg",
      publishedAt: "2021-08-30T21:44:40Z",
      content: "The last US aircraft has taken off from the Hamid Karzai Airport, Marine Corps General Kenneth McKenzie announced at a Pentagon briefing. \r\nThe flight departed just before midnight in Kabul on 31 Aug… [+69 chars]"
    },
    {
      source: {
        "id": "bbc-news",
        "name": "BBC News"
      },
      author: null,
      title: "Watch moment US military declares final flight out of Afghanistan",
      description: "Top US general reveals last US aircraft took off from Hamid Karzai Airport ahead of deadline for withdrawal.",
      url: "https://www.bbc.co.uk/news/av/world-us-canada-58389751",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/4A09/production/_120335981_p09tm2jq.jpg",
      publishedAt: "2021-08-30T21:44:40Z",
      content: "The last US aircraft has taken off from the Hamid Karzai Airport, Marine Corps General Kenneth McKenzie announced at a Pentagon briefing. \r\nThe flight departed just before midnight in Kabul on 31 Aug… [+69 chars]"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
