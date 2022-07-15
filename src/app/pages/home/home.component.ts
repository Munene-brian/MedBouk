import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Ipatient } from './patient';
import { PersonaData } from './persone.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any;
  addpatientForm! :  FormGroup;
  patients: Ipatient[] = [];
  personaData: PersonaData = new PersonaData;
  constructor(private patientService: PatientService, private formbuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.patientService.getpatient()
    .subscribe(data => this.patients = data);


    this.addpatientForm = this.formbuilder.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      dob: ['',[Validators.required]],
      comments:['',[Validators.required]],
      service:[''],
      gender:['']


  })
  }
save(){
          console.log(this.addpatientForm.value);

          this.patientService.saveUser(this.addpatientForm.value).subscribe((res) => console.log(res));
    }

}
