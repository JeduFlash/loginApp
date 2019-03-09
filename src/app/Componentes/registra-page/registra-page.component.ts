import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../../servicios/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registra-page',
  templateUrl: './registra-page.component.html',
  styleUrls: ['./registra-page.component.css']
})
export class RegistraPageComponent implements OnInit {
  public email : string;
  public password : string;

  constructor(
    public authService :AuthService,
    public router :Router
    ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then(res =>{
      //console.log("Bien !!!!");
      //console.log(res);
      this.router.navigate(['/privado']);
    }).catch((err) => {
      console.log(err)
    });
  }
}
