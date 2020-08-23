import {    Injectable  } from '@angular/core';
import {    HttpClient,    HttpHeaders  } from '@angular/common/http';
import {    Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService  {
   token = localStorage.getItem('currentUserToken');
  
  constructor(private http: HttpClient) {}
  getAllEmployees(): Observable < object[] > {
    console.log('get items url', `${config.apiUrl}employees` );      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+this.token
        })
    };
    return this.http.get < object[] > (`${config.apiUrl}employees`,httpOptions);
  }
  registerEmployee(item: object): Observable < object > {
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': "Bearer "+this.token
          })
      };
      return this.http.post < object > (`${config.apiUrl}employees`, item, httpOptions);
  }
  updateEmployee(item: object): Observable < string > {
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': "Bearer "+this.token
          })
      };
      return this.http.put < string > (`${config.apiUrl}employees/`, item, httpOptions);
  }
  deleteEmployee(itemId: number): Observable < string > {
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': "Bearer "+this.token
          })
      };
      return this.http.delete < string > (`${config.apiUrl}employees/` + itemId, httpOptions);
  }
}
