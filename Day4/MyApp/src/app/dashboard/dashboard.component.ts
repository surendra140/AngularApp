import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public red = 'red';
  public green ='green';
  public blue = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

}
