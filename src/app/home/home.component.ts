import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegistrationResponse } from '../definitions';
import { error } from 'console';
import { environment } from '../../environments/environment.development';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(protected http: HttpClient) {

  }

  async clickHandler() {

    //// Promise option

    // fetch(environment.API_URL + "/home/test", {
    //   method: "GET",
    //   headers: {
    //     'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(date => console.log(date));

    //// Observable option

    // const o = new Observable<string>(function Conveer(subscriber) {
    //   fetch(environment.API_URL + "/home/test", {
    //     method: "GET",
    //     headers: {
    //       'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(date => {
    //       subscriber.next(date)
    //     });
    // });

    // const recipient = {needData: ''}

    // o.subscribe(function(data: string) {
    //   recipient.needData = data
    // });
    
    this.http.get<string>(environment.API_URL + "/home/test")
    .subscribe(data => console.log(data)); 
  }
}
