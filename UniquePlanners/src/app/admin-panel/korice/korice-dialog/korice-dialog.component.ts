import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscriber } from 'rxjs';
import { Planner } from 'src/app/models/planner';
import { PlannerCoversUpsertRequest } from 'src/app/models/planner-covers-upsert-request';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'app-korice-dialog',
  templateUrl: './korice-dialog.component.html',
  styleUrls: ['./korice-dialog.component.css']
})
export class KoriceDialogComponent implements OnInit {

  planners:Planner[] = [];
  profileForm = this.formBuilder.group({
    naziv:['' , [Validators.minLength(3),Validators.required]],
    planner:['' , Validators.required]
  });

  constructor(private dialog:MatDialogRef<KoriceDialogComponent> ,
    @Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:FormBuilder, private service:PlannerService) { }

  ngOnInit(): void {
    this.service.Get(new HttpParams().append("isDeleted", false)).subscribe( result => {
      this.planners = result;
    })
  }

  onSelectedNewFile($event:Event) {
    const file:any = ($event.target as HTMLInputElement)?.files?.[0];
    console.log(file);
    this.convertToBase64(file);
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result?.toString()?.split(',')[1]; // Get base64 string without prefix
      console.log(base64String);
      this.data.cover = base64String!; // Assign base64 string to the data object or use it as needed
    };

    reader.readAsDataURL(file);
  }

  readFile(file:File,subscriber:Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload= () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    }

    filereader.onerror= (error) => {
      subscriber.error(error);
    }

  }

  save(){
    this.data.isDeleted = false;
    console.log(this.data);
    this.dialog.close(this.data);
  };

}
