import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.css']
})
export class PropertyManagementComponent implements OnInit {

  propertyData:any = [];

  constructor(
    private propertyService: PropertyService
  ) {
   }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(res => {
      this.propertyData = res;
      console.log("====propertyData====",this.propertyData);
    })
  }

}
