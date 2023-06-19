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
    this.service.Get(new HttpParams().append("includePlannerCovers", true)).subscribe(value => {
      this.planners = value;
    });
  }

}
