import { LightningElement,api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent} from 'lightning/platformShowToastEvent'; 
export default class Imperative_del_recordPrac2 extends LightningElement {
 @api recordId ;
 delteRec(){
   deleteRecord(this.recordId).then(()=>{
    this.dispatchEvent(
     new ShowToastEvent({
        title : 'success',
        message : 'Record deleted successfully',
        variant : 'success'
     })   
    );
   }).catch(error=>{
    this.dispatchEvent(
        new ShowToastEvent({
         title:'This can/t Deleted ',
         message : error.body.message,
         variant : 'error'   
        })
    );
   }) 
 }
}