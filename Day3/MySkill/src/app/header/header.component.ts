import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  .container{
    clear:both;
    overflow:hidden;
    margin-left:15px ;
  }
  h2 {
      float: left;
      color: rgb(1, 1, 25);
      font-size: 28px;
  }
  nav{
    float:left;
  }
  
  ul li{
    display: inline-block; padding:10px;
    font-size:20px; font-family:raleway;
  }
  ul li:hover{
    color:rgb(16, 43, 224);
    
  }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
