import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
  
  constructor(private dataService:DataService) { }
  bgcolor:any = '#999';
  ngOnInit(): void {
    this.dataService.currentColor.subscribe(message=>{
      this.bgcolor = message
    })
  }

}
