import { LightningElement ,api} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import createContact from '@salesforce/schema/contact';
export default class Impration_csc extends LightningElement {
 @api fname;
 @api Lname;
 @api pho;
 @api EML;
 
 capFirstName(event){
   this.fname = event.target.value; 
 }
 capLastName(event){
 this.Lname = event.target.value;
 }
 capPhone(event){
 this.pho = event.target.value;
 }
 capEmail(event){
  this.EML = event.target.value;  
 }
 SaveMe(){
    // step-----> field mapping 
    const fields = { FirstName : this.fname,
                     LastName : this.Lname,
                     Phone : this.pho,
                     Email : this.EML
                   };
     //STEP 2 -------> OBJECT MAPPING 
     const recordInput = { apiName : createContact.objectApiName ,fields
         
                         };
    // STEP 3 -----> CALL THE IMPERATION METHOD                      
       createRecord(recordInput)
       .then(result=>{
         alert('Contact created successfully '+result.id);
       }).catch(error =>{
        alert('Contact ceration fail due to '+ error.body.message);
       })                 
 }
}