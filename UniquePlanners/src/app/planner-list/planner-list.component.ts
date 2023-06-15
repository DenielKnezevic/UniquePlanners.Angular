import { Component, Input, OnInit } from '@angular/core';
import { PlannerService } from '../services/planner.service';
import { Planner } from '../models/planner';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-planner-list',
  templateUrl: './planner-list.component.html',
  styleUrls: ['./planner-list.component.css']
})
export class PlannerListComponent implements OnInit {

  @Input() planners: Planner[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
