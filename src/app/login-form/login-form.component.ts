import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { throwError, catchError, Observable, EMPTY } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { RegistrationResponse } from '../definitions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  constructor(private http: HttpClient, private router: Router) {}
  public errors = {
    Email: []
  }

  profileForm = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl('')
  });

  private handleError(response: HttpErrorResponse) {
    if (response.status === 400) {
       this.errors = response.error.errors;
       return EMPTY;
    }
    return throwError(() => response.error);
  }

  private setSession(res: RegistrationResponse) {
    localStorage.setItem('id_token', res.token);
}   

  onSubmit(){
    this.http
    .post<RegistrationResponse>(environment.API_URL + "/account/login", this.profileForm.value, {withCredentials: true})
    .pipe(catchError(this.handleError.bind(this)))
    .subscribe(res => {
      this.setSession(res);
      this.router.navigate([""]);
  });
  }
}
