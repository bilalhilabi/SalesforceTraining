import { LightningElement } from 'lwc';

export default class Lwc_comm1_P extends LightningElement {
  label='Await for Click button';
  vol=0;  
  plusMe(event){
   if(this.vol>=0 && this.vol<100){
   this.vol = this.vol +1; 
   }
   this.label = event.detail;
  }
  minMe(event){
   if(this.vol >0 && this.vol<100){
    this.vol = this.vol -1;
   }
      this.label = event.detail;
  }  
}