import { Component } from '@angular/core';
import { MyserviceService } from './Services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List';
  constructor(private service: MyserviceService) { }
}
