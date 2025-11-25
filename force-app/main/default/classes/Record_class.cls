public with sharing class Record_class {
   @AuraEnabled 
   public static list<STUDENT__c> design1(string fname,string lname, string adharNo,decimal mobile){
    list<STUDENT__c> stList = new list<STUDENT__c>();
    STUDENT__c  stdata = new STUDENT__c();
    stdata.STUDENT_FIRST_NAME__c = fname;
    stdata.STUDENT_LAST_NAME__c = lname;
    stdata.AADHAR_NUMBER__c = adharNo;
    stdata.MOBILE_NUMBER__c	= mobile;
    stList.add(stdata);
    if(!stList.isEmpty()){
    insert stList;
   }
    return stlist;
   }
   
}