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

 saveUser(patient: any) {
  console.log(patient);
  return this.http.post(this.baseURL,patient)
}

}
