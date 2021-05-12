import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  header = "WELCOME TO HAMBARGAR STORE!";
  BURGER = "SOLO BURGERS ARE $5";
  constructor() { }

  ngOnInit(): void {
  }
  getSum()
 {
   let tomato = parseInt((document.getElementById("tomato") as HTMLHtmlElement).innerText);
   let pickles = parseInt((document.getElementById("pickles") as HTMLHtmlElement).innerText) * 2;
  let onions = parseInt((document.getElementById("onions") as HTMLHtmlElement).innerText) * 3;
  let patty = parseInt((document.getElementById("patty") as HTMLHtmlElement).innerText) * 4;

  let sum = tomato + pickles + onions + patty + 5;

   (document.getElementById("final") as HTMLInputElement).value = sum.toString();
 }
  addProduct(A: number)
  {
  let check,toUpdate;
  console.log("imong mama");
  switch(A)
  {
    case 1: 
    check = parseInt((document.getElementById("tomato") as HTMLHtmlElement).innerText);
    (document.getElementById("tomato") as HTMLHtmlElement).innerText = check+1;

    break;
    case 2:
    check = parseInt((document.getElementById("pickles") as HTMLHtmlElement).innerText);
    (document.getElementById("pickles") as HTMLHtmlElement).innerText = check+1;
    break;
    case 3:
      check = parseInt((document.getElementById("onions") as HTMLHtmlElement).innerText);
      (document.getElementById("onions") as HTMLHtmlElement).innerText = check+1;
    break;
    case 4:
      check = parseInt((document.getElementById("patty") as HTMLHtmlElement).innerText);
      (document.getElementById("patty") as HTMLHtmlElement).innerText = check+1;
    break;
  }
  this.getSum();
    
 }
 calculatePayment()
 {
    let check = false;
    let toPay = parseInt((document.getElementById("final") as HTMLInputElement).value);
    let payment = parseInt((document.getElementById("payment") as HTMLInputElement).value);
    if(payment >= toPay)
    {
      let change = payment - toPay;
      alert("CHANGE IS : $ "+change+". \nTHANK YOU FOR ORDERING! HAVE A NICE DAY");
      this.reset();
    }
    else{
      alert("YOU DO NOT HAVE ENOUGH TO PAY FOR THE ORDER");

    }



 }
 reset(){
  (document.getElementById("tomato") as HTMLHtmlElement).innerText = "0";
  (document.getElementById("pickles") as HTMLHtmlElement).innerText = "0";
  (document.getElementById("onions") as HTMLHtmlElement).innerText = "0";
  (document.getElementById("patty") as HTMLHtmlElement).innerText = "0";

  (document.getElementById("final") as HTMLInputElement).value = "5";
  (document.getElementById("payment") as HTMLInputElement).value = "0";


 }
 

}
 
