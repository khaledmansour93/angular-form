import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddService } from './add.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  items = this.addService.getData();

  formValues: any;

  creationForm = this.formBuilder.group({
    sample1: [''],
    sample2: [''],
    sample3: [''],
    sample4: [''],
    sample5: [''],
    sample6: [''],
    sample7: [''],
    sample8: [''],
    sample9: [''],
    sample10: ['']
  });

  constructor(
    private addService: AddService,
    private formBuilder: FormBuilder
  ) { }

  onSubmit(): void {
    console.log(this.creationForm.value);
    this.formValues = this.creationForm.value;  // Object to be casted to array
    this.items = this.addService.clearForm();
    console.warn('Your data has been submitted', this.creationForm.value);
    this.creationForm.reset();
  }

  resetForm() {
    this.creationForm.reset();
  }

  chart = new Chart({
    title: {
      text: 'Monthly Average Rainfall'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)'
      }
    },
    tooltip: {
      headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
        '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>', shared: true, useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      type: 'column',
      name: 'Tokyo',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
        148.5, 216.4, 194.1, 95.6, 54.4]
    },
    {
      type: 'column',
      name: 'New York',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3,
        91.2, 83.5, 106.6, 92.3]
    },
    {
      type: 'column',
      name: 'London',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6,
        52.4, 65.2, 59.3, 51.2]
    },
    {
      type: 'column',
      name: 'Berlin',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4,
        47.6, 39.1, 46.8, 51.1]
    }]
  });

  ngOnInit(): void {
  }

}
