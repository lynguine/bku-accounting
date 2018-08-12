import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public custDataModel: TableInterface[] = [
      { dataKey: 'firstName', dataLabel: 'First name:', dataType: 'string', dataWidth: '150px'},
      { dataKey: 'lastName', dataLabel: 'Last name:', dataType: 'string', dataWidth: '150px'},
      { dataKey: 'phone', dataLabel: 'Phone:', dataType: 'string', dataWidth: '100px'},
      { dataKey: 'email', dataLabel: 'E-Mail:', dataType: 'string', dataWidth: '200px'},
    ];
  public custDataSource: CustomerInterface[] = [
      { firstName: 'best', lastName: 'besureita', phone: '012345678', email: 'mail@mail.com' },
      { firstName: 'auan', lastName: 'besureita', phone: '012345678', email: 'mail@mail.com' },
    ];

  constructor() { }

  ngOnInit() {
  }

}
