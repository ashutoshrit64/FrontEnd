import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  uploadImage(arg0: string, value: any) {
    throw new Error("Method not implemented.");
  }
  baseurl = environment.baseUrl;
  basurlNotes = environment.baseUrlNotes;
  constructor(private http: HttpClient) { }
 

  public imageRequest(url: any, file): any {
    //  let formData: FormData = new FormData();

    // console.log('data--->',file);
    // console.log('url-->', url);
    // formData.append('File',file);
    // console.log("data====",formData);
    
    return this.http.post(this.baseurl + url,file);
  }


  public postRequest(url: any, data: any): any {
    console.log('data--->', data);
    console.log('url-->', url);

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
    console.log('data--->', url);
    return this.http.get(this.baseurl + url);
  }
  public forgetRequest(url: any, data: any): any {
    return this.http.get(this.baseurl + url);
  }




}
