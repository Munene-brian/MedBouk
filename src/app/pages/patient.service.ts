import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipatient } from './home/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseURL = "/assets/patient.json";

  constructor(private http:HttpClient) { }

 getpatient():Observable<Ipatient[]>{
  return this.http.get<Ipatient[]>(this.baseURL);
 }

 public saveUser(patient: any): Observable<any> {
  return this.http.post<any>(this.baseURL, patient);

}

}
