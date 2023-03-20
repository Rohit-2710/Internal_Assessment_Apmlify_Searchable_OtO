import { Component, OnInit } from '@angular/core';
import { ZenObservable } from 'zen-observable-ts';
import { APIService } from './API.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amplifyApp';
  constructor(private api:APIService){}
  
}
