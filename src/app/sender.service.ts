import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Senderdetails } from './senderdetails';
@Injectable({
  providedIn: 'root'
})
export class SenderService {
 
  constructor(private httpclient : HttpClient) { }

  public getSenderId(customerId:string){
  return this.httpclient.get("http://localhost:8092/details?custId="+customerId);
  }

  public getUsers(){
    return this.httpclient.get("http://localhost:8092/");
  }

  public getBicCode(bicCode : string) {
    return this.httpclient.get("http://localhost:8092/checkBic?bic="+bicCode);
  }

  public balanceCheck(balance : number, custId : string) {
    return this.httpclient.get("http://localhost:8092/checkOverdraft?balance="+balance+"&custId="+custId);
  }

}