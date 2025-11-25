import { LightningElement } from 'lwc';
import design1 from '@salesforce/apex/Record_class.design1';
export default class Imperative_prac_ssc1 extends LightningElement {
   firName;
   lasName;
   mobileNo;
   aadharNo;

   handlefn(event){
   this.firName = event.target.value;
   }
   handleLn(event){
   this.lasName = event.target.value;
   }
   handleAad(event){
    this.aadharNo = event.target.value;
   }
   handleMo(event){
    this.mobileNo = event.target.value;
   }

   createStudent(){
    design1({
    fname: this.firName,
    lname: this.lasName,
    mobile: this.mobileNo,
    adharNo: this.aadharNo
    })
    .then(result=>{
      alert('Student Record Created successfully '+result[0].Id);
    })
   .catch(error=>{
    alert('Student Record Created failed due to  '+error.body.message);
   })     
   }
}