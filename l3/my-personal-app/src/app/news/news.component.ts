import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/news.service';
import { NewsItemProperty } from '../news-item/news-item.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  listNews : Array<NewsItemProperty> = [];
  imageSrc : String = '/assets/images/news/';
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {

    this.newsService.getNewsItems().subscribe(news => {
        JSON.parse(JSON.stringify(news)).forEach((el:any) => {
          
          this.listNews.push(new NewsItemProperty(this.imageSrc + el.image,el.title,el.text));

        });
      });
    };

}

