import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	public products : any = [];
	public grandTotal !: number;
	constructor(private cs : CartService) { }
  
	ngOnInit(): void {
	  this.cs.getProducts()
	  .subscribe(res=>{
		this.products = res;
		this.grandTotal = this.cs.getTotal();
	  })
	}
	removeItem(item: any){
	  this.cs.removeCartItem(item);
	}
	emptycart(){
	  this.cs.removeAllCart();
	}

}
