import { Component, OnInit, Input } from '@angular/core';
export class HeaderLink {

  constructor(public name: String,public src: String) {

  };
}
export class HeaderProperty {
  constructor(
    public title: string, 
    public links: Array<HeaderLink>
    ) {

  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input("header-property") property : HeaderProperty;
  imageSrc : String = '/assets/images/header/'
  constructor() { } 

  ngOnInit(): void {
  }

}
