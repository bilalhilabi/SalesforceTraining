import { LightningElement } from 'lwc';

export default class Comn1_lifecycle_p extends LightningElement {
    mshfromchild ='';
   constructor(){
    super();
   this.template.addEventListener('evnsayhi',this.sayhi.bind(this));
   this.template.addEventListener('evnbye',this.saybye.bind(this));
  }
  sayhi(event){
    this.mshfromchild = event.detail;
   alert('Hello from child component '); 
  }
  saybye(event){
  this.mshfromchild = event.detail;
  alert('bye bye ');
  }    
}