import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iemp } from '../model/emp';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  public empUrl = `${environment.baseUrl}/emp.json`;
  constructor(private _http: HttpClient) {}

  objIntoArr(obj: any) {
    let empData: Iemp[] = [];
    for (const item in obj) {
      let data = {
        id: item,
        ...obj[item],
      };
      empData.push(data);
    }
    return empData;
  }

  getAllEmp(): Observable<Array<Iemp>> {
    return this._http.get<any>(this.empUrl).pipe(
      map((res) => {
        return this.objIntoArr(res);
      })
    );
  }

  addNewEmp(obj: Iemp): Observable<Iemp> {
    return this._http.post<any>(this.empUrl, obj);
  }

  getSingleEmp(id: string): Observable<Iemp> {
    let singleEmpUrl = `${environment.baseUrl}/emp/${id}.json`;
    return this._http.get<Iemp>(singleEmpUrl);
  }

  updateEmp(id: string, obj: Iemp) {
    let updateUrl = `${environment.baseUrl}/emp/${id}.json`;
    return this._http.patch<Iemp>(updateUrl, obj);
  }

  removeEmp(id: string): Observable<null> {
    let deleteUrl = `${environment.baseUrl}/emp/${id}.json`;
    return this._http.delete<null>(deleteUrl);
  }
}
