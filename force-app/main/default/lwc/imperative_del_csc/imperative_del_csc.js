import { LightningElement ,api} from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Imperative_del_csc extends LightningElement {
  @api recordId;
     handleDelete(){
        deleteRecord(this.recordId).then(()=>{
          this.dispatchEvent(
            new ShowToastEvent({
               title : 'success',
               message : 'Record Delete Successfully',
               variant : 'success'
            })
          );
        }).catch(error=>{
           this.dispatchEvent(
            new ShowToastEvent({
              title : 'Can/t Delete This Record due to ',
              message :  + error.body.message,
              variant : 'error'  
            })
           );
        })
    }
}