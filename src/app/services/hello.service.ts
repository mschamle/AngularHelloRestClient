import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private REST_API_SERVER = "http://localhost:8080/HelloWorldRestService/hello";

  constructor(private httpClient: HttpClient) { }

  public getHelloWorld() : Observable<string> {
    return this.httpClient.get<string>(this.REST_API_SERVER);
  }
}
