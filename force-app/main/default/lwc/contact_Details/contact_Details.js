import { LightningElement,wire,track } from 'lwc';
import showCon from '@salesforce/apex/accData_showcase.conData';
export default class Contact_Details extends LightningElement {
@track consave ;
@wire(showCon)consave;
}