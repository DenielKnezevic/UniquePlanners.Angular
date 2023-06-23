import { PlannerCovers } from "./planner-covers";

export interface Planner {
    id:number,
    userId:number,
    name:string,
    price:number,
    description:string,
    plannerCovers:PlannerCovers[],
    dateCreated:Date,
    dateModified:Date
}
