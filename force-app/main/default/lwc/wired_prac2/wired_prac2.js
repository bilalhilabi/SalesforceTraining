import { LightningElement,wire,api } from 'lwc';
import caseData from '@salesforce/apex/caseRecordClass.getCaseData';
export default class Wired_prac2 extends LightningElement {
@api recordId;    
csData;
csError;
@wire(caseData,{caseId:'$recordId'})caseDetailshow({data,error}){
  if(data){
   this.csData = data;
  }
  else{
  this.csError = error;
  }
} 
}