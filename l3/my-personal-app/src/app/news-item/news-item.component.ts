import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
export class NewsItemProperty {
  constructor(
    public imageSrc: string, 
    public title: string, 
    public text: string
    ) {

  }
}

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input("news-property") property : NewsItemProperty;
  constructor() { }

  ngOnInit(): void {
  }

}
