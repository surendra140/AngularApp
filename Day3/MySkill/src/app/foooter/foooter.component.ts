import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foooter',
  templateUrl: './foooter.component.html',
  styles: [`

  footer {
    text-align: center;
    background-color: rgb(135, 173, 179);
    color: rgb(11, 3, 3);
    padding: 3px;
  }
  
  `]
})
export class FoooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
