import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PlannerCovers } from 'src/app/models/planner-covers';
import { PlannerCoverService } from 'src/app/services/planner-cover.service';

@Component({
  selector: 'app-korice',
  templateUrl: './korice.component.html',
  styleUrls: ['./korice.component.css']
})
export class KoriceComponent implements OnInit {
  
  dataSource: MatTableDataSource<PlannerCovers> = new MatTableDataSource<PlannerCovers>();
  displayedColumns:string[] = ['id', 'cover', 'planner', 'datumKreiranja', 'datumEditovanja', 'akcija'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service:PlannerCoverService) { }

  ngOnInit(): void {
    this.service.Get(new HttpParams().append('includePlanner', true)).subscribe(x => {
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

}
