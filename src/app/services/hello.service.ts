import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HelloService {

  private REST_API_SERVER = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getHelloWorld() : Observable<Hello> {
    return this.httpClient.get<Hello>(this.REST_API_SERVER);
  }
}

export interface Hello {
  greeting: string;
}
