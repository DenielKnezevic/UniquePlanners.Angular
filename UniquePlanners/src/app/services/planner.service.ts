import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Planner } from '../models/planner';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlannerService extends BaseService<Planner> {

  constructor(http:HttpClient) { super("Planner",http) }
}
