import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SenderService } from 'src/app/sender.service';
import { Senderdetails } from 'src/app/senderdetails';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {
  senders:any;
  customerId: string = "";
  

  constructor( private senderService : SenderService) { }

    public getAllDetails() {
      this.senderService.getSenderId(this.customerId).subscribe(
        (data) => {
          function msg() {
            const m = document.getElementById('msg') as HTMLDivElement;
            m.style.display = 'none';
          }
          function msg1() {
            const g = document.getElementById('msg1') as HTMLDivElement;
            g.style.display = 'none';
          }
          var x = Object(data);
          console.log(x);
          console.log(this.customerId.length);
          if(x.length !== 0) {

            const buton = document.getElementById('sal') as HTMLDivElement;
            buton.style.display = 'block';

            this.senders = x[2];
          }
          else{
            const buton = document.getElementById('sal') as HTMLDivElement;
            buton.style.display = 'none';

            if(this.customerId.length === 0){
              // const buton = document.getElementById('sal') as HTMLDivElement;
              // buton.style.display = 'none';

              const m1 = document.getElementById('msg1') as HTMLDivElement;
              m1.style.display = 'block';

              setTimeout(msg1, 3000);
            }
            else{
              const m1 = document.getElementById('msg') as HTMLDivElement;
              m1.style.display = 'block';

              setTimeout(msg, 3000);
            }
          }
        },
        (error) => {
          console.log("ERROR", error);
        }
      );
    }
  ngOnInit(): void {}
    
 

}
