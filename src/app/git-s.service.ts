import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitSService {

  constructor(private http:HttpClient) { }
  // git api base url

  url = 'https://api.github.com/users'

 

  // get profile details
  getProfileDeatilsApi(user:any){
    return this.http.get(`${this.url}/${user}`)
  }

  // get repositories
  getRepoDetails(user:string){
    return this.http.get(`${this.url}/${user}/repos`)
  }
}
