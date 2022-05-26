import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	private url = 'http://localhost:8000/produit';
 
	constructor(private httpClient: HttpClient) { }

   getAll(): Observable<any> {
		return this.httpClient.get(this.url);
	  }

	// getByCategory(category:string):any{
	// 	if(category == "All"){
	// 		return this.getAll();
	// 	}
	// 	else{
	// 		return this.getAll().filter(p=>p.category?includes(category));
	// 	}
	// }
}
