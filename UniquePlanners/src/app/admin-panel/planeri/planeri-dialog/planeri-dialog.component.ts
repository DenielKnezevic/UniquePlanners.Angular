import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-planeri-dialog',
  templateUrl: './planeri-dialog.component.html',
  styleUrls: ['./planeri-dialog.component.css']
})
export class PlaneriDialogComponent implements OnInit {

  profileForm = this.formBuilder.group({
    name:['', Validators.required],
    description:['', Validators.required],
    price:['', Validators.required],
  });

  constructor(private dialog:MatDialogRef<PlaneriDialogComponent> ,
    @Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  save(){
    this.data.isDeleted = false;
    this.data.userId = 1;
    console.log(this.data);
    this.dialog.close(this.data);
  };

}
