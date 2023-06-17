import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string = ''

  constructor(private router: Router, private http: HttpClient) {}

  printEmail(){
    return this.email
  }

  login(email: string, password: string) {
    console.log(email);
    console.log(password);

    let bodyData = {
      email: email,
      password: password,
    };

        this.http.post("http://localhost:9992/student/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);

        this.email = email

        if (resultData.status){
           this.router.navigateByUrl('/home');

        }else{
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
    }
}
