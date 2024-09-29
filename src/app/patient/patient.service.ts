import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// Define the structure of the Patient model (optional but recommended)
export interface Patient {
  id?: number;
  name: string;
  age: number;
  diagnosis: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'  // Makes the service available application-wide
})
export class PatientService {
  private baseUrl = `${environment.patientServiceUrl}/patients/`;

  constructor(private http: HttpClient) {}

  // Get the list of patients from the Django backend
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl);
  }

  // Get a single patient by ID
  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}${id}/`);
  }

  // Create a new patient
  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.baseUrl, patient);
  }

  // Update an existing patient by ID
  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.baseUrl}${id}/`, patient);
  }

  // Delete a patient by ID
  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
