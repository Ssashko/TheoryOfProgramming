import { Component } from '@angular/core';
import { HeaderProperty, HeaderLink } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-personal-app';
  header_prop : HeaderProperty;
  constructor() {
    this.header_prop = new HeaderProperty("Main",[new HeaderLink("news","/news"), new HeaderLink("profile","/profile")]);
  }
}
