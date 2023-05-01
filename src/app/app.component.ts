import { Component } from '@angular/core';
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptor';


  // This is used for the inject the service for the api data.
  constructor(private apiData:GetDataService){}

  results:any;

  ngOnInit(){
    // This is used for the get data from the api and store into local variable and render it.
    this.apiData.getData().subscribe(res=>{
      this.results = res;
    })
  }
}
