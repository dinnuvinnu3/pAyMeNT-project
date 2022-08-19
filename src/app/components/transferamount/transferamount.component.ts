import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Router } from '@angular/router';
import { SenderService } from 'src/app/sender.service';
@Component({
  selector: 'app-transferamount',
  templateUrl: './transferamount.component.html',
  styleUrls: ['./transferamount.component.css']
})
export class TransferamountComponent implements OnInit {

  customerID : string = "";
  sender:any = {
    senderID : String,
    accountHolderName : String,
    balance : Number,
    overDraft : String
  }

  dbicCode : string = "";
  bicCode : string = "";
  receiverName : string = "";
  receiverID : string = "";
  Amount !: number;
  typeOfTransfer : string = "";

  constructor(private senders: SenderService, private router: Router) { }

  public getAllTheDetails() {

    this.senders.getSenderId(this.customerID).subscribe(

      (data) => {

        function msg() {
          const d = document.getElementById('msg') as HTMLDivElement;
          // d.innerHTML = "Customer ID does not exist!";
          d.style.display = 'none';
        }

        var x = Object(data);

        if(x[0] === this.customerID) {
          this.sender.senderID = x[0];
          this.sender.accountHolderName = x[1];
          this.sender.balance = x[2];
          this.sender.overDraft = x[3];

          const fid = document.getElementById('form-id') as HTMLDivElement;
          fid.style.display = 'none';

          const anf = document.getElementById('anf') as HTMLDivElement;
          anf.style.display = 'block';
        }
        else{

          if(this.customerID.length !== 0) {
            const m = document.getElementById('msg') as HTMLDivElement;
            m.style.display = 'block';

            setTimeout(msg, 2000);

          }
        }

      },

      (error) => {

        console.log("ERROR", error);

      }

    );
  }

  public getPaymentDetails() {
    if(this.Amount < 0) {
      alert("Oops!, Amount cannot be in negative")
    }
    else{
    if(this.bicCode === "" || this.Amount === undefined || this.receiverName === "" || this.receiverID === "" || this.typeOfTransfer === "") {
      alert("Fill all the details");
    }
    else{
    this.senders.getBicCode(this.bicCode).subscribe(

      (data) => {

        
    
        if(data === false) {
          this.dbicCode = "false";
        }
        else{
          this.dbicCode = "true";
        }

      },
      (error) => {

        console.log("ERROR", error);

      }

    );

    this.senders.balanceCheck(this.Amount, this.customerID).subscribe(

      (data) => {
        console.log(this.customerID);
        console.log(this.bicCode);
        console.log(this.Amount);
        console.log(this.receiverID);
        console.log(this.receiverName);
        console.log(this.typeOfTransfer);

        if(this.bicCode === "" || this.Amount === undefined || this.receiverName === "" || this.receiverID === "" || this.typeOfTransfer === "") {
          alert("Fill all the details");
        }
        else if(this.dbicCode === "false") {
          alert("BIC Code invalid/not exist");
        }
        else if(data === false) {
          alert("Oops!, You cannot send more money than available balance");
        }
        else {
          alert("Money transferred successfully");
          this.router.navigate(["/", "dashboard"]);
        }
      }

    );
    }
  }
}

  
  ngOnInit(): void {
  }

}
