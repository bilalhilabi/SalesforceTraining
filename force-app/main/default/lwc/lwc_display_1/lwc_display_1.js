import { LightningElement,track } from 'lwc';
import condata from '@salesforce/apex/createCon_dispaly.creaData';

export default class Lwc_display_1 extends LightningElement {
 @track childData ={pfname:'', plname:'',pAge:'',pcity:''};
  showDetail(event){
  this.childData = {
            pfname: event.detail.cfname,
            plname: event.detail.clname,
            pAge: event.detail.cAge,
            pcity: event.detail.cCity
        };
 }
 clearshow(event){
   this.childData = {
            pfname: event.detail.cfname,
            plname: event.detail.clname,
            pAge: event.detail.cAge,
            pcity: event.detail.cCity
        };
 }
 sendData(event){
   condata({dataobj:this.childData}).then(result=>{ 
    alert('Apex Response',result);
   })
   .catch(error=>{
                const msg = (error && error.body && error.body.message) ? error.body.message : JSON.stringify(error);
            alert('Error occurs: ' + msg);
   });
 }
}