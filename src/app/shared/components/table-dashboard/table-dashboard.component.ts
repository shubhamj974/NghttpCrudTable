import { Component, OnInit } from '@angular/core';
import { TableService } from '../../service/table.service';
import { Iemp } from '../../model/emp';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-dashboard',
  templateUrl: './table-dashboard.component.html',
  styleUrls: ['./table-dashboard.component.scss'],
})
export class TableDashboardComponent implements OnInit {
  constructor(private _tableService: TableService) {}
  public empArr: Iemp[] = [];

  ngOnInit(): void {
    this.getAllEmp();
  }

  getAllEmp(): void {
    this._tableService
      .getAllEmp()
      .subscribe((res: Iemp[]) => (this.empArr = res));
  }

  onRemoveEmp(id: string) {
    this._tableService
      .removeEmp(id)
      .subscribe((res) => document.getElementById(id)?.remove());
  }
}
