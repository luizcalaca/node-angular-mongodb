import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstname: string ="";
  lastname: string ="";
  email: string ="";
  password: string ="";

  constructor(private router: Router,private http: HttpClient){}

  ngOnInit(): void {}

  register(){
    const url = "http://localhost:9992/student/create";

    let bodyData = {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "password" : this.password,
    };


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http.post(url, bodyData, httpOptions)
      .subscribe( (response: any) => {

        if (response.status){
          alert("Student saved. Redirect to login... ");
          this.router.navigateByUrl('');
        }else{
         alert("Incorrect ");
         console.log("Errror login");
        }

    });

  }

  login(){
    this.router.navigateByUrl('')
  }

  save(){
    this.register();
  }

}
