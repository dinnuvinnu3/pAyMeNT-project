import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username:"",
    password:""
  }
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
onSubmit(){
  var today = new Date();
  var d = String(today).substring(0,3);
  if(d == "Sun" || d == "Sat"){
    document.write("Saturday and Sunday bank is closed");
  }
  else{
    if(this.credentials.username === "dineshmaram5@gmail.com" && this.credentials.password === "dineshreddy111"){
      this.router.navigate(['', 'dashboard']);
    }
    else{
      if(this.credentials.password === "" || this.credentials.username === ""){
        const msg1 = document.getElementById("id2") as HTMLDivElement;
          msg1.style.display = 'block';

          setTimeout(msgg, 2000);

          function msgg() {
            msg1.style.display = "none";
          }
      }
      else{
        
          const msg = document.getElementById("id1") as HTMLDivElement;
          msg.style.display = 'block';

          setTimeout(msgg, 2000);

          function msgg() {
            msg.style.display = "none";
          }

      }
    }
  }
}
}
