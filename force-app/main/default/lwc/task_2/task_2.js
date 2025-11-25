import { LightningElement } from 'lwc'; 
import crateAcc from '@salesforce/apex/task2_class.createAccount';
/*Task Description
 Create a form holding below fields
Collect the Account Object fields in ones own developer org. ( Assuming everyone have their own developer org for practice)
Account Object fields like
Account name, --> Validation criteria Name must be minimum of 4 characters and should not allow more than 15characters.
Account Number --> Number validation should not be more than 5 digits.
Billing Address --> Text area.
Description --> Text area.
Submit button --> With brand color. 
Write a simple Apex method for inserting Account and Update Account.Along with Test class.*/
export default class Task_2 extends LightningElement {
  accName='';
  accAccNo='';
  accAddress='';
  accDesc='';

  handleName(event){
  let ndata = event.target.value;
  this.accName = ndata; 
  if(ndata.length <3 || ndata.length>15){  
   event.target.setCustomValidity('The Name should be can\'t more then 15 and less then 5');
  }
  else{
 event.target.setCustomValidity('');
  // ndata = event.target.value;
  }
  event.target.reportValidity();
  }
  
  handleAcNo(event){
    let acdata = event.target.value;
    this.accAccNo = acdata; 
    if (acdata.length < 5 || !/^\d+$/.test(acdata)){
     event.target.setCustomValidity('The Account number should be more then 5 digit'); 
    }
    else{
     event.target.setCustomValidity(''); 
    }
    event.target.reportValidity();
  }
  handleAdd(event){
    this.accAddress = event.target.value;
  }
  handleDes(event){
   this.accDesc = event.target.value;
  }
  handleSub(){
   console.log('The Account name is :'+this.accName);
   console.log('The Account Number is :'+this.accAccNo);
   console.log('The Address is :'+this.accAddress);
   console.log('The Description is :'+this.accDesc);
  }
  handlCre(){
    crateAcc({
      acName : this.accName,
      acNo : this.accAccNo,
      biladd : this.accAddress,
      acDes : this.accDesc  
    }
    ).then(result=>{
      let accDetail = result[0].Id; 
     if(accDetail.LastModifiedDate !== accDetail.CreatedDate){ 
     alert('Account Updated Successfully '+ result[0].Id); 
     }
     else {
     alert('Account is Created Successfully '+result[0].Id);
     }
    }).catch(error=>{
    alert('Account Record Created failed due to  '+error.body.message);
    });
  }
}