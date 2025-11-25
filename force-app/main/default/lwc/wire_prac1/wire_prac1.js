import { LightningElement,wire,track,api } from 'lwc';
import csDetail from '@salesforce/apex/wire_prac1_cls.sendCaseList';
export default class Wire_prac1 extends LightningElement {
   capData ;
   capError;
 @api recordId;
  //@track allCasesRec; 
  @wire(csDetail,{accid:'$recordId'})caseData({data,error}){
                 if(data){
                  this.capData = data;
                  this.capError = undefined;
                 }
                 else{
                 this.capError = error; 
                 this.capData = undefined;
                 }
  }

}