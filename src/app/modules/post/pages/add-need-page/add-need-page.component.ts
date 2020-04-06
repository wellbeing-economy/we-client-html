import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'we-add-need-page',
  templateUrl: './add-need-page.component.html',
  styleUrls: ['./add-need-page.component.scss']
})
export class AddNeedPageComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
      this.checkoutForm = this.formBuilder.group({
          name: '',
          address: ''
      });
  }

  onSubmit(customerData) {
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
  }

  ngOnInit(): void {
  }

}
