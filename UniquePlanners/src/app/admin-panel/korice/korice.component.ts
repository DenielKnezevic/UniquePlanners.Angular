import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PlannerCovers } from 'src/app/models/planner-covers';
import { PlannerCoverService } from 'src/app/services/planner-cover.service';
import { KoriceDialogComponent } from './korice-dialog/korice-dialog.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { PlannerCoversUpsertRequest } from 'src/app/models/planner-covers-upsert-request';

@Component({
  selector: 'app-korice',
  templateUrl: './korice.component.html',
  styleUrls: ['./korice.component.css']
})
export class KoriceComponent implements OnInit {
  
  dataSource: MatTableDataSource<PlannerCovers> = new MatTableDataSource<PlannerCovers>();
  displayedColumns:string[] = ['id', 'cover', 'name', 'planner', 'datumKreiranja', 'datumEditovanja', 'akcija'];
  newCover:PlannerCoversUpsertRequest = <PlannerCoversUpsertRequest> {};
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service:PlannerCoverService,  private dialog:MatDialog, private snackService:SnackbarService) { }

  ngOnInit(): void {
    this.RefreshData();

  }

  RefreshData(){
    let search = {
      'includePlanner' : true,
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
    this.dataSource.filterPredicate = (data: PlannerCovers, filter: string) => {
      return data.planner?.name.toLowerCase().includes(filter);
    };
  }

  addNewCover(){
    let dialogRef = this.dialog.open(KoriceDialogComponent, {data:this.newCover, height:'95%', width:'30%'});
    dialogRef.afterClosed().subscribe( result => {
      this.service.Add(result).subscribe( () => {
        this.snackService.showMessage("Successfully added a new cover");
        this.RefreshData();
        this.newCover = <PlannerCoversUpsertRequest> {};
      })
    })
  }

  updateCover(data:PlannerCovers){
    let dialogRef = this.dialog.open(KoriceDialogComponent, {data:data, height:'95%', width:'30%'});
    dialogRef.afterClosed().subscribe( result => {
      this.service.Update(result,result.id).subscribe( () => {
        this.snackService.showMessage("Cover successfully updated");
        this.RefreshData();
      })
    })
  }

  deleteCover(data:PlannerCovers)
  {
    data.isDeleted = true;
    this.service.Update(data,data.id).subscribe( results => {
      this.snackService.showMessage("Successfully deleted planner cover");
      this.RefreshData();
    })
  }

}
