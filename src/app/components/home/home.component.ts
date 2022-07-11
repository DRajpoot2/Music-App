import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artist_list=["Kailash Kher","Teri Deewani", "2007", "Kailash Kher", "*****"]
  
  constructor() { }

  ngOnInit() {
  }

}
