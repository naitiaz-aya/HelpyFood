import { Component, Injectable, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { CartService } from '../services/cart/cart.service';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent implements OnInit {
	result: any = [];
	public filterCategory : any
  searchKey:string ="";
  
  constructor(private ps: ProductsService, private cs: CartService) { }

  ngOnInit() {
    this.result = this.ps.getAll().subscribe(data => {
		this.result = data;
		this.filterCategory = data;
		
		this.result.forEach((p:any) => {
			Object.assign(p,{quantity:1, total:p.prix});
		});
		console.log(this.result);
	});


	this.cs.search.subscribe((val:any)=>{
		this.searchKey = val;
	  })
  }

  addtocart(p: any){
    this.cs.addtoCart(p);
  }

  filter(category:string){
	  
    this.filterCategory = this.result.filter((p:any)=>{
		if(p.category == category || category==''){
		  return p;
		}
	  })
  }
}
