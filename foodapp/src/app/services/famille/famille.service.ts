import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {
	
	private url = 'http://localhost:8000/famille';
 
	constructor(private httpClient: HttpClient) { }

   getAll(): Observable<any> {
		return this.httpClient.get(this.url);
	  }
}

