import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer keyxDH39lgv0bvKk6`)
  }

  SERVER_URL: string = "https://api.airtable.com/v0/appXMxi8i9gF2ZjiC/Project%20Table/";
  constructor(private httpClient: HttpClient) { }

  public getProperties(){ 
       return this.httpClient.get(this.SERVER_URL, this.header);
  }
  public createProperty(propertyData: any){
      return this.httpClient.post(this.SERVER_URL, propertyData, this.header);
  }

}
