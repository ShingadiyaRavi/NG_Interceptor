import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  // This is the api url which have a dummy data....
  apiLink = 'https://jsonplaceholder.typicode.com/posts';

  // This is used for the get data of api so we can render that data into DOM.
  getData():Observable<any>{
    return this.http.get(this.apiLink);
  }

}
