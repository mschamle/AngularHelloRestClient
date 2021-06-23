import { Component, OnInit } from '@angular/core';
import {Hello, HelloService} from "../services/hello.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  greeting: string = "";

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.helloService.getHelloWorld().subscribe(( data: Hello)=>{
      console.log(data);
      this.greeting = data.greeting;
    })
  }

}
