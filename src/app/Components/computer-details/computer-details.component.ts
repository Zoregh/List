import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../Services/myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.css']
})
export class ComputerDetailsComponent implements OnInit {
  public id: number;
  public currentComp: any;


  constructor(private router: Router, private activeRoute: ActivatedRoute, private service: MyserviceService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.currentComp = this.service.getCompByID(this.id);
    });
  }

  public onGoBack() {
    this.service.filteredProducts = this.service.computers;
    this.service.show();
    this.router.navigate([""]);
  }
  
}
