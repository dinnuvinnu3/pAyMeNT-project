import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-payment-service',
  templateUrl: './payment-service.component.html',
  styleUrls: ['./payment-service.component.css']
})
export class PaymentServiceComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  doCheckout(data: any) {
    const url = 'http://localhost:8086/all';
    return this.httpClient.post(url, data);
  }
  ngOnInit(): void {
  }

}
