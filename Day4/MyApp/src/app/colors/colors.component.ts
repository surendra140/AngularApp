import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  @Input('redColor') public red:any;
  @Input('greenColor') public green:any;
  @Input('blueColor') public blue:any;
  constructor() { }

  ngOnInit(): void {
  }

}
