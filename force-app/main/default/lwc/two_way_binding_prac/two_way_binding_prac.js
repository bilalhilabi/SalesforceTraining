import { LightningElement } from 'lwc';

export default class Two_way_binding_prac extends LightningElement {
 name = 'Karan Aujla'; 
 
 handleName(event){
 this.name = event.target.value;
 }
}