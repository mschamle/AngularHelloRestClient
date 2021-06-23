import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class HelloService {

  private REST_API_SERVER = "http://localhost:8080/HelloWorldRestService/hello";

  constructor(private httpClient: HttpClient) { }

  public getHelloWorld() : Observable<Hello> {
    return this.httpClient.get<Hello>(this.REST_API_SERVER);
  }
}

export interface Hello {
  greeting: string;
}
