import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() notify = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('auth') == '1')
      this.router.navigate(['/profile']);
  }
  submit(f: NgForm) {
    let login: String = f.value.login;
    let password: String = f.value.password;
    
    if(login == "Admin" && password == "12345")
    {
      window.alert("Ok");

      window.localStorage.setItem('auth', '1');
      this.router.navigate(['/profile']);
    }
    else
      window.alert("Fail");
    f.reset();
  }
}
