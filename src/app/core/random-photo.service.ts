import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomPhotoService {

  constructor(private httpClient: HttpClient) { }

  getPhoto(): Observable<Result[]>{
    const url = `https://api.unsplash.com/search/photos?page=1&query=office`;
    const httpOptions = {
      headers: new HttpHeaders({
        //bypass the service worker entirely and let the browser handle the request instead
        //ngsw-bypass
        Authorization: 'Client-ID LODOroFylN2O0dyrr8CBsYUqMYVrR-qIy-HSBs-RPok'
      })
    };
    return this.httpClient.get<Result[]>(url, httpOptions ).pipe(
      pluck('results')
    );
  }
}

export interface Result {
  urls: {
    thumb: string;
  }
}
