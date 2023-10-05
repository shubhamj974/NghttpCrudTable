import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableService } from '../../service/table.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss'],
})
export class TableFormComponent implements OnInit {
  public EmpForm!: FormGroup;
  public empId!: string;
  public isEdit: boolean = false;
  constructor(
    private _tableService: TableService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createEmpForm();
    this.editEmp();
  }

  createEmpForm(): void {
    this.EmpForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      attachment: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    });
  }

  onEmpForm() {
    if (this.EmpForm.valid) {
      this._tableService.addNewEmp(this.EmpForm.value).subscribe((res) => {
        this._router.navigate(['/']);
      });
    }
  }

  editEmp() {
    this.empId = this._route.snapshot.params['tableId'];
    this.empId
      ? ((this.isEdit = true),
        this._tableService.getSingleEmp(this.empId)).subscribe((res) =>
          this.EmpForm.patchValue(res)
        )
      : (this.isEdit = false);
  }

  onUpdateEmp() {
    this._tableService
      .updateEmp(this.empId, this.EmpForm.value)
      .subscribe((res) => this._router.navigate(['/']));
  }
}
