import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../Services/myservice.service';
@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  constructor(private service: MyserviceService) { }

  ngOnInit() {
  }

}
