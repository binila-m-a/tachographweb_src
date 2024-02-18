import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DriverServiceService } from '../services/driver-service.service';

@Component({
  selector: 'app-driverdailyactivity',
  templateUrl: './driverdailyactivity.component.html',
  styleUrls: ['./driverdailyactivity.component.scss']
})
export class DriverdailyactivityComponent implements OnInit {
  driverForm: FormGroup;

  constructor(private fb: FormBuilder, private driverService: DriverServiceService) {
    this.driverForm = this.fb.group({
      driverId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      nationality: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

 
  ngOnInit(): void {
   
  }

  onSubmit(): void {
    if (this.driverForm.valid) {
      const newDriver = this.driverForm.value;
      this.driverService.addDriver(newDriver);
      this.driverForm.reset();
    }
  }
}
