public class dataTable_apex_class {
    
   @AuraEnabled(cacheable=true)
   public static list<Account> accDataSend() {
    list<Account> accList = [SELECT id,Name,Phone,fax FROM Account limit 40];
    return accList;
   }
   
}