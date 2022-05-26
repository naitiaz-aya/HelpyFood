import { Component, Injectable, OnInit } from '@angular/core';
import { FamilleService } from '../services/famille/famille.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})


export class MenuComponent implements OnInit {
 
	result: any = [];
  
  constructor(private fs: FamilleService
	  ) {}

  ngOnInit() {
    this.result = this.fs.getAll().subscribe(data => {
		this.result = data;
	});

	console.log(this.result);
	
  }


}
