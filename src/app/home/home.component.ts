import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
import {formatDate } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService:DataService) { }
  message:any;
  
  today= new Date();
  today_date = '';
  ngOnInit(): void {
    this.today_date = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.newBgColor();
  }

  //--change background color randomly
  bgcolor:any;
  newBgColor()
  {
    this.dataService.currentColor.subscribe(message=>{
      interval(3000).subscribe(x => {
        const colors_arr = ['#ffbf00','#8000ff','#FF0000','#bf00ff','#008000']
        this.bgcolor = colors_arr[Math.floor(Math.random() * colors_arr.length)];
        this.dataService.changeColor(this.bgcolor);
      })
    })

  }

}
