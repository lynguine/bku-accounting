import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public tableStyle: string[] = ['First name:', 'Last name:', 'Phone:', 'Email:'];
  public custDataSource = [
    { firstname: 'best', lastname: 'besureita', phone: '012345678', email: 'mail@mail.com' },
    { firstname: 'auan', lastname: 'besureita', phone: '012345678', email: 'mail@mail.com' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
