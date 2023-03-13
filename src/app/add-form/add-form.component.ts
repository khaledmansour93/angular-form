import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddService } from './add.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  items = this.addService.getData();

  creationForm = this.formBuilder.group({
    data: '',
    value: ''
  });

  constructor(
    private addService: AddService,
    private formBuilder: FormBuilder
  ) { }

  onSubmit(): void {
    this.items = this.addService.clearForm();
    console.warn('Your data has been submitted', this.creationForm.value);
    this.creationForm.reset();
  }

  resetForm() {
    this.creationForm.reset();
  }

  ngOnInit(): void {
  }

}
