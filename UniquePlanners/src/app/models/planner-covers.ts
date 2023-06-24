import { Planner } from "./planner";

export interface PlannerCovers {
    id:number,
    plannerId:number,
    cover:string,
    planner:Planner,
    dateCreated:Date,
    dateModified:Date,
    name:string,
    isDeleted:Boolean
}
