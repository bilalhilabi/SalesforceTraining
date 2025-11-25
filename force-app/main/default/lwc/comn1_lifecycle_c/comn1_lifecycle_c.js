import { LightningElement } from 'lwc';

export default class Comn1_lifecycle_c extends LightningElement {
 msg = '';
  subme(event){
   this.dispatchEvent(new CustomEvent('evnsayhi',{detail:this.msg,bubbles:true,composed:true}));
  }
  clearme(event){
  this.dispatchEvent(new CustomEvent('evnbye',{detail:this.msg,bubbles:true,composed:true}));
  }
  hanMess(event){
    this.msg=event.target.value;
  }     
}