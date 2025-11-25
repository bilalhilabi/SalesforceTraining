import { LightningElement ,track} from 'lwc';

export default class Lwc_subcriber_1 extends LightningElement {
  @track formData = {cfname:'',clname:'',cAge:'',cCity:'' };   
 handleAll(event){
    let fieldName=event.target.name;
    let value=event.target.value;

this.formData={...this.formData,[fieldName]:value};
console.log('fieldName',fieldName);
console.log('value',value);
 }
 subme(event){
  //here we send data to parent through custom event //c/contact_Details
   this.dispatchEvent(new CustomEvent('evnchild',{detail:{
                                                           ...this.formData
                                                        }}));

 }
  clearMe(event){
     this.formData = { cfname:'', clname:'',cAge:'',cCity:''};
     this.dispatchEvent(new CustomEvent('envclear',{detail:{
                                                           ...this.formData
     }}));
    this.template.querySelectorAll('lightning-input').forEach(input=>{
     input.value='';
    });
  }  
}