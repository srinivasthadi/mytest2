import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  DaterForm : FormGroup;
  minFromDate= new Date();
  maxToDate = new Date().setDate(2);

  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.DaterForm = this.fb.group({
      StartDate: new FormControl('', this.startDateValidator)
    });
  }

  startDateValidator(control: FormControl) : { [key: string] : any } | null {
    const date = control.value;
    console.log(date);
    if (date === null || date==='') {
      return { requiredFromDate : true };
    } else {
      return null
    }
  
  }

}
