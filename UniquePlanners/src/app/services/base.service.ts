import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";


export class BaseService<T> {

  baseUrl: string = 'http://localhost:58188/api/';
  endpoint: string = '';

  constructor(endpoint: string, private http: HttpClient) {
    this.endpoint = endpoint;
  }

  Get(parameters:HttpParams) {
    return this.http.get<T[]>(`${this.baseUrl}${this.endpoint}`, {params:parameters});
  }

  Add(entity: T) {
    return this.http.post<T>(`${this.baseUrl}${this.endpoint}`, entity);
  }

  Update(entity: T, id: number) {
    return this.http.put<T>(`${this.baseUrl}${this.endpoint}/${id}`, entity);
  }
}
