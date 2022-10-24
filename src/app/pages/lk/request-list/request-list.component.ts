import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  public cols!: any[];
  public cars!: any[];

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.cars=[
      {
        vin: 'dfhcvhjdcfbbvd',
        year: '2023',
        brand: 'LADA',
        color: 'серобуромалиновая семерка'
      }
    ]
  }

}
