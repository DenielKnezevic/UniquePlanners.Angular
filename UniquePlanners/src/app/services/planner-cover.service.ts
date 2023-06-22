import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { PlannerCovers } from '../models/planner-covers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlannerCoverService extends BaseService<PlannerCovers> {

  constructor(http:HttpClient) { super("PlannerCovers",http)}
}
