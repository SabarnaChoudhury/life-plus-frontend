import { Routes } from '@angular/router';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';

export const routes: Routes = [
  { path: 'patients', component: PatientListComponent },
  { path: 'doctors', component: DoctorListComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },   // Route for Patient Details
  { path: 'doctors/:id', component: DoctorDetailsComponent },     // Route for Doctor Details
  { path: '', redirectTo: '/patients', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/patients' }
];
