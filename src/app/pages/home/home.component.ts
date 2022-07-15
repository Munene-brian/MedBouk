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
  constructor(private patientService: PatientService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.patientService.getpatient()
    .subscribe(data => this.patients = data);


    this.addpatientForm = this.formbuilder.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      date: ['',[Validators.required]],
      comment:['',[Validators.required],Validators.minLength(5)],
      service:[''],
      gender:['']



  })
  }
save(){
 this.personaData.name = this.addpatientForm.value.name;
 this.personaData.dob = this.addpatientForm.value.date;
 this.personaData.gender = this.addpatientForm.value.gender;
 this.personaData.service = this.addpatientForm.value.service;
 this.personaData.comment = this.addpatientForm.value.comment;
this.patientService.saveUser(this.personaData)
.subscribe(res => {
  console.log(res)
})

}
}
