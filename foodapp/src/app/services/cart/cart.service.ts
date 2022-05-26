import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProducts(product: any) {
    this.cartItemList.push(...product);
	this.productList.next(product);
  }

  addtoCart(product: any) {
	this.cartItemList.push(product);
	this.productList.next(this.cartItemList);
	this.getTotal();
	console.log(this.cartItemList);
  }

  getTotal() :number{
	let total = 0;
	this.cartItemList.forEach((item:any) => {
	  total += item.prix ;
	});
	return total;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
