import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment as env } from 'src/environments/environment';


export interface CreateNewUserRequest {
  userName: string;
  emailAddress: string;
  password: string;
};

export interface CreateNewUserResponse {
  authToken: string;
};

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  constructor(private http: HttpClient) { }

  register(request: CreateNewUserRequest): Observable<CreateNewUserResponse> {
    return this.http.post<CreateNewUserResponse>(`${env.apiBaseUrl}}/register`, request);
  };
}
