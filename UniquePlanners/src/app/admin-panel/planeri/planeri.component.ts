import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Planner } from 'src/app/models/planner';
import { PlannerService } from 'src/app/services/planner.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { PlaneriDialogComponent } from './planeri-dialog/planeri-dialog.component';
import { PlannerUpsertRequest } from 'src/app/models/planner-upsert-request';

@Component({
  selector: 'app-planeri',
  templateUrl: './planeri.component.html',
  styleUrls: ['./planeri.component.css']
})
export class PlaneriComponent implements OnInit {

  dataSource!: MatTableDataSource<Planner>;
  displayedColumns:string[] = ['id', 'name', 'price', 'description', 'datumKreiranja', 'datumEditovanja', 'akcija'];
  newPlanner:PlannerUpsertRequest = <PlannerUpsertRequest>{};
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service:PlannerService, private dialog:MatDialog, private snackService:SnackbarService) { }

  ngOnInit(): void {
    this.RefreshData();
  }

  RefreshData(){
    let search = {
      'includePlannerCovers' : true,
      'isDeleted' : false
    }
    let body = new HttpParams({fromObject:search})
    this.service.Get(body).subscribe(x => {
      this.dataSource = new MatTableDataSource(x);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSource.filterPredicate = (data: Planner, filter: string) => {
      return data.name.toLowerCase().includes(filter);
    };
  }

  addNewPlanner(){
    console.log("test");
    let dialogRef = this.dialog.open(PlaneriDialogComponent, {data:this.newPlanner, height:'70%', width:'30%'});
    dialogRef.afterClosed().subscribe( result => {
      this.service.Add(result).subscribe( () => {
        this.snackService.showMessage("Successfully added a new planner");
        this.RefreshData();
        this.newPlanner = <PlannerUpsertRequest> {};
      })
    })
  }

  updatePlanner(data:Planner){
    let dialogRef = this.dialog.open(PlaneriDialogComponent, {data:data, height:'70%', width:'30%'});
    dialogRef.afterClosed().subscribe( result => {
      this.service.Update(result,result.id).subscribe( () => {
        this.snackService.showMessage("Planner successfully updated");
        this.RefreshData();
      })
    })
  }

  deletePlanner(data:Planner)
  {
    data.isDeleted = true;
    this.service.Update(data,data.id).subscribe( results => {
      this.snackService.showMessage("Successfully deleted planner cover");
      this.RefreshData();
    })
  }

}
