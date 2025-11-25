import { LightningElement } from 'lwc';

export default class Comm1_with_lifeCycle_c extends LightningElement {

  subme(event){
   this.dispatchEvent(new CustomEvent('evnsayhi',{detail:'hi',bubbles:true,composed:true}));
  }
  clearme(event){
  this.dispatchEvent(new CustomEvent('evnbye',{detail:'bye',bubbles:true,composed:true}));
  }   
}