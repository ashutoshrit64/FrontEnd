import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpnoteService {
  baseurl=environment.baseUrlNotes;
  constructor(private http: HttpClient) { }

  public postRequest(url: any, data: any): any {
    console.log('data--->', data);
    console.log('url-->',url);

    return this.http.post(this.baseurl + url, data);
  }
  public putRequest(url: any, data: any): any {
    console.log('data--->', data);
    return this.http.put(this.baseurl + url, data);

  }
  public deleteRequest(url: any): any {
    console.log('data--->', url);
    return this.http.delete(this.baseurl + url);
  }
  public getRequest(url: any): any {
    console.log('url--->', this.baseurl + url);
    return this.http.get(this.baseurl + url);
  }
  public forgetRequest(url: any, data: any): any {
    return this.http.get(this.baseurl + url);
  }
}
