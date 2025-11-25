import { LightningElement } from 'lwc';

export default class Task_try1 extends LightningElement {
    firstName='';
    lastName='';
    phone='';
    email='';
    hanFirName(event){
     this.firstName = event.target.value; 
    }
    hanLasName(event){
     this.lastName = event.target.value; 
    }
    hanPhn(event){
     this.phone = event.target.value;
    }
    hanEml(event){
     this.email = event.target.value;
    }
    hanSub(){
      console.log(`Name is ${this.firstName} lastName ${this.lastName} Phone ${this.phone} Email ${this.email}`);
    }
    hanClear(){
  this.firstName='';
    this.lastName='';
    this.phone='';
    this.email='';
      this.template.querySelectorAll('lightning-input').forEach(input=>{input.value='';});  
      console.clear();
    }
}