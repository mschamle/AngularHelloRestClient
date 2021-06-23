import { Component, OnInit } from '@angular/core';
import { HelloService} from "../services/hello.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  helloWorld = '';

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.helloService.getHelloWorld().subscribe(( data: string)=>{
      console.log(data);
      this.helloWorld = data;
    })
  }

}
