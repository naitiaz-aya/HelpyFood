import { Component, OnInit } from '@angular/core';
import { FamilleService } from '../services/famille/famille.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
