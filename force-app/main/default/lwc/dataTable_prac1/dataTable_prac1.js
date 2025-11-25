import { LightningElement,wire ,track} from 'lwc';
import accdata from '@salesforce/apex/dataTable_apex_class.accDataSend';
export default class DataTable_prac1 extends LightningElement {
   @track allRecords = [];
    merror='';
    visibleRecords = [];  // records for THIS page (10)
    page = 1;
    pageSize = 10;
      columns=[
        { label: 'Name', fieldName: 'Name' },
        { label: 'Email', fieldName: 'Email' },
        { label: 'Phone', fieldName: 'Phone' },
        {label:'Fax' , fieldName:'Fax'}
    ];
   // console.log(accdata); 
   @wire(accdata)showData({data,error}){
     if(data){
      this.allRecords = data;
      //console.log('data',data);
      this.updateVisibleRecords();
     }
     else{
    //  this.allRecords = [];
    //        this.visibleRecords = [];
          alert(error);
    // console.error('Apex error', error)
     }
}
   // Show only 10 records for current page
    updateVisibleRecords() {
        let start = (this.page - 1) * this.pageSize;
        let end = this.page * this.pageSize;
        this.visibleRecords = this.allRecords.slice(start, end);
    }

    handleNext() {
        this.page++;
        this.updateVisibleRecords();
    }

    handlePrev() {
        this.page--;
        this.updateVisibleRecords();
    }

    // disable buttons
    get isPrevDisabled() {
        return this.page === 1;
    }

    get isNextDisabled() {
        return this.page * this.pageSize >= this.allRecords.length;
    }
}