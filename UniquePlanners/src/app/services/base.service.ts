import { HttpClient, HttpParams } from "@angular/common/http";


export class BaseService<T> {

  baseUrl: string = 'http://localhost:5192/api/';
  endpoint: string = '';

  constructor(endpoint: string,public http: HttpClient) {
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
