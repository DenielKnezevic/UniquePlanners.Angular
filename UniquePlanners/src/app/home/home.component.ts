import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlannerService } from '../services/planner.service';
import { Planner } from '../models/planner';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  planners: Planner[] = [];

  constructor(private service: PlannerService) { }

  ngOnInit(): void {
    let search = {
      'includePlannerCovers' : true,
      'isDeleted' : false
    }
    let body = new HttpParams({fromObject:search})
    this.service.Get(body).subscribe(value => {
      this.planners = value;
    });
  }

}
