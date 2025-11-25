import { LightningElement } from 'lwc';

export default class Lwc_comm1_c extends LightningElement {

   incrMe(event){
     // here we creating one custome event to send it to parent component//
    this.dispatchEvent(new CustomEvent('evninc',{detail:'volume is increased'})); 
   }
   decMe(event){
   // here we creating one custome event to send it to parent component//
      this.dispatchEvent(new CustomEvent('evndec',{detail:'volume is Decreased'}));
   }
}