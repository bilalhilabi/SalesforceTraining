import { LightningElement } from 'lwc';

export default class Comm1_with_lifeCycle_p extends LightningElement {

  constructor(){
    super();
   this.template.addEventListener('evnsayhi',this.SayHi.bild(this));
   this.template.addEventListener('evnbye',this.SayBye.bild(this));
  }
  SayHi(event){
   alert('Hello from child component '); 
  }
  SayBye(event){
  alert('bye bye ');
  }  
}