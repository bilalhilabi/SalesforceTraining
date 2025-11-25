import { LightningElement } from 'lwc';

export default class Lwc_commu_eg1_child extends LightningElement {
   msg;

   handleText(event){
   this.msg= event.target.value;
   }
  
   sendMe(event){
    //creating and dispatching event to parent com //
    this.dispatchEvent(new CustomEvent('eventmsgsend',{detail:this.msg}));
   }
}