import { Component, OnInit } from '@angular/core';
import { Ipatient } from '../home/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-tablerecord',
  templateUrl: './tablerecord.component.html',
  styleUrls: ['./tablerecord.component.css']
})
export class TablerecordComponent implements OnInit {

patient : Ipatient [] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getpatient()
    .subscribe(res => this.patient = res);
  }
}
