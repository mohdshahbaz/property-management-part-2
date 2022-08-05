import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  public propertyForm!: FormGroup;
  propertyData:any = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.propertyForm = this.fb.group({
      name: ['', Validators.required],
      size: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log("value", this.propertyForm.value);

    const data = {
      records: [
        {
          fields: this.propertyForm.value
        }
      ]
    }

    this.propertyService.createProperty(data).subscribe(res => {
      this.router.navigate(["/"]);

    })

  }

}
