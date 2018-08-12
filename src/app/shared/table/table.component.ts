import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() public tableDataSource: any[] = [];
  @Input() public tableModel: TableInterface[] = [];

  public tableColumn: string[] = [];
  constructor() {}


  ngOnInit() {
    this.tableModel.forEach(column => {
      this.tableColumn = this.tableColumn.concat(column.dataKey);
    });
  }


}
