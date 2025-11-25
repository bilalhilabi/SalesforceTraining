import { LightningElement } from 'lwc';

export default class Lwc_comm_eg1_parent extends LightningElement {
    msgfrmchild;

    callMe(event){
   this.msgfrmchild = event.detail;
    }
}