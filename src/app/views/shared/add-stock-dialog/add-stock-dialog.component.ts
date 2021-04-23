import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormControl,
  Validators,
  FormGroup,
  FormGroupDirective,
  NgForm,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-add-stock-dialog',
  templateUrl: './add-stock-dialog.component.html',
  styleUrls: ['./add-stock-dialog.component.scss']
})
export class AddStockDialogComponent implements OnInit {

  stockForm: FormGroup = this.fb.group({
    Open: ["", [Validators.required]],
    Close: ["", [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddStockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  get Open() {
    return this.stockForm.get("Open");
  }

  get Close() {
    return this.stockForm.get("Close");
  }

  ngOnInit(): void {
  }

  public closeDialog(res: any) {
    this.dialogRef.close(res);
  }
  public saveStockData() {
    this.stockForm.value
    this.dialogRef.close(this.stockForm.value)
  }

}
