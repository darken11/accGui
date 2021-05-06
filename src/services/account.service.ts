import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {FormGroup} from '@angular/forms';

@Injectable()
export class AccountService {
  private apiAccountUrl = environment.host;

  constructor(public http: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage ;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getInfoAccount(): Observable<Account[]> {

    return this.http.get<Account[]>(this.apiAccountUrl + '/accounts').pipe(catchError(this.handleError));
  }

  onCreatAccount(requestAccount: FormGroup): Observable<Account> {

    const headers = {'content-type': 'application/json'};


    const body = JSON.stringify(requestAccount);
    console.log(body);

    return this.http.post<Account>(this.apiAccountUrl + '/accounts', body, {'headers': headers});

  }
}
