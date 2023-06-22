import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Planner } from 'src/app/models/planner';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'app-planeri',
  templateUrl: './planeri.component.html',
  styleUrls: ['./planeri.component.css']
})
export class PlaneriComponent implements OnInit {

  dataSource!: MatTableDataSource<Planner>;
  displayedColumns:string[] = ['id', 'name', 'price', 'description', 'akcija'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service:PlannerService) { }

  ngOnInit(): void {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.dataSource = new MatTableDataSource(x);
      this.dataSource.paginator = this.paginator;
    })
  }

}
